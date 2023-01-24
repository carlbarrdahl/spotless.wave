type Parsed = {
  latitude?: number;
  longitude?: number;
  DateTimeOriginal?: Date;
};

export const parseExif = (file: File) =>
  import("exifr").then(({ parse }) => parse(file) as Promise<Parsed>);
