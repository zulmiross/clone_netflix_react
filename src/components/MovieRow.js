import React, {useState} from "react";
import "./MovieRow.css";

export default ({ title, items }) => {

  const [scrollX, setScrollX] = useState(-3);

  const handleLeftArrow = () =>{
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > -3){
      x = -3;
    }
    setScrollX(x);
  }


  const handleRightArrow = () =>{

    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) + 30;
    }

    setScrollX(x);

  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="moveRowLeft" onClick={handleLeftArrow}>
      ◀
      </div>
      <div className="moveRowRight" onClick={handleRightArrow}>
        ▶             
      </div>
      <div className="movieRowListArea">
        <div className="movieRowList" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRowListItem">
                <a href={`/watch/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt=""
                />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
