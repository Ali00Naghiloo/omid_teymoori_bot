import Image from "next/image";
import s from "../../styles/main.module.scss";

const Signals = () => {
  return (
    <>
      <section className={s.signals_page}>
        <Image
          src={"/assets/signals/signals.png"}
          alt=""
          width={500}
          height={1000}
        />
      </section>
    </>
  );
};

export default Signals;
