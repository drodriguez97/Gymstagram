import { useState } from 'react';
import axios from "axios";
import { Button } from '@chakra-ui/react';

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
  
    function getData() {
      axios({
        method: "GET",
        url: "api/user/profile",
      })
        .then((response) => {
          const res = response.data;
          setProfileData({
            profile_name: res.name,
            about_me: res.about,
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  
    return (
      <div className="profile">
        <p>To get your profile details:</p>
        <Button onClick={getData} colorScheme="blue">Click me</Button>
        {profileData && ( 
          <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About me: {profileData.about_me}</p>
          </div>
        )}
      </div>
    );
}
