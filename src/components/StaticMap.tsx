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

const mapboxToken =
  "pk.eyJ1IjoiY2FybGJhcnJkYWhsIiwiYSI6ImNhMDE5OTlhMzcxZGY0MTk1ZTg0Yjk4ZTViMjk1ODQxIn0.nsaHX74kYxKkGqVqm5Po9Q";

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
