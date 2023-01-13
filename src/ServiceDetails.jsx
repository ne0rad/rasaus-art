import { Link, useParams } from "react-router-dom";
import { service_details } from "./data/data";
import NotFound from "./NotFound";

const ServiceDetails = () => {
  const params = useParams();

  if (!service_details[params.service]) return <NotFound />;
  else
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="bg-white shadow-lg p-12 rounded-lg m-4 max-w-lg">
          <h1 className="text-4xl font-medium mb-6 text-center">
            {service_details[params.service].name}
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            {service_details[params.service].description}
          </p>
          <Link to="../services" className="text-blue-700">
            Go Back
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetails;
