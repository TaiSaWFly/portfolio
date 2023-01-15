import React from "react";
import { work } from "../../data/work";
import WorkSlider from "../common/WorkSlider";

const Works = () => {
  return (
    <>
      <h1 className="page__title">Мои работы</h1>

      {work.map((w) => (
        <div key={w.id} className="work">
          <div className="work__preview_wrapper">
            <div className="work__preview">
              <WorkSlider items={w.imgUrls} />
            </div>
          </div>

          <div className="work__content">
            <h2 className="work__title">{w.name}</h2>

            <div className="work__description">
              <p>{w.description}</p>
            </div>

            <ul className="tags">
              {w.tags.map((t, i) => (
                <li key={i} className="tags__item">
                  {t}
                </li>
              ))}
            </ul>

            <div className="work__footer">
              <a
                className="btn btn--blue btn--rounded btn--sm"
                href={w.repository}
                target="blank">
                Ссылка на репозиторий
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Works;
