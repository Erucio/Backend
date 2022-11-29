import React from 'react'
import Navbar from '../components/Navbar';
import Contacts from '../components/ContactForm';
import Footer from '../components/Footer';


const contactsview: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default contactsview