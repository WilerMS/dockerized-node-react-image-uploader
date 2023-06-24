import FileUploader from '@components/FileUploader'
import Loading from '@components/Loading'
import cn from 'classnames'
import SuccesUploadedImage from '@components/SuccesUploadedImage'
import { useFiles } from '@hooks/useFiles'

function App () {
  const { data, isLoading, postFile } = useFiles('http://localhost:4000/files')
  const handleUploadFile = (file: File) => { postFile(file) }

  const height = !isLoading && data
    ? 'h-[600px]'
    : isLoading
      ? 'h-[143px]'
      : 'h-[469px]'

  return (
    <div className='App'>
      <div className={cn(height, 'w-[402px] bg-white rounded-[12px] p-[32px] shadow-[0px_4px_12px_0px_#0000001A] transition-all ease-out duration-200')}>
        {!isLoading && data
          ? <SuccesUploadedImage file={`http://localhost:4000${data}`} />
          : isLoading
            ? <Loading />
            : <FileUploader onUploadFile={handleUploadFile} />
        }
      </div>
    </div>
  )
}

export default App
