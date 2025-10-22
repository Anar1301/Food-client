"use client";
import { FaUser } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import VaulDrawer from "./Drawer";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ordercart = {
  title: string;
  price: number;
};

const Header = ({
  ordercart,
  price,
  plus,
  handleonminus,
  handleonplus,
}: {
  ordercart: ordercart[];
  price: number;
  plus: number;
  handleonminus: Function;
  handleonplus: Function;
}) => {
  const userEmail = localStorage.getItem("userEmail");

  const router = useRouter();

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("multitask");
  };
  const onLogin = () => {
    router.push("multitask");
  };
  return (
    <div className="w-[1440px] h-[70px] bg-[#18181B] flex items-center mx-auto justify-between">
      <div className="w-[1260px] mx-auto flex justify-between items-center">
        <div>
          <div className="flex gap-4 text-white">
            <img height={46} width={37} src="/logo.png"></img>
            <div>
              <div>NomNom</div>
              <div>Swift delivery</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <input
                  className="bg-white rounded-full text-black placeholder:text-black h-[40px]  placeholder:pl-4"
                  placeholder="Add location"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[502px] max-h-[412px]">
              <div className="font-bold text-[#09090B] text-[24px]">
                Please write your delivery address!
              </div>
              <Textarea
                placeholder="Please share your complete address"
                className="h-[80px] mt-[24px]"
              ></Textarea>
              <DialogFooter className="flex justify-end gap-4 mt-[48px]">
                <Button className="bg-white text-black border-2">Cancel</Button>
                <Button>Deliver here</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <VaulDrawer
            ordercart={ordercart}
            plus={plus}
            price={price}
            handleonminus={handleonminus}
            handleonplus={handleonplus}
          />

          <Popover>
            <PopoverTrigger>
              <div className="h-[36px] w-[36px] bg-red-500 items-center flex justify-center rounded-full">
                <FaUser />
              </div>
            </PopoverTrigger>
            <PopoverContent className="items-center flex justify-center h-fit w-fit">
              <div className="w-[188px] h-[104px] bg-white rounded-md text-black items-center justify-center flex  flex-col gap-2">
                <div className="text-[20px] font-semibold">
                  {userEmail ? (
                    <div>{userEmail}</div>
                  ) : (
                    <div>Non user account</div>
                  )}
                </div>

                {userEmail ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Sign out</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onLogout}>
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Button
                    className=" bg-gray-300 rounded-full items-center text-black"
                    onClick={onLogin}
                  >
                    Log in
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
