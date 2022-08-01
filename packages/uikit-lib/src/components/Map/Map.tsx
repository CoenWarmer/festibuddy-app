import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import {
  MapContainerProps,
  MarkerProps,
  PolygonProps,
  PopupProps,
  TileLayerProps,
} from 'react-leaflet';

export const MapContainer = memo(
  dynamic<MapContainerProps>(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false },
  ),
);
export const TileLayer = dynamic<TileLayerProps>(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
);
export const Polygon = dynamic<PolygonProps>(
  () => import('react-leaflet').then((mod) => mod.Polygon),
  { ssr: false },
);
export const Marker = dynamic<MarkerProps>(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false },
);
export const Popup = dynamic<PopupProps>(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false },
);

interface MapProps {
  lat: number;
  long: number;
}

export const Map: React.FC<MapProps> = ({ lat, long }) => {
  const position = [lat, long];

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};
