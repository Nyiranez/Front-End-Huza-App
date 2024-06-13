import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../src/assets/pages/context';

const Contact = () => {
  const { mode } = useContext(AppContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const ContactApp = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://huza-backend-app-api.onrender.com/api/contact/createContact', {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccessMessage('Message sent successfully');
      setErrorMessage('');
      console.log(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong, please try again');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      message.trim() !== ''
    );
  };

  return (
    <section className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} py-28`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className=' text-gray-500 flex items-center justify-center text-5xl py-3'>CONTACT US</h2>
          <div className={`rounded-lg p-8 shadow-lg ${!mode ? 'bg-gray-800' : 'bg-white'}`}>
            <form onSubmit={ContactApp} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">First Name:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-lg ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Last Name:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-lg ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Email:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-lg ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Phone Number:</label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-lg ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-500">Message:</label>
                <textarea
                  className={`w-full rounded-lg border-gray-200 p-3 text-lg ${!mode ? 'bg-gray-700' : 'bg-slate-50'}`}
                  rows="8"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto"
                  disabled={loading || !validateForm()}
                >
                  {loading ? 'Sending message...' : 'Send'}
                </button>
              </div>
              {successMessage && <p className="text-green-700 mt-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-700 mt-4">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
