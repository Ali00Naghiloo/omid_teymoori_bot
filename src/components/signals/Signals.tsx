"use client";
import Image from "next/image";
import s from "../../styles/main.module.scss";
import { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IoMdEye } from "react-icons/io";
interface DataType {
  index: string;
  name: string[];
  price: number;
  strategy: string;
  position: string;
}

const Signals = () => {
  const [currentCards, setCurrentCards] = useState("spot");

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
      render: (record) => (
        <div className={s.card_name}>
          <Image src={record[2]} alt="logo" width={30} height={30} />
          <div>
            <span style={{ fontWeight: "bold" }}>{record[0]}</span> /
            <span style={{ color: "#919EAB" }}>{record[1]}</span>
          </div>
        </div>
      ),
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "استراتژی",
      key: "strategy",
      dataIndex: "strategy",
    },
    {
      title: "پوزیشن",
      key: "position",
      render: (_, record: any) => (
        <Space size="middle">
          <a>{record.position}</a>
          <a className={s.see_more}>
            نمایش <IoMdEye />
          </a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      index: "1",
      price: 32,
      name: ["PNDC", "WETH", "/assets/signals/pndc.png"],
      strategy: "شکست مقاومت",
      position: "خرید",
    },
    {
      index: "2",
      price: 42,
      name: ["PNDC", "WETH"],
      strategy: "شکست مقاومت",
      position: "خرید",
    },
    {
      index: "3",
      price: 32,
      name: ["PNDC", "WETH"],
      strategy: "شکست مقاومت",
      position: "فروش",
    },
  ];

  return (
    <>
      <section className={s.signals_page}>
        <div className={s.tabs}>
          <p
            onClick={() => setCurrentCards("spot")}
            className={currentCards === "spot" ? s.selected : ""}
          >
            اسپات
          </p>
          <p
            onClick={() => setCurrentCards("futures")}
            className={currentCards === "futures" ? s.selected : ""}
          >
            فیوچرز
          </p>
          <p
            onClick={() => setCurrentCards("dex")}
            className={currentCards === "dex" ? s.selected : ""}
          >
            دکس
          </p>
        </div>

        <div className={s.cards}>
          <Table columns={columns} pagination={false} dataSource={data} />
        </div>
      </section>
    </>
  );
};

export default Signals;
