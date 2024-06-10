import type { Place } from '../api/Place';

interface MapProps {
  place: Place | null;

}

export default function Map({place}: MapProps) {
  return <div>
    {place && <pre>
      {JSON.stringify(place, null, 4)}
    </pre>}

  </div>
}