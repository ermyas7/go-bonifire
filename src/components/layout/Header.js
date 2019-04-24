import React from 'react'
const Header = (props) => {
  return (
    <header>
          <div>
             <div>
               
            </div>
            <h1>BONIFIRE</h1>
            <div></div> 
          </div>
    </header>
  )
}
const styles = {
  header : {
      height: 80,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid'
    },
    heading: {
      color: '#00a1e7',
      fontSize: '40px',
      textTransform: 'uppercase'
    }
}

  export default Header
