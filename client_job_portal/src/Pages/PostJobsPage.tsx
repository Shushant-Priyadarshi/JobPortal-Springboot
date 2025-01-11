import { Divider } from '@mantine/core'
import PostJob from '../components/PostJobs/PostJob'


const UploadJobsPage = () => {
  return (
    <>
    <Divider size="xs" mx="md"/>
    <div className=" min-h-[100vh] text-white p-4">
    <PostJob/>
  </div>
  </>
  )
}

export default UploadJobsPage