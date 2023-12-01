"use client";
import { Button, Checkbox, Input, Modal } from "antd";
import s from "../../styles/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UserTerms = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <section className={s.user_terms}>
        <div className={s.title}>ثبت نام</div>
        <div className={s.description}>
          به نظر میرسد در سایت ثبت نام نکرده اید. قبل از هر چیز شرایط و قوانین
          را مطالعه کنید.
        </div>
        <div className={s.input}>
          <Input
            style={{
              direction: "ltr",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          />
        </div>

        <div className={s.terms}>
          <Checkbox onChange={() => setTermsCheck(!termsCheck)} />{" "}
          <span style={{ cursor: "pointer" }} onClick={() => setModal(!modal)}>
            شرایط و قوانین{" "}
          </span>{" "}
          ثبت نام سایت را مطالعه کرده ام.
        </div>

        <div className={s.btn}>
          <Button
            onClick={() => router.push("/dashboard")}
            style={{
              fontSize: "1.3em",
              height: "auto",
              width: "100%",
              opacity: `${termsCheck ? "1" : "0.5"}`,
            }}
            type="primary"
          >
            ثبت نام
          </Button>
        </div>

        <Modal
          title={"قوانین"}
          open={modal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>برخی قوانین</p>
          <p>برخی قوانین</p>
          <p>برخی قوانین</p>
          <p>برخی قوانین</p>
        </Modal>
      </section>
    </>
  );
};

export default UserTerms;
