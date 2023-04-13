
import { useRouter } from 'next/router'

const info = () =>{
    const router = useRouter()
    const {info} = router.query
   
  return (
    <div>
        
      hi how are you

    </div>
  )
}

export default info
