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

const subtaskSchema = z.object({
  id: z.string(),
  title: z.string().min(4, "Title must be at least 4 characters"),
});

const formSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters")
    .max(100, "Description must be at most 100 characters"),
  subTasks: z.array(subtaskSchema).optional(),
  status: z.enum(["Todo", "Doing", "Done"]),
});

type FormValues = z.infer<typeof formSchema>;

function CreateTaskForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      subTasks: [{ id: "3243245354", title: "" }],
      status: "Todo",
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "subTasks",
    control: form.control,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    console.log(form.watch("subTasks"));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-2xl px-[18px] md:px-6 bg-primaryPurple hover:bg-[#A8A4FF]">
          <Image
            src="/assets/icon-add-task-mobile.svg"
            width={12}
            height={12}
            alt="Add Task"
            className="md:hidden"
          />
          <span className="hidden md:block text-white text-xs md:text-[15px]">
            +Add New Task
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-darkGrey rounded-lg max-w-xs max-h-[80%]  border-darkGrey overflow-auto">
        <DialogHeader className="text-start">
          <DialogTitle className="text-white  text-[18px]">
            Add New Task
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-bold">Title</FormLabel>
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
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-bold">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-inherit border-lightGrey/25  focus:outline-none text-white"
                      placeholder="e.g. It’s always good to take a break. This 
                  15 minute break will  recharge the batteries 
                  a little."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col">
              <Label className="text-white font-bold mb-2">Subtasks</Label>
              {/* map the subtasks */}
              {fields.map((field, index) => (
                <div key={field.id} className="w-full flex">
                  <FormField
                    control={form.control}
                    name={`subTasks.${index}.title`}
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
                  onClick={() => append({ id: "32432453dfdf54", title: "" })}
                >
                  +Add Subtask
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-bold">Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent text-white">
                        <SelectValue
                          placeholder="Select Status"
                          className="text-black placeholder:text-red-500"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="">
                      <SelectItem value="Todo">Todo</SelectItem>
                      <SelectItem value="Doing">Doing</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

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

export default CreateTaskForm;
