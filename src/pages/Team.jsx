import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import gokanhoca from '../assets/pictures/gokanhoca.jpg';
import Tamer from '../assets/pictures/Tamer.jpeg';

const Team = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#252B42] mb-8">Meet Our Team</h1>
            <p className="text-[#737373] text-xl mb-12">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="bg-white group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover"
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
    </div>
  );
};

export default Team;
