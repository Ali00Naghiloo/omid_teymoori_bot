"use client";
import { Button, ConfigProvider, Form, Input, InputNumber } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import s from "../../styles/login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SendCode = () => {
  const router = useRouter();

  return (
    <>
      <section className={s.sendEmail}>
        <div className={s.image}>
          <Image
            src={"/assets/login/login-background-2.png"}
            alt=""
            width={600}
            height={900}
          />
        </div>

        <Form className={s.content}>
          <div className={s.titles}>
            <p>کد را وارد کنید</p>
            <p>
              یک ایمیل حاوی کد ورود برای {"8519***0912"} ارسال شده. کد را در
              کادر پایین وارد کنید و دکمه “بررسی” را کلیک کنید.
            </p>
            <p>تصحیح ایمیل</p>
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
              placeholder="کد را وارد کنید"
            />
          </div>
          <div className={s.btn}>
            <Button
              onClick={() => router.push("/login/terms")}
              color="primary"
              type="primary"
            >
              بعدی <LeftOutlined />
            </Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default SendCode;
