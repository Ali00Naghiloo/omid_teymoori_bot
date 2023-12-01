import Image from "next/image";
import s from "../../styles/main.module.scss";

const Account = () => {
  return (
    <>
      <section className={s.account}>
        <div className={s.details}>
          <div className={s.title}>حساب کاربری</div>
          <div className={s.name}>
            <p className={s.balance}>1500 $</p>
            <p>امیرحسین نوروززاده</p>
          </div>
          <div className={s.plan}>اعتبار باقی مانده : 34 روز</div>
          <div className={s.add_charge}>شارژ حساب +</div>
        </div>

        <div className={s.saves}>
          <div className={s.title}>ذخیره</div>
          <Image
            src={"/assets/save-list.png"}
            alt=""
            width={300}
            height={250}
          />
        </div>
      </section>
    </>
  );
};

export default Account;
