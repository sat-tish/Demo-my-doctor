import React from 'react';

import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import BlogsHome from '../Components/BlogsHome/BlogsHome';
import SuccessStories from '../Components/SuccessStories/SuccessStories';


function Home() {
  return (
    <div>
      <Navigation/>
      <Header/>
      
      <BlogsHome/>
    </div>
  )
}

export default Home
