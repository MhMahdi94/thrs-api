import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient';
import Table from '../components/Table/Table';
import { useStateContext } from '../context/ContextProvider';
import LoadingSpinner from '../components/LoadingSpinner';

const Users = () => {
  const [users,setUsers]=useState({});
  const [meta,setMeta]=useState([]);
  const [links,setLinks]=useState([]);
  const [loading, setLoading]=useState([]);
  const { setNotification } = useStateContext();
  useEffect(() => {
    getUsers();
  }, [])
  
  const getUsers=()=>{
    setLoading(true);
    axiosClient.get('/users')
      .then(({data})=>{
        setLoading(false);
        console.log(`data: ${data.data}`);
        // debugger;
        setMeta(data.meta);
        setLinks(data.links);
        setUsers(data.data);
      })
      .catch((error)=>{
        setLoading(false);
      })
    }
    const onDelete=(user)=>{
      console.log(user);
      //  setShowModal(true);
      if(!window.confirm('Are you want to delete this user?')){
        return;
      }

      axiosClient.delete(`users/${user.id}`)
        .then(()=>{
          setNotification('User was successfully deleted.')

          getUsers();
        })
    }

    const onUpdate=(user)=>{
      console.log(user);
      //  setShowModal(true);
      if(!window.confirm('Are you want to activate this user?')){
        return;
      }
      user.status = user.status=='1'?false:true;
      console.log(user);
      axiosClient.put(`users/${user.id}`,user)
        .then(()=>{
          setNotification('User was successfully updated.')

          getUsers();
        })
    }
    const handlePagination=(link)=>{
      console.log(link.url);
      setLoading(true);
      axiosClient.get(link.url)
          .then(({data})=>{
              console.log(data);
              setLoading(false);
              setUsers(data.data);
              setMeta(data.meta);
              setLinks(data.links);
          })
          .catch((error)=>{
            setLoading(false);
              console.log(error);
          });
  }
    const headers=[
      'ID','Name','Email','Mobile No','Role','Created At','Status','Actions'
    ];
    const fields=['id','name','email','mobileNo','role','created_at'];
  return (
    <div>
      <Table
        actionTitle='Add User'
        actionTo='/new-user'
        headers={headers}
        handlePagination={handlePagination}
        data={users}
        meta={meta}
        links={links}
        fields={fields}
        loading={loading}
        onDelete={onDelete}
        onUpdate={onUpdate}
        activate={true}
      />
    </div>
  )
}

export default Users