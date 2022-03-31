import { UserType } from "./codecs";
import { enoughSpace, getRecurringCount, getUserlistSize, makeADraft, shuffleGroups } from "./utils";

export const shuffle = (items:UserType[],groupNumber:number) => {
  let groups: UserType[][] = Array.from({length:groupNumber },() => [])
  const limit = Math.ceil(getUserlistSize(items)/groupNumber)
  const checker = enoughSpace(limit)
  const currentItems = [...items]
  while(currentItems.length) {
    const draftItem = makeADraft(currentItems)
    const draftUser = currentItems[draftItem]
    const initReduce = {groups, done:false}
    const r = groups.reduce((acc,item,index) => {
      if(checker(item,draftUser) && !acc.done) {
        return {
          ...acc,
          done: true,
          groups: [
            ...acc.groups.slice(0,index),
            [...acc.groups[index],draftUser],
            ...acc.groups.slice(index+1,acc.groups.length)
          ]
        }
      }
      return acc
    }, initReduce)
    if(r.done) {
      groups = shuffleGroups(r.groups)
      currentItems.splice(draftItem,1)
    }
  }
  
  console.log(groups)
  console.table(getRecurringCount(groups))
  return groups
}