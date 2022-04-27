import React, { useState } from "react";
import { emailValid } from "../../utils/validations";
// import api from '../../api/v1/api';
// import { post_api_v1_newsletter_registrations_path } from '../../api/v1/routes';
import { sleep } from "../../utils/helpers";
import twitter_icon from "../../../static/etc/images/icons/logo-twitter.png";
import linkedin_icon from "../../../static/etc/images/icons/logo-linkedin.png";
import github_icon from "../../../static/etc/images/icons/logo-github.png";
import email_icon from "../../../static/etc/images/icons/logo-email-envelope.png";

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
    <div style={{ maxWidth: 255 }} className="mb-4 mx-auto">
      <div className="">
        <p className="text-left mb-1 font-normal antialiased">
          Stay up-to-date with my projects.
        </p>
      </div>

      <form action="post" method="post">
        <div className="flex flex-row justify-center items-center">
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
            className="border border-gray-300 rounded py-2 px-2 mr-2"
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
          <p className="text-xs pt-1 text-red-700 text-left font-normal antialiased mb-2">
            {form.email.errors[0]}
          </p>
        ) : null}
      </form>

      {/* socials start */}
      <div className="flex flex-row justify-start items-center mb-6">
        <a
          href="https://www.linkedin.com/in/mike-ray-26a874230/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin_icon}
            alt=""
            style={{ width: 23 }}
            className="mr-2"
          />
        </a>
        <a href="mailto:m.arriaga.smb@gmail.com">
          <img src={email_icon} alt="" style={{ width: 23 }} className="mr-2" />
        </a>
        <a
          href="https://github.com/MichaelArriaga"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github_icon}
            alt=""
            style={{ width: 23 }}
            className="mr-2"
          />
        </a>
        <a
          href="https://twitter.com/mike_ray_ux"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={twitter_icon}
            alt=""
            style={{ width: 23 }}
            className="mr-2"
          />
        </a>
      </div>
      {/* socials end */}
    </div>
  );
};

export default EmailListSignupForm;
