import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = []; 
  let description = null;   

  for(let i in item.genres){
      genres.push(item.genres[i].name);
  } 

  function limitarTexto(str, limit){
  
      if(str.length > limit) {
        return str.substr(0, limit) +"...";          
      }   
      
      return str;      
    
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredTitle">{item.original_name}</div>
          <div className="featuredInfo">
            <div className="featuredPoints">{item.vote_average} pontos</div>
            <div className="featuredYear">{firstDate.getFullYear()}</div>
            <div className="featuredSeason">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featuredDescription">{limitarTexto(item.overview, 130)}</div>
          <div className="featuredButton">
            <a href={`/watch/${item.id}`}>▶ Assitir</a>
            <a href={`/addList/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featuredGenres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
        </div>
      </div>
    </section>
  );
};
