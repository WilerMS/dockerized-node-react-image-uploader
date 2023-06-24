import DragDrogFile from '@components/DragDrogFile'
import { type FC, useState } from 'react'
import SelectFileBtn from '@components/SelectFileBtn'
import UploadFileBtn from './UploadFileBtn'

interface Props {
  onChangeFile?: (file: File | undefined) => void
  onUploadFile: (file: File) => void
}

const FileUploader: FC<Props> = ({
  onChangeFile = () => { },
  onUploadFile
}) => {
  const [file, setFile] = useState<File>()

  const handleDeleteFile = () => {
    setFile(undefined)
    onChangeFile(undefined)
  }
  const handleUploadFile = () => file && onUploadFile(file)
  const handleChargeFile = (file: File) => {
    setFile(file)
    onChangeFile(file)
  }

  return (
    <div>
      <div className='header flex flex-col gap-[15px]'>
        <h1 className='text-center text-[18px]'>Upload your image</h1>
        <h3 className='text-[#828282] text-[10px] text-center'>File should be Jpeg, Png...</h3>
      </div>

      <div className='rounded-[12px] w-full h-[235px] mt-[30px]'>
        <DragDrogFile
          onFileDrop={handleChargeFile}
          onDeleteFile={handleDeleteFile}
          file={file}
        />
      </div>

      <span className='block text-[#828282] text-[12px] mt-[15px] text-center truncate'>
        {file?.name ?? 'OR'}
      </span>

      <div className='flex items-center justify-center w-full mt-[18px]'>
        {!file
          ? <SelectFileBtn
              onSelectFile={handleChargeFile}
            />
          : <UploadFileBtn
              onClick={handleUploadFile}
            />
        }
      </div>
    </div>
  )
}

export default FileUploader
