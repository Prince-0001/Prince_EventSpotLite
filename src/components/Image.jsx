import React  from 'react'


const Image = ({url}) => {
    
  return (
    <div className="img">
        <img src={`/images/${url}`} alt=''></img>
    </div>
  )
}

export default Image
