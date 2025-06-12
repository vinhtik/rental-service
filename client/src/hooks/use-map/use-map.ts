import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { CityOffer } from '../../types/offer';

function useMap(mapRef: React.RefObject<HTMLDivElement | null>, city: CityOffer): L.Map | null {
  const [map, setMap] = useState<L.Map | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isInitialized.current) {
      const instance = L.map(mapRef.current).setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(instance);

      setMap(instance);
      isInitialized.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;