import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
      <Header/>
          <h1>layout Page</h1>
           {children}
      <Footer/>
    </div>
  )
}

export default Layout
