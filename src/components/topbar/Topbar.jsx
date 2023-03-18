const Topbar = () => {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Sydney" },
    { id: 3, name: "Cupertino" },
    { id: 4, name: "Paris" },
    { id: 5, name: "Tokyo" },
  ];
  return (
    <div className="my-8 flex items-center justify-around">
      {cities.map((city) => (
        <button key={city.id} className="text-sm text-white md:text-lg">
          {city.name}
        </button>
      ))}
    </div>
  );
};
export default Topbar;
