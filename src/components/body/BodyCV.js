import React from 'react'
import FooterCV from '../FooterCV'
import LeftCV from './LeftCV'
import RightCV from './RightCV'

function BodyCV() {
  return (
    <div>
        {/* <div className="w3-content w3-margin-top" style="max-width:1400px;">
  <div className="w3-row-padding">
  <div className="w3-third"> */}
      
      <LeftCV/>

    {/* </div>
    <div className="w3-twothird"> */}
     <RightCV/>

    {/* </div>
  </div>
  </div> */}
  <FooterCV/>

    </div>
  )
}

export default BodyCV