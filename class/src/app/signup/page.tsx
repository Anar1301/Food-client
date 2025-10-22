import { ProfileForm } from "@/_components/Home/Multiform";
import { SignupForm } from "@/_components/Home/Signupform";

const Multi = () => {
  return (
    <div className="flex w-[1440px] mx-auto gap-40 mt-50">
      <SignupForm></SignupForm>
      <div>
        <img src="/multi.png"></img>
      </div>
    </div>
  );
};

export default Multi;
