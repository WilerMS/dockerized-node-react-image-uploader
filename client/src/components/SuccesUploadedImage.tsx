import FaCheck from 'icons/FaCheck'
import { type FC } from 'react'

interface Props {
  file: string
}

const SuccesUploadedImage: FC<Props> = ({
  file
}) => {
  const handleCopyLink = () => {
    if (!file) return
    navigator.clipboard.writeText(file).catch(() => {})
  }
  return (
    <div className='fadeIn'>
      <div className='header mt-3 flex flex-col items-center gap-[15px]'>
        <span className='rounded-full p-2 bg-[#219653]'>
          <FaCheck
            color="#fff"
            width={42}
            height={42}
          />
        </span>
        <h3 className='text-[#4F4F4F] text-[18px] text-center'>
          Uploaded Successfully!
        </h3>
      </div>

      <div className='rounded-[12px] overflow-hidden w-full h-[350px] mt-[20px]'>
        <img className='h-full object-cover' src={file} alt="uploaded foto" />
      </div>

      <div className='flex items-center justify-center w-full h-[32px] mt-[15px]'>
        <div className="w-full h-full flex items-center justify-between p-[2px] bg-[#E0E0E0] rounded-[8px]">
          <span className='block pl-2 text-[8px] truncate w-[calc(100%_-_100px)]'>{file}</span>
          <button
            onClick={handleCopyLink}
            className='flex items-center justify-center cursor-pointer w-[80px] h-full bg-[#2F80ED] rounded-[6px] text-[8px] text-white'
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccesUploadedImage
