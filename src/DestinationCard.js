import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    image: 'https://wallpapercave.com/wp/wp4533507.jpg',
    title: 'Paris, France',
    description: 'The city of lights and love.',
  },
  {
    id: 2,
    image: 'https://th.bing.com/th/id/R.8d0be47772add9e9591fec9bef565937?rik=79ZSNm9xgy4rKw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f10%2f298691-Tokyo_Tower-Tokyo-Japan-city.jpg&ehk=r7CCOv3DJRS6Y%2fL8giQQe1bkNFP%2f7HeSknBYl8qS4Cg%3d&risl=&pid=ImgRaw&r=0',
    title: 'Tokyo, Japan',
    description: 'A city that blends tradition with modernity.',
  },
  {
    id: 3,
    image: 'https://wallpapercave.com/wp/wp4672246.jpg',
    title: 'New York, USA',
    description: 'The city that never sleeps.',
  },
  {
    id: 4,
    image: 'https://th.bing.com/th/id/R.5a5ce30d4b6aa502c15bc0252986e945?rik=no4uim%2bnAfYnow&riu=http%3a%2f%2fwww.go2holiday.com%2fwp-content%2fuploads%2f2012%2f05%2fBeautiful-Sydney-In-Night.jpg&ehk=uG0XLro8VrbLlSKLekNGxW%2fEXxMgu1K4M9evzocWkc8%3d&risl=&pid=ImgRaw&r=0',
    title: 'Sydney, Australia',
    description: 'The largest city in Australia.',
  },
  {
    id: 5,
    image: 'https://globalgrasshopper.com/wp-content/uploads/2021/01/Copacabana-beach.jpg',
    title: 'Rio de Janeiro, Brazil',
    description: 'Famous for its Copacabana and Ipanema beaches.',
  },
  {
    id: 6,
    image: 'https://www.tripsavvy.com/thmb/gkAcPXcB1lAkF5UOqi6g3U4ULiM=/2000x1499/filters:fill(auto,1)/aerial-view-of-cape-town-and-it-s-majestic--flat-topped-table-mountain-1169318257-07b81b2f33d74f6aaf1685b306c86bfa.jpg',
    title: 'Cape Town, South Africa',
    description: 'Known for its harbor and Table Mountain.',
  },
  {
    id: 7,
    image: 'https://th.bing.com/th/id/OIP.zgX5aCOPpPAcjk2z91sZxgHaFV?rs=1&pid=ImgDetMain',
    title: 'Rome, Italy',
    description: 'The capital city of Italy.',
  },
  {
    id: 8,
    image: 'https://th.bing.com/th/id/OIP.Kmb95kZWZbSpy3loqfZ7kwHaE8?rs=1&pid=ImgDetMain',
    title: 'Dubai, UAE',
    description: 'Known for luxury shopping and ultramodern architecture.',
  },
  {
    id: 9,
    image: 'https://www.infoescola.com/wp-content/uploads/2020/08/hong-kong_693729124.jpg',
    title: 'Hong Kong, China',
    description: 'A major port and global financial hub.',
  },
  {
    id: 10,
    image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/04/546388.jpg',
    title: 'London, UK',
    description: 'The capital and largest city of England and the United Kingdom.',
  },
  {
    id: 11,
    image: 'https://www.travelplaces24x7.com/wp-content/uploads/2019/01/singapore-hop-on-hop-off-night-tour-in-singapore-145327.jpg',
    title: 'Singapore',
    description: 'A global financial hub and island city-state.',
  },
  {
    id: 12,
    image: 'https://www.visitsoutheastasia.travel/wp-content/uploads/2019/10/Thailand-Bangkok.jpg',
    title: 'Bangkok, Thailand',
    description: 'The capital and most populous city of Thailand.',
  },
];

const Destinations = () => {
  return (
    <div className="destinations">
      <h2>Popular Destinations</h2>
      <div className="card-container">
        {destinations.map((destination) => (
          <Card key={destination.id} place={destination} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ place }) => (
  <div className="card">
    <img src={place.image} alt={place.title} className="card-image" />
    <div className="card-details">
      <h2>{place.title}</h2>
      <p>{place.description}</p>
      <Link to={`/destination/${place.id}`}>
        <button className="book-button">Learn more</button>
      </Link>
    </div>
  </div>
);

export default Destinations;
