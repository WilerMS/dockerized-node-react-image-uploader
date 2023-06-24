import { type HTMLProps, type FC } from 'react'

const UploadFileBtn: FC<HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <button
      className='flex items-center justify-center cursor-pointer w-[100px] h-[31px] bg-[#2F80ED] rounded-[8px] text-[12px] text-white'
      onClick={props.onClick}
    >
      Upload File
    </button>
  )
}

export default UploadFileBtn
