import Navbar from '../ui/dashboard/navbar/navbar.jsx'
import Sidebar from '../ui/dashboard/sidebar/sidebar.jsx'
import styles from '../ui/dashboard/dashboard.module.css'


const Layout = ({ children }) => {
    return ( 
     <div className={styles.container}>
      <div className={styles.menu}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Sidebar />
        {children}
      </div>
     </div>
      
    )
  }
  
  export default Layout
