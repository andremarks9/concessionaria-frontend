"use client";

import useForm from "@/hooks/useForm";
import { login } from "@/services/login";
import { signUp } from "@/services/signUp";
import Link from "next/link";

export default function SignUp() {
  const [form, handleInputChange, clear] = useForm({
    username: "",
    password: "",
  });

  const OnSubmitForm = (e: any) => {
    e.preventDefault();
    signUp(form.username, form.password);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-screen">
      <h1>Sign Up</h1>
      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={OnSubmitForm}
      >
        <input
          className="border border-black"
          name="username"
          value={form.username}
          placeholder="Username"
          onChange={handleInputChange}
          type="text"
        />
        <input
          className="border border-black"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={handleInputChange}
          type="password"
        />
        <button className="bg-red-500 px-2" type="submit">
          Create
        </button>
      </form>
      <div className="flex gap-3">
        <span>Already have an account</span>
        <Link className="border border-black text-red-500 px-2" href="login">
          Go to Login!
        </Link>
      </div>
    </div>
  );
}
