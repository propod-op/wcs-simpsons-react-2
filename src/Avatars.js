import React from 'react';
  const Avatar = ({image,firstName,lastName}) =>(
    <div>
	  <img className="avatar-image" src={image} alt="the simpsons"/>
    <p className="avatar-nom">{firstName}</p>
    <p className="avatar-prenom">{lastName}</p>
    </div>
  );
 

export default Avatar;