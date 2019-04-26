import React from 'react'

const ModalFeatures = ({features}) => {
    let featureItems = features.map((feature, index) => {
        return(
            <li key={feature}>{feature}</li>
        )
    })
  return (
    <div className='modal-description-feature'>
        <ul>
            {featureItems}
        </ul>
    </div>
  )
}


export default ModalFeatures