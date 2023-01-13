const Contacts = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-lg p-12 rounded-lg m-4">
        <h1 className="text-4xl font-medium mb-4 text-center">
          Kontaktine informacija
        </h1>
        <p className="text-gray-700 text-lg mb-4 max-w-md">
          El. pasto adresas: <a className="font-bold underline" href="mailto:raseleus@gmail.com">raseleus@gmail.com</a>
          <br />
          Telefono numeris: <a className="font-bold underline" href="tel:+44321893281">+44321893281</a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
