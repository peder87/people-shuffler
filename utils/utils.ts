import { UserType } from "./codecs"
import { pipe } from 'fp-ts/lib/function'
import * as S from 'fp-ts/Semigroup'
import * as N from 'fp-ts/number'
import * as A from 'fp-ts/Array'

export const getUserlistSize = (userList: UserType[]):number => {
  const sum = S.concatAll(N.SemigroupSum)(0)
  return pipe(userList,A.map(i => i.size),sum)
}

export const makeADraft = (array: unknown[]) => {
  return Math.floor(Math.random() * array.length)
}

export const enoughSpace = (limit:number) => (groups: UserType[], user:UserType) => {
  return (getUserlistSize(groups) + user.size) <= limit
}

// export const popIndex = (userList:UserType[],index:number) => {
//   return [
//     ...userList.slice(0,index),
//     ...userList.slice(index+1,userList.length)
//   ]
// }

export const shuffleGroups = (groups: UserType[][]) => {
  const copy = []
  let n = groups.length
  while(n) {
    const i = Math.floor(Math.random() * n--)
    const p = groups.splice(i,1)[0]
    copy.push(p)
  }
  return copy
}

const countMatch = (as:number[]) => (query:number) => {
  return as.reduce((a,b) =>  b === query ? a+1 : a, 0)
}

export const getRecurringCount = (as:UserType[][]) => {
  const mappedLength = as.map(item => item.length)
  const counter = countMatch(mappedLength)
  return Array.from(new Set(mappedLength))
    .reduce((a,b) => {
      return {
        ...a,
        [b]: counter(b)
      }
    },{})

}