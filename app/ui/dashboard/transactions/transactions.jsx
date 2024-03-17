import styles from "./transactions.module.css";
import TableContent from "./tableContent/tableContent";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latset Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <TableContent
            imgPath="/noavatar.png"
            name="John Doe"
            status="pending"
            date="14.02.2024"
            amount="3.200$"
          />
          <TableContent
            imgPath="/noavatar.png"
            name="Alice Smith"
            status="done"
            date="03.10.2023"
            amount="5,500$"
          />
          <TableContent
            imgPath="/noavatar.png"
            name="Bob Johnson"
            status="cancelled"
            date="21.06.2022"
            amount="8,750$"
          />
          <TableContent
            imgPath="/noavatar.png"
            name="Emily Davis"
            status="done"
            date="09.12.2025"
            amount="6,300$"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
