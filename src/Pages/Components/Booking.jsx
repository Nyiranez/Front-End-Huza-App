import React, { useState, useContext } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from "axios";
import { Link } from "react-router-dom";

const Booking = () => {
  const { mode } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const ContactApp = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://huza-backend-app-api-1.onrender.com/api/booking/createBook', {
        name,
        email,
        phoneNumber,
        address,
        date,
        details,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccessMessage('Booking successful');
      setErrorMessage('');
      console.log(response.data);
    } catch (err) {
      // setErrorMessage('Something went wrong, please try again');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      address.trim() !== '' &&
      date.trim() !== '' &&
      details.trim() !== ''
    );
  };

  return (
    <section className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} py-28`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-lg p-8 shadow-lg ${!mode ? 'bg-gray-800' : 'bg-white'}`}>
            <form onSubmit={ContactApp} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Name:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Email:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Phone Number:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Address:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500">Date:</label>
                <input
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500">Message:</label>
                <textarea
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                  rows="8"
                  name="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  disabled={loading || !validateForm()}
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </button>
              </div>
              {successMessage && <p className="text-green-700 mt-4">{successMessage}</p>}
              {/* {errorMessage && <p className="text-red-700 mt-4">{errorMessage}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
