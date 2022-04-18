import React, { useState } from "react";
import { emailValid } from "../../utils/validations";
// import api from '../../api/v1/api';
// import { post_api_v1_newsletter_registrations_path } from '../../api/v1/routes';
import { sleep } from "../../utils/helpers";

const EmailListSignupForm = () => {
  console.log("asdlkfjasdflkj");
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
      } catch (err) {
        setIsLoading(false);
        setSignupSuccess(false);
        newState.errors.push("Network Error");
        console.log("ERROR", err.message);
      }
    }
  };

  return (
    <div className="mb-4 mx-auto">
      <div className="">
        <p className="text-center mb-1 pl-4 font-normal antialiased">
          Stay up-to-date with future projects
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
            className="border rounded py-2 px-2 mr-2"
          />
          {is_loading ? (
            <input
              type="submit"
              disabled={true}
              onClick={() => signup(form)}
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
                signup(form);
              }}
              className={
                signup_success
                  ? "py-2 px-3 rounded bg-green-600 text-white font-normal antialiased"
                  : "py-2 px-3 cursor-pointer hover:bg-gray-800 rounded bg-gray-900 text-white font-semibold antialiased"
              }
              value={signup_success ? "Joined!" : "Join"}
            />
          )}
        </div>

        {form.email.errors.length > 0 ? (
          <p className="text-xs pt-1 text-red-700 text-center font-normal antialiased">
            {form.email.errors[0]}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default EmailListSignupForm;
