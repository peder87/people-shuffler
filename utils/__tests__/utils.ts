import { UserType } from "../codecs";
import { enoughSpace, getUserlistSize, popIndex  } from "../utils";

const mockUserTypeList: UserType[] = [
  {name: 'pippo', size: 1},
  {name: 'pluto', size: 2},
  {name: 'minnie', size: 2},
  {name: 'paperoga', size: 6},
  
]

describe('testing getUserListSize', () => {
  it('should return zero if userlist is empty', () => {
    expect(getUserlistSize([])).toBe(0)
  })

  it('should return the sum of the sum of the all userTypes size', () => {
   expect(getUserlistSize(mockUserTypeList)).toBe(11)
  })
});

describe('testing enoughSpace', () => {
  it('should return true, the group limit is greater than new size', () => {
    expect(enoughSpace(13)(mockUserTypeList,{name:'pino',size:1})).toBeTruthy() 
  })
  
  it('should return true, the group limit is equal the new size', () => {
    expect(enoughSpace(12)(mockUserTypeList,{name:'pino',size:1})).toBeTruthy() 
  })

  it('should return false, the group limit is lower the new size', () => {
    expect(enoughSpace(11)(mockUserTypeList,{name:'pino',size:1})).toBeFalsy() 
  })
})

describe('testing popIndex', () => {
  it('should rendurn new array withoud givenIndex', () => {
    const pick = mockUserTypeList[1]
    const poppedArray = popIndex(mockUserTypeList,1)
    const found = poppedArray.find(item => pick.name === item.name)
    expect(found).toBeUndefined() 
    expect(poppedArray[1].name).not.toEqual(pick.name)
    expect(poppedArray.length).toEqual(mockUserTypeList.length -1)
  })
})