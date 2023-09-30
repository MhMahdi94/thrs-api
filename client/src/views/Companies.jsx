import React, { useEffect, useState } from 'react'
import NavigateButton from '../components/NavigateButton';
import ActionButton from '../components/ActionButton';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import Indicator from '../components/Indicator';
import Table from '../components/Table/Table';

const Companies = () => {
  const navigate=useNavigate();
  const [loading, setLoading]=useState(false);
  const [companies,setCompanies]=useState([]);
  const getCompanies=()=>{
    setLoading(true);
    axiosClient.get('/companies')
      .then(({data})=>{
        setLoading(false);
        console.log(data);
         setCompanies(data.data);
      })
      .catch((error)=>{
        // setLoading(false);
      })
    }

    useEffect(() => {
      getCompanies();
    }, [])
 
    // const companies=[
    //     {id:1,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //     {id:2,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //     {id:3,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //     {id:4,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //     {id:5,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //     {id:6,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'},
    //   ];

      const onDelete=(company)=>{
        console.log(company);
        //  setShowModal(true);
        if(!window.confirm('Are you want to delete this company?')){
          return;
        }
  
        // axiosClient.delete(`users/${admin.id}`)
        //   .then(()=>{
        //     setNotification('User was successfully deleted.')
  
        //     getUsers();
        //   })
      }
      const headers=[
        'ID','Company Name','Owner','Email','Subscription Start','Subscription End','Created At','Actions'
      ];
      const fields=[
        'id','name','owner','email','subscriptionStart','subscriptionEnd','created_at'
      ];
  return (
    <div>
    {/* <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}
    <Table
        actionTitle='Add Company'
        actionTo='/new-company'
        headers={headers}
        data={companies}
        fields={fields}
        loading={loading}
        onDelete={onDelete}
      />
    {/* </section> */}
    </div>
  )
}

export default Companies