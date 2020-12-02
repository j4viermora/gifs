import React from "react";
import { useFetchGifs } from "../hooks/useFechtGfs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: imagenes, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {imagenes.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}

        {
          // imagenes.map( ({ id, title } = imagenes ) => (
          //     <li key = { id } >
          //         { title }
          //     </li>
          // ) )
        }

        {/* { imagenes.map( imgInfo => (
                <li key = { imgInfo.id }>
                   {imgInfo.title} 
                </li>
            )  )      } */}
      </div>
    </>
  );
};
