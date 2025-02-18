import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import gokanhoca from '../assets/pictures/gokanhoca.jpg';
import Tamer from '../assets/pictures/Tamer.jpeg';
import team1 from '../assets/pictures/team1.jpg';

const About = () => {
  const stats = [
    { number: '15K', label: 'Happy Customers' },
    { number: '150K', label: 'Monthly Visitors' },
    { number: '15', label: 'Countries Worldwide' },
    { number: '100+', label: 'Top Partners' }
  ];

  const companies = [
    { name: 'hooli', logo: '/hooli.svg' },
    { name: 'lyft', logo: '/lyft.svg' },
    { name: 'stripe', logo: '/stripe.svg' },
    { name: 'aws', logo: '/aws.svg' },
    { name: 'reddit', logo: '/reddit.svg' }
  ];

  const team = [
    {
      id: 1,
      name: 'Gökhan Özdemir',
      role: 'Project Manager',
      image: gokanhoca,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Tamer Çelebi',
      role: 'Full Stack Developer',
      image: Tamer,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Username',
      role: 'Profession',
      image: team1,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h5 className="text-[#252B42] font-bold mb-4">ABOUT COMPANY</h5>
              <h1 className="text-[#252B42] text-5xl font-bold mb-8">ABOUT US</h1>
              <p className="text-[#737373] text-xl mb-8">
                We know how large objects will act,<br />
                but things on a small scale
              </p>
              <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md hover:bg-[#1A8CD8] transition-colors">
                Get Quote Now
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FFE8E8] rounded-full -z-10"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#977DF4] rounded-full -z-10"></div>
                <img
                  src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
                  alt="Shopping Woman"
                  className="relative z-10 max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#252B42] text-2xl font-bold mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor
            </h2>
            <p className="text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-[#252B42] mb-2">{stat.number}</h3>
                <p className="text-[#737373]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden h-[500px]">
            <img
              src="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg"
              alt="Mountains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-[#23A6F0] transition-colors group">
                <FaPlay className="w-8 h-8 text-[#23A6F0] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-[#23A6F0] font-bold mb-2">WHAT WE DO</h5>
            <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
            <p className="text-[#737373] max-w-2xl mx-auto">
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics: Newtonian mechanics 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="bg-white group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={member.social.facebook} className="text-white hover:text-[#23A6F0] transition-colors">
                        <FaFacebookF size={20} />
                      </a>
                      <a href={member.social.instagram} className="text-white hover:text-[#23A6F0] transition-colors">
                        <FaInstagram size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-[#23A6F0] transition-colors">
                        <FaTwitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center py-6">
                  <h3 className="text-base font-bold text-[#252B42] mb-2">{member.name}</h3>
                  <p className="text-sm text-[#737373]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">Big Companies Are Here</h2>
            <p className="text-[#737373]">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-[#2A7CC7]">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-12">
              <h5 className="text-white font-bold mb-4">WORK WITH US</h5>
              <h2 className="text-white text-4xl font-bold mb-6">Now Let's grow Yours</h2>
              <p className="text-white mb-8">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century
              </p>
              <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md hover:bg-[#1A8CD8] transition-colors">
                Join Us
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg"
                alt="Work with us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
