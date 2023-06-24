import { type FC } from 'react'

interface Props {
  onSelectFile: (file: File) => void
}

const SelectFileBtn: FC<Props> = ({
  onSelectFile
}) => {
  const handleChangeFile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newFile = e.currentTarget.files?.[0]
    if (newFile) {
      onSelectFile(newFile)
    }
  }

  return (
    <label
      className='flex items-center justify-center cursor-pointer w-[100px] h-[31px] bg-[#2F80ED] rounded-[8px] text-[12px] text-white'
      htmlFor='upload-file'
    >
      Choose a file
      <input className='hidden' type="file" id="upload-file" onChange={handleChangeFile}/>
    </label>
  )
}

export default SelectFileBtn
