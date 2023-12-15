import Account from "@/src/components/account manage/Account";
import Navigation from "@/src/components/navigation/Navigation";
import SignalPage from "@/src/components/signals/signal page/SignalPage";

const page = () => {
  return (
    <>
      <Account />
      <SignalPage />
      <Navigation />
    </>
  );
};

export default page;
