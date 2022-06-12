import { Dzone } from './dropzone'
import { csvParser }  from '../../utils/csvParser'
import { UserType } from 'utils/codecs'

interface UplaodProps {
  updateList:(uList:UserType[]) => void
}

export const Upload = (p:UplaodProps) => {
  const doStuff = (f:File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if(typeof reader.result === 'string') {
        p.updateList(csvParser(reader.result))
      }
      
    }
    reader.readAsText(f)
  }

  return <div data-testid="upload">
    <div>
      <Dzone onFileDrop={doStuff} />
    </div>
  </div>
}