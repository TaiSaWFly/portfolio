import React from "react";
import WorkSlider from "../common/WorkSlider";
import { works } from "../../data/works";

const Works: React.FC = () => {
    return (
        <>
            <h1 className="page__title">Мои работы</h1>

            {works.map(
                ({
                    _id,
                    name,
                    description,
                    imgUrls,
                    tags,
                    url,
                    repository
                }) => (
                    <div key={_id} className="work">
                        <div className="work__preview_wrapper">
                            <div className="work__preview">
                                <WorkSlider {...{ imgUrls }} />
                            </div>
                        </div>

                        <div className="work__content">
                            <h2 className="work__title">{name}</h2>

                            <div className="work__description">
                                <p>{description}</p>
                            </div>

                            <ul className="tags">
                                {tags.map((t, i) => (
                                    <li key={i} className="tags__item">
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className="work__footer">
                                {url && (
                                    <a
                                        className="btn btn--green btn--rounded btn--sm"
                                        href={url}
                                        target="blank"
                                    >
                                        Демо
                                    </a>
                                )}

                                <a
                                    className="btn btn--blue btn--rounded btn--sm"
                                    href={repository}
                                    target="blank"
                                >
                                    Репозиторий
                                </a>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default Works;
