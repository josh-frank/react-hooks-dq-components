import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {

  let allAlbums = albums.map( album => <AlbumCard name={ album.name } image={ album.image } genre={ album.genre } /> )

  return (
    <section className="albums">
      { allAlbums }
    </section>
  );
}

export default AlbumList;
