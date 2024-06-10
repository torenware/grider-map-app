import { useState } from 'react';
import type {Place} from './api/Place';
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  const submitLocation = (place: Place) => {
    console.log("got place:", place);
    setPlace(place);
  };

  return <div className="h-screen w-screen grid grid-cols-12">
   <div className="col-span-4 p-2">
    <LocationSearch onLocationClick={submitLocation}/>
   </div>
   <div className="col-span-8 p-2">
    <Map place={place} />
   </div>
  </div>
}

export default App
