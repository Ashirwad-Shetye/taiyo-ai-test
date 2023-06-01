import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { countryCovidData } from "../../services/fetch";

function Maps() {
  const { data } = useQuery({
    queryKey: ["countryCovidData"],
    queryFn: () => countryCovidData,
  });
  const marker = data;

  return (
    <div className="border rounded-lg overflow-hidden">
      <MapContainer center={[20.5937, 78.9629]} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {marker?.map((marker) => (
          <Marker position={[marker.countryInfo.lat, marker.countryInfo.long]}>
            <Popup>
              <div>
                <h1>{marker.country}</h1>
                <h2>Active: {marker.active}</h2>
                <h2>Recovered: {marker.recovered}</h2>
                <h2>Deaths: {marker.deaths}</h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;
