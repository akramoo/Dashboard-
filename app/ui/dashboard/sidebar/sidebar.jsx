// importing the style
import styles from "./sidebar.module.css";

// importing the object
import menuItems from "./menuItems.js";

// importing the components
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          height={50}
          width={50}
          alt=""
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Joe</span>
          <span className={styles.userTitle}>Adminstrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
