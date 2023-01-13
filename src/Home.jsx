import NavLink from "./components/NavLink";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-lg p-12 rounded-lg m-4">
        <h1 className="text-4xl font-medium mb-4 text-center">
          Welcome to Art Therapy Business
        </h1>
        <p className="text-gray-700 text-lg mb-4 max-w-md">
          We offer a variety of art therapy services to help individuals express
          themselves and improve their mental and emotional well-being.
        </p>
        <NavLink to="/services" className="flex justify-center">Learn More</NavLink>
      </div>
    </div>
  );
};

export default Home;
