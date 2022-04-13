// import React from 'react'




// const layouts = () => {
// return (
//   <>
//   <Menu />
//   <Footer />

//   </>
// );
// }

// export default layouts

import React from 'react'
import Navigation from './navigation'
// import MainContent from './maincontent'

const Layouts = (props) => {
  return (
    <>
      <Navigation />
       {/* <MainContent>
        {props.children}
      </MainContent>  */}
   </>
  )
}

export default Layouts