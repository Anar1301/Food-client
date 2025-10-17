"use client";
import { Button } from "@/_component/ui/button";

import { FaTrashCan } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_component/ui/dialog";
import { Input } from "@/_component/ui/input";
import { Label } from "@/_component/ui/label";

import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";

import { ChangeEvent, useState } from "react";
import { CiEdit } from "react-icons/ci";

export function EditDialog(title: { title: string | undefined }) {
  const [pev, setPev] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients || !category) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); // File object
    form.append("ingredients", ingredients);
    form.append("category", category);

    try {
      const response = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        mode: "no-cors",
        body: form,
      });
      console.log(response);
      alert("Food created successfully!");
      setName("");
      setPrice(0);
      setImage(undefined);
      setIngredients("");
      setCategory("");
    } catch (error) {
      console.log(error);
      alert("Failed to create food");
    }
  };
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      const file = e.target.files[0];
      const filepev = URL.createObjectURL(file);
      setPev(filepev);
    }
  };
  const ingredientsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIngredients(e.target.value);
  };
  const categoryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* <CiEdit className="h-10 w-10" /> */}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[472px]">
          <DialogHeader>
            <DialogTitle>Dishes info</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 ">
              <div className="flex gap-5 ">
                <Label htmlFor="name-1" className="w-[100px]">
                  Dish Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={nameChangeHandler}
                />
              </div>
            </div>
            <div className="grid gap-5">
              <div className="  flex gap-3 ">
                <Label htmlFor="username-1">Dish category</Label>
                <Input
                  id="category"
                  name="category"
                  value={category}
                  onChange={categoryChangeHandler}
                />
              </div>
            </div>
          </div>
          <FieldSet>
            <FieldGroup>
              <Field>
                <div className="flex gap-5">
                  {" "}
                  <div>
                    {" "}
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Comments
                    </FieldLabel>
                  </div>
                  <Input
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    onChange={ingredientsChangeHandler}
                  />
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
          <div className="flex gap-5 ">
            <Label htmlFor="name-1" className="w-[100px]">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              defaultValue={5000}
              onChange={priceChangeHandler}
            />
          </div>

          <FieldSet>
            <FieldGroup>
              <Field>
                <div className="flex gap-4">
                  <div>
                    <FieldLabel
                      htmlFor="checkout-7j9-optional-comments"
                      className="w-fit "
                    >
                      Image
                    </FieldLabel>
                  </div>
                  <div className="ml-10  h-[120px] w-[326px] bg-gray-400 relative flex items-center justify-center">
                    {pev && (
                      <img
                        className="absolute inset-0 h-full w-full object-contain"
                        src={pev}
                      />
                    )}
                    <input
                      onChange={fileChangeHandler}
                      type="file"
                      id="picture"
                      className=" opacity-0 absolute inset-0"
                    />
                    Add image
                  </div>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
          <DialogFooter className="mt-[36px]">
            <div className="flex-1 flex justify-between">
              <div>
                <DialogClose asChild>
                  <Button variant="outline" className="border-red-500 ">
                    <FaTrashCan color="red" />
                  </Button>
                </DialogClose>
              </div>
              <Button onClick={addFoodHandler} type="submit">
                Save changes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
