import React from 'react'
import './DescriptionBox.css'
function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam beatae eveniet architecto molestias vel, numquam tempore, illo maiores commodi hic vitae voluptate adipisci quam culpa impedit esse modi quia?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, alias? Illo itaque eius esse, molestias dolore explicabo commodi nulla, aspernatur rem non soluta, veritatis consequuntur atque. Quis quia saepe at.</p>
      </div>
    </div>
  )
}

export default DescriptionBox