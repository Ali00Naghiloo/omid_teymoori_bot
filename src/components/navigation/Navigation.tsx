"use client";
import { HomeFilled } from "@ant-design/icons";
import { FaSignOutAlt } from "react-icons/fa";
import s from "../../styles/main.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState(pathname);

  return (
    <>
      <section className={s.navigation}>
        <div className={s.title}>
          Omid <span>Teymouri</span>
        </div>

        <div className={s.menu}>
          <div
            className={
              selectedTab === "/dashboard" ? s.selectedTab : s.dashboard
            }
            onClick={() => {
              setSelectedTab("/dashboard");
              router.push("/dashboard");
            }}
          >
            {" "}
            داشبورد{" "}
            <Image src={"/assets/home.svg"} alt="" width={32} height={32} />
            <div
              style={selectedTab === "/dashboard" ? {} : { width: "0" }}
              className={s.selected_sign}
            ></div>
          </div>

          <div
            className={selectedTab === "/signals" ? s.selectedTab : s.signals}
            onClick={() => {
              setSelectedTab("signals");
              router.push("/signals");
            }}
          >
            {" "}
            سیگنال ها{" "}
            <Image src={"/assets/activity.svg"} alt="" width={32} height={32} />
            <div
              style={selectedTab === "/signals" ? {} : { width: "0" }}
              className={s.selected_sign}
            ></div>
          </div>
        </div>

        <div className={s.signout}>
          <Button
            style={{
              background: "none",
              border: "none",
              height: "70px",
              width: "50%",
              fontSize: "1.2em",
            }}
          >
            {" "}
            خروج <FaSignOutAlt style={{ color: "#FF4842" }} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Navigation;
