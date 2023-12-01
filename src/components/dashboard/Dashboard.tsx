import Image from "next/image";
import s from "../../styles/main.module.scss";

const Dashboard = () => {
  return (
    <>
      <section className={s.dashboard_page}>
        <Image
          src={"/assets/dashboard/dashboard.png"}
          alt=""
          width={500}
          height={1000}
        />
      </section>
    </>
  );
};

export default Dashboard;
