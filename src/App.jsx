import React from 'react';
import Input from './components/Input';
import Cards from './components/Cards';
import  { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className={`bg bg-cover  h-screen overflow-hidden  bg-[url(/weatherphone.jpg)]`}>
      <div className='sm:w-2/3 w-5/6 mx-auto mt-3' >
        <Input/>
        <Cards/>
        <Toaster/>
      </div>
      
    </div>
  )
}