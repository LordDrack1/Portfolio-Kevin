import React , { useEffect } from 'react';
import '../../App.css';

function Sonda() {

  //   useEffect(() => {
      
  //   }, [],6000);
  
  //   return (
  //     <div>
  //     </div>
  //   );
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://sonda.com";
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className='sonda'>Estás siendo redirigido a SONDA.COM</h1>
    </div>
  );
};

 export default Sonda;