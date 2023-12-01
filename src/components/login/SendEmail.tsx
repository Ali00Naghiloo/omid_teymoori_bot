"use client";
import { Button, ConfigProvider, Form, Input, InputNumber } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import theme from "@/src/theme/themeConfig";
import s from "../../styles/login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SendEmail = () => {
  const router = useRouter();
  const [email, setEmail] = useState();

  return (
    <>
      <ConfigProvider theme={theme}>
        <section className={s.sendEmail}>
          <div className={s.image}>
            <Image
              src={"/assets/login/login-background-1.png"}
              alt=""
              width={600}
              height={900}
            />
          </div>

          <Form className={s.content}>
            <div className={s.titles}>
              <p>ورود به سیستم</p>
              <p>لطفا شماره تلفن خود را وارد کنید.</p>
            </div>
            <div className={s.input}>
              <InputNumber
                style={{
                  direction: "ltr",
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
                placeholder="شماره تلفن"
                type="number"
              />
            </div>
            <div className={s.btn}>
              <Button
                onClick={() => router.push("/login/code")}
                color="primary"
                type="primary"
              >
                بعدی <LeftOutlined />
              </Button>
            </div>
          </Form>
        </section>
      </ConfigProvider>
    </>
  );
};

export default SendEmail;
