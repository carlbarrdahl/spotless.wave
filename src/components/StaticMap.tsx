import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  useState,
  useRef,
  ChangeEvent,
} from "react";

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;

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
