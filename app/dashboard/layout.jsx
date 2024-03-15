

import Navbar from '../ui/dashboard/navbar/navbar.jsx'
import Sidebar from '../ui/dashboard/sidebar/sidebar.jsx'


const Layout = ({ children }) => {
    return ( 
     <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
        {children}
      </div>
     </div>
      
    )
  }
  
  export default Layout
