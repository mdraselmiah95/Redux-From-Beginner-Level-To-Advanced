import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useRegisterMutation } from "../../features/auth/authApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const CandidateRegistration = () => {
  const [countries, setCountries] = useState([]);
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: {
      email,
    },
  });
  const term = useWatch({ control, name: "term" });
  console.log(term);
  const navigate = useNavigate();
  const [postUser, { isLoading, isError, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    postUser({ ...data, role: "employee" });
    reset();
  };
  if (isSuccess) {
    toast.success("Successfully Data inserted 🟢");
  }

  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="flex items-center mt-5 cursor-pointer w-fit"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex items-center justify-center p-10 overflow-auto">
        <form
          className="flex flex-wrap justify-between max-w-3xl gap-3 p-10 shadow-lg bg-secondary/20 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full mb-5 text-2xl text-primary">Candidate</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              disabled
              className="cursor-not-allowed "
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" for="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" for="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" for="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" for="country">
              Country
            </label>
            <select {...register("country")} id="country">
              {countries
                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                .map(({ name }) => (
                  <option value={name.common}>{name.common}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="address">
              Street Address
            </label>
            <input type="text" {...register("address")} id="address" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="city">
              City
            </label>
            <input type="text" {...register("city")} id="city" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="postcode">
              Postal Code
            </label>
            <input type="text" {...register("postcode")} id="postcode" />
          </div>

          <div className="flex items-center justify-between w-full mt-3">
            <div className="flex w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label for="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegistration;
