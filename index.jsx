import React from "react";

const ProfileDesc = (props) => {
  const bio = props.bio
  const name = props.name
  
  return (
    <div className="flex flex-col items-center flex-1 lg:items-start">
      <p className="text-xl">{name}</p>
      <div className=" flex flex-wrap text-white md:justify-start justify-center">
        {
          bio.map((s, i)=>{
            return <p key={i} className=" text-xxs font-normal p-2 bg-newColor-light dark:bg-secondarycolor-light rounded-md mt-1 mr-1">{s}
          </p>;
          })
        }
        
      </div>
    </div>
  );
};

export default ProfileDesc;
