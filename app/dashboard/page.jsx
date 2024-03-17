import Card from "../ui/dashboard/card/card.jsx";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions.jsx";
import Rightbar from "../ui/dashboard/rightbar/rightbar.jsx";

import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
