import Image from "next/image";
import s from "../../styles/main.module.scss";

type criptoCard = {
  logo: string | null;
  symbol: string;
  chain: string;
  name: string;
  currentPrice: number;
  percentage: {
    value: string;
    color: string;
  };
};

const CryptoCard = ({
  logo,
  symbol,
  chain,
  name,
  currentPrice,
  percentage,
}: criptoCard) => {
  return (
    <>
      <div className={s.currency_card}>
        <div className={s.logo_name}>
          <div className={s.logo}>
            <Image
              src={"/assets/signals/pndc.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>

          <div className={s.name}>
            <div>
              <span>{symbol}</span>/ <span>{chain}</span>
            </div>
            <p>{name}</p>
          </div>
        </div>

        <div className={s.price_detail}>
          <div className={s.price}>{currentPrice}</div>
          <div className={s.percentage_red}>{percentage.value}</div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
