import type { Place } from '../api/Place';
import type {FormEvent} from 'react';
import { useState, useEffect, useRef } from 'react';
import search from '../api/search';

interface LocationSearchProps {
  onLocationClick: (p : Place) => void;
};

export default function LocationSearch({onLocationClick}: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState<string>("");


  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('we would do a search here...');
    const retval = await search(term);
    console.log("got back ", retval);
  }


  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const placeData: Place[] = [
      {
        id: 1111,
        name: 'Yehupitz',
        longitude: 55,
        lattitude: 40
      }
    ];
    console.log("set places...");
    setPlaces(placeData);
  }, []);

  const renderPlaces = (places: Place[]): JSX.Element[] => {
    const jsx = places.map(place => {
      return (
      <div key={place.id} onClick={() => {
        onLocationClick(place);
      }}>
        <h4>{place.name}</h4>
      </div>
      );
    });
    return jsx;
  };
  return <div>
    <form ref={form} onSubmit={handleSubmit}>
      <input
        onChange={e => {setTerm(e.target.value)}}
        value={term}
        className='input border mb-2'
        />
        <button
          className='button border rounded p-2'
          onClick={() => {
            console.log("clicked button");
            form.current?.submit();
          }}
          >Search</button>
    </form>
    <div>
      {places.length === 0 ?
        "No places found" :
        renderPlaces(places)
        }
    </div>
  </div>
}