export const parseExif = (
  file: File
): Promise<{
  latitude?: number;
  longitude?: number;
  DateTimeOriginal?: Date;
}> => require("exifr").parse(file);
