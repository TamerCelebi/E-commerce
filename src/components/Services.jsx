import { services } from '../data/services';
import { BsBook, BsJournalText, BsGraphUp } from 'react-icons/bs';

const iconMap = {
  book: BsBook,
  notebook: BsJournalText,
  graph: BsGraphUp
};

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-gray-600 uppercase tracking-wider mb-2">
            Featured Products
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            THE BEST SERVICES
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map(({ id, title, description, icon }) => {
            const Icon = iconMap[icon];
            
            return (
              <div key={id} className="text-center">
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <Icon className="w-12 h-12 text-[#23A6F0]" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 max-w-xs mx-auto">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
