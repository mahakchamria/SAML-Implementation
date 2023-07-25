import React, { useEffect, useState } from 'react';
import logging from './config/logging.ts'
import axios from 'axios'
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
  const [loading, setLoading] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    logging.info("checking to see if we are authenticated with express and passport");

    axios({
      method: 'GET',
      url: 'http://localhost:1337/whoami',
      withCredentials: true
    })
    .then(response => {
      logging.info(response.data.user, "Saml");

      if(response.data.user.nameID){
        setEmail(response.data.user.nameID);
        setLoading(false);
      }
      else{
        //redirect to login
        RedirectToLogin()
      }
    })
    .catch(error => {
      logging.error(error, "Saml");
      //redirect to login
      RedirectToLogin()
      
    });
  }, [])

  const RedirectToLogin = () => {
    window.location.replace('http://localhost:1337/login');
  }

  if(loading){
    return <p> loading.....</p>
  }
  //different messages for different ussers
  if(email === 'mahakchamria@gmail.com'){
    return(
      <p> HELLO, this is {email} </p>
    )
  }
    return (
        <p>Hello, I am {email}!</p>
    );
}

export default Application;