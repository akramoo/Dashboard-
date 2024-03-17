import Image from "next/image";

import styles from "./tableContent.module.css";

const TableContent = ({ imgPath, name, status, date, amount }) => {
  return (
    <>
      <tr>
        <td>
          <div className={styles.user}>
            <Image
              src={imgPath}
              alt=""
              width={40}
              height={40}
              className={styles.userImage}
            />
            {name}
          </div>
        </td>
        <td>
          <span className={`${styles.status} ${styles[status]}`}>{status}</span>
        </td>
        <td>{date}</td>
        <td>{amount}</td>
      </tr>
    </>
  );
};

export default TableContent;
