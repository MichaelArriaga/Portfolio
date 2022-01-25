import React, { useEffect, useState, useContext, useRef } from 'react';
import fonts from '../../constants/font_names';
import { emailValid } from '../../utils/validations';
import api from '../../api/v1/api';
import { post_api_v1_newsletter_registrations_path } from '../../api/v1/routes';
import { sleep } from '../../utils/helpers';

const EmailListSignupForm = () => {
  const [form, setForm] = useState({
    email: {
      value: '',
      validations: [],
      errors: [],
    },
  });

  const [signup_success, setSignupSuccess] = useState(false);
  const [is_loading, setIsLoading] = useState(false);
  const signup = async () => {
    let newState = { ...form.email };
    newState.errors = [];

    if (!emailValid(newState.value)) {
      newState.errors.push('Check your email and try again.');
    } else {
      try {
        setIsLoading(true);
        await sleep(0.65);
        setIsLoading(false);
        const data = {
          message: 'success',
        };
        // const { data } = await api.post(
        //   post_api_v1_newsletter_registrations_path,
        //   {
        //     params: {
        //       email: form.email.value,
        //     },
        //   },
        //   {
        //     headers: { Authorization: null },
        //   }
        // );
        switch (data.message) {
          case 'success':
            setSignupSuccess(true);
            break;
          case 'failure':
            setSignupSuccess(false);
            break;
          default:
            setIsLoading(false);
            break;
        }
      } catch (err) {
        setIsLoading(false);
        setSignupSuccess(false);
        newState.errors.push('Network Error');
        console.log('ERROR', err.message);
      }
    }

    setForm({
      ...form,
      email: newState,
    });
  };

  return (
    <div className="mb-4">
      <div className="pr-2">
        <h3 style={{ fontFamily: fonts.bold }} className="mb-1 text-lg">
          My Newsletter
        </h3>
        <p style={{ fontFamily: fonts.regular }} className="mb-1">
          Stay up-to-date with my latest writings and courses.
        </p>
      </div>

      {/* email field start */}
      {!signup_success ? (
        <form action="post" method="post">
          <div className="w-full flex flex-row justify-start itmes-center">
            <input
              type="text"
              name="email"
              autoComplete="on"
              placeholder="Email"
              value={form.email.value}
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
            <input
              type="button"
              disabled={is_loading}
              onClick={() => signup(form)}
              className={
                is_loading
                  ? 'cursor-pointer py-1 px-3 rounded bg-indigo-300 text-white'
                  : 'cursor-pointer hover:bg-indigo-700 py-1 px-3 rounded bg-indigo-600 text-white'
              }
              value={'Join'}
            />
          </div>
          {form.email.errors.length > 0 ? (
            <p
              style={{ fontFamily: fonts.regular }}
              className="text-xs pt-1 text-red-700"
            >
              {form.email.errors[0]}
            </p>
          ) : null}
        </form>
      ) : (
        <form action="post" method="post">
          <div className="w-full flex flex-row justify-start itmes-center">
            <input
              type="button"
              disabled={true}
              onClick={() => signup(form)}
              className="py-1 px-3 rounded bg-green-600 text-white"
              value={'✓ Thanks!'}
            />
          </div>
          {/* <p
              style={{ fontFamily: fonts.regular }}
              className="text-sm pt-1 text-gray-900"
            >
              Check your email to confirm
            </p> */}
        </form>
      )}
      {/* email field end */}
    </div>
  );
};

export default EmailListSignupForm;
