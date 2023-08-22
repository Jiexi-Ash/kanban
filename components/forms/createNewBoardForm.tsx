"use client";
import React from "react";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const columnSchema = z.object({
  id: z.string(),
  columnName: z.string().min(4, "Title must be at least 4 characters"),
});

const boardSchema = z.object({
  boardName: z.string().min(4, "Title must be at least 4 characters"),
  boardColumns: z.array(columnSchema).optional(),
});

type formValues = z.infer<typeof boardSchema>;

function CreateNewBoardForm() {
  const form = useForm<formValues>({
    resolver: zodResolver(boardSchema),
    defaultValues: {
      boardName: "",
      boardColumns: [
        {
          id: "3242354534534",
          columnName: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "boardColumns",
    control: form.control,
  });

  const onSubmit = (data: formValues) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex gap-2 text-primaryPurple px-6 hover:bg-transparent focus-visible:ring-0 focus:bg-transparent focus:outline-none"
        >
          <Image
            src="/assets/icon-board.svg"
            width={16}
            height={16}
            alt="Add"
          />
          <span className="text-primaryPurple"> +Add New Board</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-darkGrey rounded-lg max-w-xs max-h-[80%]  border-darkGrey overflow-auto">
        <DialogHeader className="text-start">
          <DialogTitle className="text-white  text-[18px] font-normal">
            Add New Board
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="boardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-bold">
                    Board Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" bg-inherit border-lightGrey/25  focus:outline-none text-white "
                      placeholder="e.g Take coffee break"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2">
              <Label className="text-white font-bold mb-2">Board Column</Label>
              {/* map the subtasks */}
              {fields.map((field, index) => (
                <div key={field.id} className="w-full flex">
                  <FormField
                    control={form.control}
                    name={`boardColumns.${index}.columnName`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="bg-inherit border-lightGrey/25  focus:outline-none text-white w-full"
                            placeholder="e.g Take coffee break"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="focus-visible:ring-0 focus:bg-transparent focus:outline-none hover:bg-transparent"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <Image
                      src="/assets/icon-cross.svg"
                      width={12}
                      height={12}
                      alt="Delete"
                    />
                  </Button>
                </div>
              ))}
              <div className="mt-3">
                <Button
                  type="button"
                  className="w-full rounded-full bg-white text-[13px] text-primaryPurple"
                  onClick={() => append({ id: "", columnName: "" })}
                >
                  +Add Subtask
                </Button>
              </div>
            </div>

            <Button
              className="w-full rounded-full bg-primaryPurple text-[13px]"
              type="submit"
            >
              Create Task
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateNewBoardForm;
