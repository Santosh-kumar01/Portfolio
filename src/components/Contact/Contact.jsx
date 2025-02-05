"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";  // Import toast

import SparklesText from "../ui/sparkles-text";
import { Input } from "../ui/input";
import { CoolMode } from "../ui/cool-mode";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {

      const response = await axios.post("/api/contact", data);
      console.log(response);
      setLoading(false);
      toast.success("Your message has been successfully send. Thank you for contacting us!");  // Trigger success toast
      reset(); // Clear the form
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");  // Trigger error toast
    } 
  };

  return (
    <div className=" w-full contain  " id="contact">
      <div className=" font-serif text-center py-[1.5rem]">
          <SparklesText text="Contact Me" />
        </div>
        <p className=" py-4 text-center font-serif font-extrabold text-purple-900">
          Please fill out the form below. If you wish to avail of my services,
          you can contact me through the links provided below.
        </p>
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-purple-700  w-96 px-8 py-8 rounded-xl bg-purple-50 bg-opacity-90"
          >
            <h1 className="text-xl font-bold mb-4 font-serif underline">
              Send Your Message
            </h1>

            <div className="mb-6 font-serif">
              <label className="block">Full Name</label>
              <Input
                {...register("name", { required: "Full Name is required" })}
                id="name"
                type="text"
                placeholder="Enter your Full Name"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="mb-6 font-serif">
              <label className="block">Email Address</label>
              <Input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                type="email"
                placeholder="Enter your Email Address"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-6 font-serif">
              <label className="block">Message</label>
              <Textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                placeholder="Type your message here."
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>

            <div className="flex justify-center">
              <CoolMode>
                <Button type="submit" disabled={loading} >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </CoolMode>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Contact;
