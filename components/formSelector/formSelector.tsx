import React, { useState } from "react";
import { shuffle } from "utils/shuffle";

interface FormSelectorProps {
  totalSize: number,
  totalLength: number,
  onCallback:(groups:number) => void
}
const initGroup = 6
export const FormSelector = (p: FormSelectorProps) => {
  const [groups, setGorups] = useState(initGroup)
  const [person, setPerson] = useState(Math.ceil(p.totalSize/initGroup))

  const handleGroups = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value,10)
    setGorups(value)
    if(value === 0) {
      return setPerson(0)
    }
    const person = Math.ceil(p.totalSize/value)
    setPerson(person)
  }
  const handlePerson = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value,10)
    setPerson(value)
    if(value === 0) {
      return setGorups(0)
    }
    const group = Math.ceil(p.totalSize/value)
    setGorups(group)
  }

  return <div>
    <p>total length: { p.totalLength }</p>
    <p>total size: { p.totalSize }</p>
    <div>
      gruppi:
      <input type="number" value={groups} onChange={handleGroups} min={0} />
    </div>
    <div>
      persone per gruppo:
      <input type="number" value={person} onChange={handlePerson} min={0} />
    </div>
    <button onClick={() => p.onCallback(groups)}>do shuffle</button>
  </div>
}