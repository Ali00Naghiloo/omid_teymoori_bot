import Account from "@/src/components/account manage/Account";
import Navigation from "@/src/components/navigation/Navigation";
import Signals from "@/src/components/signals/Signals";

const page = () => {
  return (
    <>
      <Account />
      <Signals />
      <Navigation />
    </>
  );
};

export default page;
