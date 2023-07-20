import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => { 
  return (
    <div style={styles.container}>
        <Link to={'/step1'}><button type="button" className="btn btn-primary">Bienvenidos</button></Link>
    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
    }
}