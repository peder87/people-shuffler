import { pipe } from 'fp-ts/lib/function'
import * as A from 'fp-ts/lib/Array'
import { userCodec, UserType} from './codecs'
import { splitEasy } from 'csv-split-easy'

const itemParser = (as: string[]): UserType => {
  const [name,size] = as
  return {
    name,
    size: parseInt(size,10)
  }
}

export const csvParser = (s: string): UserType[] => {
  return pipe(s, splitEasy, A.map(itemParser),A.map(userCodec.decode), A.rights)
}
