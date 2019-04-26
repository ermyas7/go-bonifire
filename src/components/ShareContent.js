import React from 'react'
import facebookLike from '../assets/images/facebook-like.png'
import tweet from '../assets/images/tweet.jpeg'
import pinit from '..//assets/images/pinit.png'

function ShareContent() {
  return (
    <div style={styles.container}>
        <p style={styles.shareText}>Share this</p>
        <div style={styles.logoContainer}>
            <img src={facebookLike} alt='facebook like' style={styles.logo}/>
            <span style={styles.shareCount}>235k</span>
        </div>
        <div style={styles.logoContainer}>
            <img src={tweet} alt='tweet' style={styles.logo}/>
            <span style={styles.shareCount}>235</span>
        </div>
        <div style={styles.logoContainer}>
            <img src={pinit} alt='pin it' style={styles.logo}/>
            <span style={styles.shareCount}>10k</span>
        </div>
    </div>
  )
}

const styles = {
    container : {
        display: 'flex',
        alignItems: 'center',
    },
    shareText:{
        fontSize: '1.5rem',
        fontWeight: '500',
        textTransform: 'upperCase'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        overFlow: 'hidden',
        height: '2rem',
        marginLeft: '2rem',
    },
    logo : {
        height: '100%',
        width: 'auto',
        cursor: 'pointer'
    },
    shareCount: {
        padding: '1px 2px',
        border: 'solid var(--color-grey-light-4) 1px',
        fontSize: '1rem'
    }
}

export default ShareContent