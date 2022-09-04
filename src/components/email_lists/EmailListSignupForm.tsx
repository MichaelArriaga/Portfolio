import React, { useState } from "react";
import { emailValid } from "../../utils/validations";
// import api from '../../api/v1/api';
// import { post_api_v1_newsletter_registrations_path } from '../../api/v1/routes';
import { sleep } from "../../utils/helpers";
import {
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const EmailListSignupForm = () => {
  const [form, setForm] = useState({
    email: {
      value: "",
      validations: [],
      errors: [""],
    },
  });

  const [signup_success, setSignupSuccess] = useState(false);
  const [is_loading, setIsLoading] = useState(false);

  const signup = async () => {
    let newState = { ...form.email };
    newState.errors = [];

    if (!emailValid(newState.value)) {
      newState.errors.push("Check your email and try again.");

      setForm({
        ...form,
        email: newState,
      });
    } else {
      try {
        setIsLoading(true);
        await sleep(0.65);
        setIsLoading(false);
        const data = {
          message: "success",
        };
        switch (data.message) {
          case "success":
            setSignupSuccess(true);

            setForm({
              ...form,
              email: {
                ...form.email,
                value: "",
              },
            });
            break;
          case "failure":
            setSignupSuccess(false);
            break;
          default:
            setIsLoading(false);
            break;
        }
      } catch (err: any) {
        setIsLoading(false);
        setSignupSuccess(false);
        newState.errors.push("Network Error");
        console.log("ERROR", err.message);
      }
    }
  };

  return (
    <div style={{ maxWidth: 255 }} className="mx-auto mb-4">
      <div className="">
        <p className="mb-1 antialiased font-normal text-left">
          Stay up-to-date with my posts.
        </p>
      </div>

      <form action="post" method="post">
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            name="email"
            autoComplete="on"
            placeholder="Email"
            value={form.email.value}
            style={{ backgroundColor: "#f3f3f3" }}
            disabled={signup_success}
            onChange={(e) => {
              setForm({
                ...form,
                email: {
                  ...form.email,
                  value: e.target.value,
                },
              });
            }}
            className="px-2 py-2 mr-4 border border-gray-400 rounded"
          />
          {is_loading ? (
            <input
              type="submit"
              disabled={true}
              onClick={() => signup()}
              style={{ backgroundColor: "#f3f3f3" }}
              className={
                "cursor-pointer py-2 px-3 rounded bg-gray-400 text-white font-normal antialiased"
              }
              value={"Join"}
            />
          ) : (
            <input
              type="submit"
              disabled={is_loading}
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
              style={{ backgroundColor: "#34a298" }}
              className={
                signup_success
                  ? "py-2 px-3 rounded text-white font-normal antialiased"
                  : "py-2 px-3 cursor-pointer rounded bg-gray-900 text-white font-semibold antialiased"
              }
              value={signup_success ? "Joined!" : "Join"}
            />
          )}
        </div>

        {form.email.errors.length > 0 ? (
          <p className="pt-1 mb-2 text-xs antialiased font-normal text-left text-red-700">
            {form.email.errors[0]}
          </p>
        ) : null}
      </form>

      {/* socials start */}
      <div className="flex flex-row items-center justify-start mb-6">
        <a
          href="https://www.linkedin.com/in/mike-ray-26a874230/"
          target="_blank"
          rel="noreferrer"
          className="mr-4"
        >
          <FaLinkedin size={28} className="text-gray-900" />
        </a>
        <a href="mailto:m.arriaga.smb@gmail.com" className="mr-4">
          <FaEnvelopeSquare size={28} className="text-gray-900" />
        </a>
        <a
          href="https://github.com/MichaelArriaga"
          target="_blank"
          rel="noreferrer"
          className="mr-4"
        >
          <FaGithub size={28} className="text-gray-900" />
        </a>
        <a
          href="https://twitter.com/mike_ray_ux"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={28} className="text-gray-900" />
        </a>
      </div>
      {/* socials end */}
    </div>
  );
};

export default EmailListSignupForm;
