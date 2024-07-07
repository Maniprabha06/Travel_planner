import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const places = [
    {
      image: 'https://wallpapercave.com/wp/wp4533507.jpg',
      title: 'Paris, France',
      description: 'The city of lights and love.',
    },
    {
      image: 'https://th.bing.com/th/id/R.8d0be47772add9e9591fec9bef565937?rik=79ZSNm9xgy4rKw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f10%2f298691-Tokyo_Tower-Tokyo-Japan-city.jpg&ehk=r7CCOv3DJRS6Y%2fL8giQQe1bkNFP%2f7HeSknBYl8qS4Cg%3d&risl=&pid=ImgRaw&r=0',
      title: 'Tokyo, Japan',
      description: 'A city that blends tradition with modernity.',
    },
    {
      image: 'https://wallpapercave.com/wp/wp4672246.jpg',
      title: 'New York, USA',
      description: 'The city that never sleeps.',
    },
    {
      image: 'https://images.pexels.com/photos/2607832/pexels-photo-2607832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sydney, Australia',
      description: 'The largest city in Australia.',
    },
    {
      image: 'https://images.pexels.com/photos/10393585/pexels-photo-10393585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Rio de Janeiro, Brazil',
      description: 'Famous for its Copacabana and Ipanema beaches.',
    },
    {
      image: 'https://www.tripsavvy.com/thmb/gkAcPXcB1lAkF5UOqi6g3U4ULiM=/2000x1499/filters:fill(auto,1)/aerial-view-of-cape-town-and-it-s-majestic--flat-topped-table-mountain-1169318257-07b81b2f33d74f6aaf1685b306c86bfa.jpg',
      title: 'Cape Town, South Africa',
      description: 'Known for its harbor and Table Mountain.',
    },
    {
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Rome, Italy',
      description: 'The capital city of Italy.',
    },
    {
      image: 'https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Dubai, UAE',
      description: 'Known for luxury shopping and ultramodern architecture.',
    },
    {
      image: 'https://www.infoescola.com/wp-content/uploads/2020/08/hong-kong_693729124.jpg',
      title: 'Hong Kong, China',
      description: 'A major port and global financial hub.',
    },
    {
      image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/04/546388.jpg',
      title: 'London, UK',
      description: 'The capital and largest city of England and the United Kingdom.',
    },
    {
      image: 'https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Singapore',
      description: 'A global financial hub and island city-state.',
    },
    {
      image: 'https://www.visitsoutheastasia.travel/wp-content/uploads/2019/10/Thailand-Bangkok.jpg',
      title: 'Bangkok, Thailand',
      description: 'The capital and most populous city of Thailand.',
    },
  ];

  const carouselImages = [
    {
      image: 'https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
    },
    {
      image: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
    },
    {
      image: 'https://images.pexels.com/photos/165553/pexels-photo-165553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
    },
  ];

  return (
    <div className="App">
      <Carousel 
        showThumbs={false} 
        autoPlay 
        infiniteLoop 
        centerMode 
        centerSlidePercentage={80} 
        dynamicHeight
      >
        {carouselImages.map((place, index) => (
          <div key={index} className="carousel-card">
            <img src={place.image} alt={place.title} className="carousel-image" />
          </div>
        ))}
      </Carousel>
      <div className="card-container">
        {places.map((place, index) => (
          <Card key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ place }) => (
  <div className="card">
    <img src={place.image} alt={place.title} className="card-image" />
    <div className="card-details">
      <h2>{place.title}</h2>
      <p>{place.description}</p>
      <Link to="/booking">
      <button className="book-button">Book Now</button>
      </Link>
    </div>
  </div>
);

export default Home;
