import React, { useState } from "react";
import Close from "../assets/close.svg";

function PortofolioItem({ img, title, links, description, tech }) {
  const [modal, setModal] = useState(false);

  const togglemodal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={togglemodal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={togglemodal}
            />

            <h3 className="modal__title">{title}</h3>
            <p>{description}</p>
            <p> Built With : {tech}</p>
            <ul className="modal__list grid">
              {links.map(({ icon, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icom">{icon}</span>

                    <div className="modal__flex">
                      <a className="item__details" target="_blank" href={desc}>
                        {desc}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortofolioItem;
