import React, { useEffect } from 'react'  
import '../App.css'; 
import Crossfade from '../components/HomeScreen/Crossfade';
import DidYouKnow from '../components/DidYouKnow'; 
import FreedomArc from '../components/FreedomArc';
import HomeGallery from '../components/HomeGallery';
import Jewell from '../components/Jewell'; 
import Partners from '../components/Partners';
import Storypage from '../components/HomeScreen/StorySection/Storypage';
import VirtualWalk from '../components/VirtualWalk';
import Rarebook from '../components/Rarebook';
import TodayInHistory from '../components/HomeScreen/TodayInHistory/LtwoTodayinHistory';
import ChildrenSec from '../components/ChildrenSec';

import { useLocation } from 'react-router-dom';
import Trending from '../components/HomeScreen/Trending/Trending';
import OriginalCategories from '../components/HomeScreen/OriginalCategory/OriginalCategory';
import Curated from '../components/HomeScreen/CuratedCategory/Curated';
import Activity from '../components/HomeScreen/Activity/Activity';
import EventsSection from '../components/HomeScreen/EventSection/EventSection';
import InstagramGallery from '../components/HomeScreen/Instagram/instagram';
import SocialCounter from '../components/HomeScreen/SocialCounter/SocialCounter';
import Moc from '../components/HomeScreen/MocSection/MocSectio';



const Home = () => {
const location=useLocation()
 
  return (
   
   
   <main >         
      <Crossfade />
      <Trending/>
      <OriginalCategories/>
      {/* <CategoriesOpt />  */}
      {/* <FreedomArc /> */}
      {/* <DidYouKnow />
      */}
      <Storypage/>
      <Curated/>
      <Activity/>
      <TodayInHistory />
      <EventsSection/>
      {/* <Moc /> */}
       {/* <ExternalLinks />  */}
      <Moc/>
      <InstagramGallery/>
      {/* <SocialCounter/> */}
      
     
     
   
      {/* <Partners/> */}
      
    </main>
  )
}

export default Home