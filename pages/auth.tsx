import axios from "axios";
import React, { useCallback, useState } from "react";
import Input from "@/components/input";
import Image from "next/image";

function Auth() {
  const [email, setEmail] = useState("");
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");

  const[variant,setVariant]=useState('login')

  const toggelVariant=useCallback(()=>{
    setVariant((currentVariant)=>currentVariant=='login'? 'register': 'login')
  },[])


const register  =useCallback(async()=>{
     try {
        await axios.post('/api/register'),{
            email,
            userName,
            password,
        }
     } catch (error) {
        console.log(error);
        
     }
},[email,userName,password])
  
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12"  />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">{variant==='login'? 'Sign in' :'Regester'}</h2>
            <div className="flex flex-col gap-4">
                {variant=='register'&&(
                    <Input
                    label="User name"
                    onChange={(ev: any) => setUseName(ev.target.value)}
                    id="name"
                    value={userName}
                  />
 
                )}
              
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant=='login'?'login':'Sign up'}
            </button>
            <p className="text-neutral-500 mt-12">
              { variant=='login'?'First Time using Netflix?':'Already have an aacount?'}
              <span onClick={toggelVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant=='login'?'Create an account':'login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
