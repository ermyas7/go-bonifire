import React from 'react'

class Popup extends React.Component{
    state = {
        show: true
    }
    hidePopup = () => {
        this.setState({show: false})
    }
    render(){
        if(!this.state.show)
            return null;
        return (
            <div className='popup'>
                <p>Start Selling you product or buy them from anywhere!</p>
                <span onClick={this.hidePopup}>X</span>
            </div> 
          )
    }
}

export default Popup