"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  user_message: yup.string().required("Message is required"),
  user_email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data) => {
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl w-full space-y-8 lg:space-y-0 lg:flex lg:space-x-8">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex justify-center items-center text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span role="img" aria-label="smile">👋🙂</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit(sendEmail)}
          ref={form}
          className="flex-1 bg-white shadow-lg rounded-lg p-8 md:p-16 lg:p-24 text-lg flex flex-col gap-8 justify-center"
        >
          <span className="text-gray-700 font-medium">Dear Somya Rawat,</span>
          <textarea
            {...register("user_message")}
            rows={6}
            className="bg-transparent border-b-2 border-gray-400 focus:border-black outline-none resize-none p-2"
            name="user_message"
            placeholder="Your message..."
          />
          {errors.user_message && (
            <span className="text-red-600">{errors.user_message.message}</span>
          )}
          <span className="text-gray-700 font-medium">My mail address is:</span>
          <input
            {...register("user_email")}
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-gray-400 focus:border-black outline-none p-2"
            placeholder="Your email..."
          />
          {errors.user_email && (
            <span className="text-red-600">{errors.user_email.message}</span>
          )}
          <span className="text-gray-700 font-medium">Regards</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded font-semibold py-3 px-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-purple-800 shadow-lg">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully.
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong.
            </span>
          )}
        </form>
        
      </div>
       
    </motion.div>
  );
};

export default ContactPage;
