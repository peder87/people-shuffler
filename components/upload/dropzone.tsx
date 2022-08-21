import { useDropzone } from "react-dropzone";

interface DzoneProps {
  onFileDrop:(f:File) => void
}

export const Dzone = (p:DzoneProps) => {
  const {acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject} = useDropzone({
    accept: 'text/csv',
    maxFiles: 1,
    onDropAccepted: <T extends File>([file]: T[]) => {
      console.log(file.name)
      p.onFileDrop(file)
    }
  })

  return (
    <div css={theme => ({color: 'blue', paddingTop: theme.spacings["2xl"]})}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <p css={{color: 'red'}}>carica un file .csv</p>}
        {isDragAccept && <p>release to upload file</p>}
        {isDragReject && <p>wrong format</p>}
      </div>
    </div>
  )
}