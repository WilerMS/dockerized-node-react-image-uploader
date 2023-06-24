import dragdropimage from '@assets/image.svg'
import { type FC } from 'react'
import FaTimes from 'icons/FaTimes'

interface Props {
  file?: File
  onFileDrop: (file: File) => void
  onDeleteFile: () => void
}

const DragDrogFile: FC<Props> = ({
  file,
  onFileDrop,
  onDeleteFile
}) => {
  const handleChangeFile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newFile = e.currentTarget.files?.[0]
    if (newFile) {
      onFileDrop(newFile)
    }
  }

  return (
    <div className='relative w-full h-full rounded-[8px] border border-[#97BEF4] border-dashed overflow-hidden'>
      {!file
        ? <>
            <div className='w-full h-full center flex-col bg-[#F6F8FB]'>
              <img src={dragdropimage} alt="upload an image" />
              <span className='text-[12px] text-[#BDBDBD] mt-[30px]'>Drag & Drop your image here</span>
            </div>
            <input
              id="upload-file"
              className='absolute opacity-0 w-full h-full top-0'
              type="file"
              onChange={handleChangeFile}
            />
          </>
        : <div className='relative group w-full h-full center flex-col'>
            <img
              className='w-full h-full object-cover'
              src={URL.createObjectURL(file)}
              alt='Uploaded img'
            />
            <button
              className='absolute opacity-0 group-hover:opacity-100 transition top-2 right-2 bg-white rounded-full border border-gray-200 shadow'
              onClick={onDeleteFile}
            >
              <FaTimes
                width={20}
                height={20}
                color='#a10000'
              />
            </button>
        </div>
      }
    </div>
  )
}

export default DragDrogFile
