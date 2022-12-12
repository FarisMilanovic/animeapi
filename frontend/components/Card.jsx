import React from "react";
import { useRouter } from "next/router";

function Card({ animeList }) {
  const router = useRouter();
  // function handleClick(id) {
  //   router.push(`/api.jikan.moe/v4/anime/${id}/videos/episodes`);
  // }
  return (
    <div>
      {animeList
        ? animeList.map((anime, index) => {
            return (
              <div className="card" key={index}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <h4 className="card_title">{anime.title}</h4>
                <p>{anime.episodes}</p>
              </div>
            );
          })
        : "Anime not found"}
    </div>
  );
}

export default Card;
