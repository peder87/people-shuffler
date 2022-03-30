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
    <div className="p-6">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <p>carica un file .csv</p>}
        {isDragAccept && <p>release to upload file</p>}
        {isDragReject && <p>wrong format</p>}
      </div>
    </div>
  )
}