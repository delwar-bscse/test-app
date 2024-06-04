import React from 'react'
import { useSelector } from 'react-redux';

const Users = () => {
  const {users} = useSelector((state) => state);

  return (
    <div className='max-w-[1300px] my-6 mx-auto flex flex-col justify-center'>
      <div className='text-gray-700 text-2xl mb-3 text-center font-sans font-semibold'>
        <h2 className='capitalize'>User info table</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className="table-auto w-[1300px] border-collapse border-slate-500">
          <thead>
            <tr className='bg-gray-700 text-gray-100'>
              <th className='border-b border-slate-400 p-2'>ID</th>
              <th className='border-b border-slate-400 p-2'>Name</th>
              <th className='border-b border-slate-400 p-2'>Age</th>
              <th className='border-b border-slate-400 p-2'>Gender</th>
              <th className='border-b border-slate-400 p-2'>Company</th>
              <th className='border-b border-slate-400 p-2'>Email</th>
              <th className='border-b border-slate-400 p-2'>Phone</th>
              <th className='border-b border-slate-400 p-2'>Address</th>
              <th className='border-b border-slate-400 p-2'>Friends</th>
            </tr>
          </thead>
          <tbody>
              {
                users.map((user)=>{
                  const {id, age,name,gender,company,email,phone,address,friends}=user;
                  return <tr key={id} className='bg-gray-600 text-white'>
                    <td className='border-b border-slate-300 px-2'>...{id.slice(20)}</td>
                    <td className='border-b border-slate-300 px-2'>{name}</td>
                    <td className='border-b border-slate-300 text-center  px-2'>{age}</td>
                    <td className='border-b border-slate-300 px-2'>{gender}</td>
                    <td className='border-b border-slate-300 px-2'>{company}</td>
                    <td className='border-b border-slate-300 px-2'>{email}</td>
                    <td className='border-b border-slate-300 px-2 min-w-[150px]'>{phone}</td>
                    <td className='border-b border-slate-300 px-2'>{address}</td>
                    <td className='border-b border-slate-300 px-2'>
                      {friends.map((friend)=>(
                        <ul key={friend.id} className='flex'>
                          <li>{friend.id+1}. </li>
                          <li className='ps-3'>{friend.name}</li>
                        </ul>
                      ))}
                    </td>
                  </tr>
                })
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users