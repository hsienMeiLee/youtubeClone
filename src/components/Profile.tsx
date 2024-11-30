import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleBannerChange = (event: any) =>{
    const file = event.target.files[0];
    if(file){
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event : any) => {
    const file = event.target.files[0];
    if(file){
      setProfileUrl(URL.createObjectURL(file));
    }
  }
  return (
    <div className="relative max-w-[95%] ml-[5rem] profile-container">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="banner"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-bray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="lg:flex lg:items-center lg:ml-4 mt-[2rem]">
        <img src={profileUrl} alt="channel logo" className="w-32 h-32 ml-[2rem] lg:w-40 lg:h-40 object-cover rounded-full border-white relative image-profile" />
        <button className="absolute ml-20 -translate-x-1 -mt-[1rem] lg:ml-32 -translate-x-2 z-10 lg:mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={handleProfileChange} />
        </button>

        <div className="ml-0 lg:ml-4 mt-8 lg:mt-4">
          <h1 className="text-2xl font-bold ml-[2rem]">
            Hsien Mei Lee - web designer
          </h1>
          <p className="ml-[2rem]">1M views</p>
          <p className="mt-2 ml-[2rem]">
            大家好! 我是羨美. 歡迎來到我的 youtube channel ~ 感謝您的支持. 
          </p>
          <button className="ml-[2rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>  

      <Tabs/>    
    </div>
  );
};

export default Profile;
