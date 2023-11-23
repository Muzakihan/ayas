import React from 'react';
import mineCraftImage from "../asset/trending/minecraft.jpg";
import farCryImage from "../asset/trending/farCry6.jpg";
import lolImage from "../asset/trending/lol.jpg";
import olliworldImage from "../asset/trending/olliworld.jpg";

const TrendingGame = () => {
  return (
    <section className="my-5 py-5">
      <div className="container text-center">
        <div className="row d-flex justify-content-center gap-4">
          <div className="col-md-2">
            <div className="card h-100 border-0">
              <img src={mineCraftImage} className="card-img-top" alt="Minecraft" />
              <div className="card-body">
                <h2 className="card-title fw-semibold">Minecraft</h2>
                <p className="card-text text-secondary">Trending</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card h-100 border-0">
              <img src={farCryImage} className="card-img-top" alt="Far Cry 6" />
              <div className="card-body">
                <h2 className="card-title fw-semibold">Far Cry 6</h2>
                <p className="card-text text-secondary">Trending</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card h-100 border-0">
              <img src={lolImage} className="card-img-top" alt="League of Legends" />
              <div className="card-body">
                <h2 className="card-title fw-semibold">League of Legends</h2>
                <p className="card-text text-secondary">Trending</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card h-100 border-0">
              <img src={olliworldImage} className="card-img-top" alt="Olliworld" />
              <div className="card-body">
                <h2 className="card-title fw-semibold">Olliworld</h2>
                <p className="card-text text-secondary">Trending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingGame;