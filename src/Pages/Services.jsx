// import React from 'react'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../src/assets/pages/context'
import { Link } from 'react-router-dom'

const Services = () => {
  const { mode } = useContext(AppContext)
  const [servicess, setServicess] = useState([])

  const handleServices = () => {
    axios.get("https://huza-backend-app-api.onrender.com/api/service/viewService").then((res) => {
      setServicess(res.data.allServices)
      console.log(res.data.allServices)
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    handleServices()
  }, [])

  return (
    <div className={`pt-32 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}`}>
      <div className=' flex flex-col  items-center p-4 '>
        <h1 className='text-blue-500 text-4xl '>Welcome</h1>
        <h1 className='text-gray-500 text-2xl '>All  offered  Services are bellow</h1>
      </div>

      <div className='flex  justify-between flex-wrap px-28 py-32 gap-0 '>
        {servicess.map((service, index) => (
          <article key={index} className="overflow-hidden rounded-lg border border-gray-100 bg-slate-50  shadow-sm w-[17rem]">
            <div className="sm:p-6">
              <img
                alt=""
                src={service.photo}
                className="h-56 w-full object-cover"
              />
              <h3 className="text-lg font-medium ">
                {service.category}
              </h3>
              <p className="mt-2 line-clamp-4 text-sm/relaxed ">
                {service.description}
              </p>
              {service.category === "CalinaryArt" && <Link to="/curnaryArt" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </Link>}

              {service.category === "Painting" && <Link to="/Plainters" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </Link>}
              {service.category === "Braiding" && <Link to="/Branding" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </Link>}
              {service.category === "MakeUp " && <Link to="/MakeupDesign" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </Link>}



            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services