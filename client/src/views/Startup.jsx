import React, { useState } from 'react'
import appLogo from '../assets/bg4.jpg'
import SectionHeader from '../components/SectionHeader'
import SectionCard from '../components/SectionCard'
import PackageCard from '../components/PackageCard'
import Input from '../components/Input'
import LoadingSpinner from '../components/LoadingSpinner'
import axiosClient from '../axiosClient'
import { useStateContext } from '../context/ContextProvider'
const Startup = () => {
  const [loading, setLoading] = useState(false);
  const {setNotification}=useStateContext();
  const [formData, setFormData] = useState({
    'name': '',
    'owner': '',
    'email': '',
    'address': '',
    'mobileNo': '',
    'noOfEmployee': 0,
    'noOfDepts': 0,
    'status': false
  });

  const handleFormData = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    axiosClient.post('/new-request', formData)
      .then(({ data }) => {
        setLoading(false);
        setFormData({
          'name': '',
          'owner': '',
          'email': '',
          'address': '',
          'mobileNo': '',
          'noOfEmployee': 0,
          'noOfDepts': 0,
          'status': false
        })
        // setNotification('Request Added');
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
      });
  }

  const items = [
    {
      'id': 1,
      'title': 'Item 1',
    },
    {
      'id': 2,
      'title': 'Item 2',
    },
    {
      'id': 3,
      'title': 'Item 3',
    },
    {
      'id': 4,
      'title': 'Item 4',
    },
  ];


  return (
    <div>
      {/* header */}

      {/* System */}
      <section className='mt-10 px-10'>
        <SectionHeader title='Our System' />
        {/* <div className="text-center "> */}
        <div class=" mt-10 mb-10 flex flex-wrap justify-center gap-4">
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
        </div>
        {/* </div> */}
      </section>
      {/* Services */}
      <section className='mt-10 px-10'>
        <SectionHeader title='Our Services' />
        {/* <div className="text-center "> */}
        <div class="mt-10 mb-10 flex flex-wrap justify-center gap-4">
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
          <SectionCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>}
            title='Lorem Ipsum'
            subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
        </div>
        {/* </div> */}
      </section>
      {/* packages */}
      <section className='mt-10 px-10'>
        <SectionHeader title='Our Packages' />
        {/* <div className="text-center "> */}
        <div class="mt-10 mb-10 flex flex-wrap justify-center gap-4 ">
          <PackageCard items={items} title='Standard Package' />
          <PackageCard items={items} title='Premium Package' />
          <PackageCard items={items} title='Enterprise Package' />

          {/* <PackageCard/>
          <PackageCard/> */}
        </div>
        {/* </div> */}
      </section>

      {/* Contact Us */}
      <section className='mt-10 mb-10 px-20 flex flex-col justify-center items-center '>
        <SectionHeader title='Get System' />
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div >
            <img src={appLogo} width='600px' alt="" />
          </div>
          <div class="flex flex-wrap w-max h-max mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">

            <form onSubmit={handleFormData}>
              <Input
                label='Company Name'
                placeholder='Please Type Company Name'
                name='company'
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                value={formData.name}
              />
              <Input
                label='Owner'
                placeholder='Please Type Owner Name'
                name='owner'
                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                value={formData.owner}
              />
              <div class="grid md:grid-cols-2 md:gap-6">
                <Input
                  label='Email'
                  placeholder='test@example.com'
                  name='email'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  type='email'
                  value={formData.email}
                />
                <Input
                  label='Mobile Number'
                  placeholder='+xxx xxxxxxxxxxx'
                  name='mobileNo'
                  onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                  type='phone'
                  value={formData.mobileNo}
                />
              </div>
              <Input
                label='Adress'
                placeholder='Street, Adress, Line No 1'
                name='owner'
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                value={formData.address}
              />

              <div class="grid md:grid-cols-2 md:gap-6">
                <Input
                  label='Number Of Employees'
                  placeholder='eg: 5'
                  name='noOfEmployee'
                  onChange={(e) => setFormData({ ...formData, noOfEmployee: e.target.value })}
                  type='number'
                  value={formData.noOfEmployee}
                />
                <Input
                  label='Number Of Departments'
                  placeholder='eg: 5'
                  name='noOfDepts'
                  onChange={(e) => setFormData({ ...formData, noOfDepts: e.target.value })}
                  type='number'
                  value={formData.noOfDepts}
                />
              </div>
              {loading ? <LoadingSpinner /> : <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>}
            </form>
          </div>
        </div>
        


      </section>
    </div>
  )
}

export default Startup