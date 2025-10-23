import { SignupForm } from "@/_components/Home/Signupform";
import Image from "next/image";

const Multi = () => {
  return (
    <div className="flex w-[1440px] mx-auto gap-40 mt-50">
      <SignupForm></SignupForm>
      <div>
        <Image src="/multi.png" alt={""}></Image>
      </div>
    </div>
  );
};

export default Multi;
