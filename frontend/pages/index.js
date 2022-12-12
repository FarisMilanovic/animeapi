import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <Navbar />
      <input
        className="search_bar"
        type="search"
        placeholder="Find your anime..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card_container">
        <Card animeList={animeData} />
      </div>
    </div>
  );
}
