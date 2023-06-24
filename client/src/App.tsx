import { useState } from 'react'
import FileUploader from '@components/FileUploader'
import Loading from '@components/Loading'
import cn from 'classnames'
import SuccesUploadedImage from '@components/SuccesUploadedImage'

function App () {
  const [file, setFile] = useState<File>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChangeFile = (file: File | undefined) => {
    console.log({ file })
    setFile(file)
  }

  const handleUploadFile = (file: File) => {
    console.log({ file })
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 5000)
  }

  const height = !isLoading && isSuccess
    ? 'h-[600px]'
    : isLoading
      ? 'h-[143px]'
      : 'h-[469px]'

  return (
    <div className='App'>
      <div
        className={cn(height, 'w-[402px] bg-white rounded-[12px] p-[32px] shadow-[0px_4px_12px_0px_#0000001A] transition-all ease-out duration-200')}
      >
        {!isLoading && isSuccess
          ? <SuccesUploadedImage
              /* @ts-expect-error */
              file={URL.createObjectURL(file)}
            />
          : isLoading
            ? <Loading />
            : <FileUploader
              onChangeFile={handleChangeFile}
              onUploadFile={handleUploadFile}
            />
        }
      </div>
    </div>
  )
}

export default App
