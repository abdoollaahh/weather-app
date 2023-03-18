import Topbar from "@/components/topbar/Topbar";
import Inputs from "@/components/topbar/Inputs";
import TimeAndLocation from "@/components/timeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "@/components/timeAndLocation/TemperatureAndDetails";
import Forecast from "@/components/forecast/Forecast";
const Home = () => {
  return (
    <div className="mx-auto h-fit max-w-screen-md bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] px-5 py-1 text-white shadow-2xl shadow-slate-500 md:mt-4 md:rounded-xl md:py-4 md:px-32">
      <Topbar />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
};
export default Home;
