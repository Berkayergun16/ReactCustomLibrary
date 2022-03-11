import React from 'react'
import Dashboard from './pages/Dashboard'
import styles from './styles.module.css'
const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <Dashboard />
      </div>
    </div>
  )
}
export default App
