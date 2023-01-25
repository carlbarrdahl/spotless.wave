const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

export const StaticMap = ({ longitude = 0, latitude = 0, zoom = 16 }) => {
  return (
    <img
      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${[
        longitude,
        latitude,
        zoom,
      ].join(",")}/500x300?access_token=${mapboxToken}`}
    />
  );
};
