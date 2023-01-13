import ServiceCard from "./components/ServiceCard";
import { services } from "./data/data";

const Services = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-medium text-center">Mūsų paslaugos</h1>
      <div className="flex flex-row flex-wrap mt-8 justify-center">
        {services &&
          services.map((service, i) => (
            <ServiceCard key={service.name} service={service} i={i} />
          ))}
      </div>
    </div>
  );
};

export default Services;
