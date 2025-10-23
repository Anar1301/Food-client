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
import { useEffect, useState } from "react";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { Badge } from "@/components/ui/badge";
import { GrLocation } from "react-icons/gr";

const Header = ({
  setPlus,
  price,
  plus,
  handleonminus,
  handleonplus,
}: {
  setPlus: Function;
  price: number;
  plus: number;
  handleonminus: Function;
  handleonplus: Function;
}) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [deliverAddress, setDeliverAddress] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOnAddress = () => {
    localStorage.setItem("Address", deliverAddress);
    alert("Address completed");
    setOpen(!open);
  };

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("multitask");
  };
  const RemoveAdrress = () => {
    localStorage.removeItem("Address");
  };
  const onLogin = () => {
    router.push("multitask");
  };
  useEffect(() => {
    setAddress(localStorage.getItem("Address")),
      setUserEmail(localStorage.getItem("userEmail"));
  }, []);

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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              {address ? (
                <div className="w-[250px] h-[36px] rounded-full border-2 border-red-400 bg-white text-black flex gap-4 items-center justify-between">
                  <div className="flex gap-2 ml-[12px] items-center ">
                    <GrLocation color="red" className="h-4 w-4" />
                    <div className="overflow-hidden">{address}</div>
                  </div>

                  <img
                    src="/chevron.png"
                    className="mr-4 "
                    onClick={RemoveAdrress}
                  />
                </div>
              ) : (
                <div className="w-[250px] h-[36px] rounded-full border-2 border-red-400 bg-white text-black flex gap-4 items-center">
                  <div className="flex ml-[12px] items-center ">
                    <div>
                      <GrLocation color="red" className="h-4 w-4" />
                    </div>
                    <div className="text-red-400 ">
                      Delivery address:
                      <span className="text-[#71717A]">Add address</span>
                    </div>
                  </div>
                </div>
              )}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[502px] max-h-[412px]">
              <DialogTitle>
                <div className="font-bold text-[#09090B] text-[24px]">
                  Please write your delivery address!
                </div>
              </DialogTitle>

              <Textarea
                placeholder="Please share your complete address"
                className="h-[80px] mt-[24px]"
                onChange={(e) => setDeliverAddress(e.target.value)}
              />
              <DialogFooter className="flex justify-end gap-4 mt-[48px]">
                <DialogClose>
                  <Badge className="bg-white text-black border-2">Cancel</Badge>
                </DialogClose>

                <Button onClick={() => handleOnAddress()}>Deliver here</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <VaulDrawer
            setPlus={setPlus}
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
