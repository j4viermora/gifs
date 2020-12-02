import { useState, useEffect } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = (category) => {
  const [img, setImages] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGif(category).then((img) =>
        setImages({
          data: img,
          loading: false,
        })
      );
    });
  }, [category]);
  return img;
};
