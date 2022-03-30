import * as t from 'io-ts'

export const userCodec = t.type({
  name: t.string,
  size: t.number
})

export type UserType = t.TypeOf<typeof userCodec>