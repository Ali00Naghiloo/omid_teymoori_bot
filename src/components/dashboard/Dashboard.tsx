"use client";
import Image from "next/image";
import s from "../../styles/main.module.scss";
import { Input, Tooltip } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import CryptoCard from "./CryptoCard";

const Dashboard = () => {
  const [priceUnit, setPriceUnit] = useState("tether");
  const data = [
    {
      month: "January",
      savings: 5000,
      loss: 500,
    },
    {
      month: "February",
      savings: 8000,
      loss: 300,
    },
    {
      month: "March",
      savings: 3000,
      loss: 800,
    },
    {
      month: "April",
      savings: 6000,
      loss: 100,
    },
    {
      month: "May",
      savings: 4000,
      loss: 700,
    },
    {
      month: "June",
      savings: 9000,
      loss: 1200,
    },
  ];

  const handlePriceUnit = (value: string) => setPriceUnit(value);

  return (
    <>
      <section className={s.dasboard_page}>
        {/* <div className={s.search}>
          <Input
            placeholder="چیزی بنویسید..."
            className={s.input}
            prefix={
              <Image
                src={"/assets/dashboard/search.png"}
                alt="search"
                width={20}
                height={20}
              />
            }
          />
        </div> */}

        <div className={s.banner}>
          <Image
            src={"/assets/dashboard/banner.png"}
            alt=""
            width={900}
            height={600}
          />
        </div>

        <div className={s.dashboard_prices}>
          <section className={s.title}>
            <p>قیمت ارزهای دیجیتال</p>
            <div className={s.units}>
              <span
                onClick={() => handlePriceUnit("tether")}
                className={priceUnit === "tether" ? s.selected : ""}
              >
                تتر
              </span>
              <span
                onClick={() => handlePriceUnit("toman")}
                className={priceUnit !== "tether" ? s.selected : ""}
              >
                تومان
              </span>
            </div>
          </section>

          <section className={s.cards}>
            <Swiper
              dir="ltr"
              slidesPerView={"auto"}
              spaceBetween={15}
              className={s.swiper}
            >
              {data.map((item, index) => (
                <SwiperSlide className={s.slide} key={Math.random() * index}>
                  <CryptoCard
                    logo=""
                    name="Bitcoin"
                    symbol="BTC"
                    chain="USDT"
                    currentPrice={32000}
                    percentage={{
                      value: "$32(2%)",
                      color: "red",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <div className={s.chart_container}>
            <LineChart className={s.chart} width={500} height={300} data={data}>
              <CartesianGrid></CartesianGrid>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Legend></Legend>
              <Line type="monotone" dataKey="loss" stroke="green" />
              <Line type="monotone" dataKey="savings" stroke="red" />
            </LineChart>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
