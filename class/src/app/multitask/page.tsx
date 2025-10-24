import { ProfileForm } from "@/_components/Home/Multiform";
import Image from "next/image";

const Multi = () => {
  return (
    <div className="flex w-[1440px] mx-auto gap-40 mt-50">
      <ProfileForm></ProfileForm>
      <div>
        <img src="/multi.png" alt={""}></img>
      </div>
    </div>
  );
};

export default Multi;
