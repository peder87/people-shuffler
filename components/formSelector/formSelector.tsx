import React, { useEffect, useState } from "react";
// import { shuffle } from "utils/shuffle";

interface FormSelectorProps {
  totalSize: number,
  totalLength: number,
  onCallback: (groups: number) => void
}

const initGroup = 6
const limit = 5



export const FormSelector = (p: FormSelectorProps) => {
  const [groups, setGorups] = useState(initGroup)
  const [person, setPerson] = useState(Math.ceil(p.totalSize / initGroup))
  const [warning, setWarning] = useState(false)

  const handleGroups = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value === 0) return setPerson(0)
  
    const person = Math.ceil(p.totalSize / value)
    const update = person >= limit
    setWarning(!update)
    setGorups(x => update ? value : x)
    setPerson(x => update ? person : limit);
  }

  const handlePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value === 0) {
      setPerson(value)
      return setGorups(0)
    }
    const group = Math.ceil(p.totalSize / value)
    setGorups(group)
  }

  return <div>
    <p>total length: {p.totalLength}</p>
    <p>total size: {p.totalSize}</p>
    {warning && <strong>limite raggiunto</strong>}
    <div>
      gruppi:
      <input type="number" value={groups} onChange={handleGroups} min={1} />
    </div>
    <div>
      persone per gruppo:
      <input type="number" value={person} onChange={handlePerson} min={limit} />
    </div>
    <button onClick={() => p.onCallback(groups)}>do shuffle</button>
  </div>
}
