import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
//import Sidebar from '@/componenet/Sidebar'
const Sidebar = dynamic(()=>import('../componenet/Sidebar').then((e)=>e.Sidebar),{
  ssr:false,
  loading:()=><h1>load.........................................</h1>
})


export default function home() {
  return (
    <div>
       <Link href={"/info"}>
        <button>click</button>
       </Link>
       <Sidebar></Sidebar>
    </div>
  )
}
