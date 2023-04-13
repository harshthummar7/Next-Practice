import React,{useEffect} from 'react'
import { useRouter } from 'next/router'

export default function modelname() {
    const router = useRouter()
    const {brandname,modelname} = router.query
    console.warn(router.query)

  return (
    <div>
      <h1>brand name is {brandname} model name is {modelname}</h1>
    </div>
  )
}
