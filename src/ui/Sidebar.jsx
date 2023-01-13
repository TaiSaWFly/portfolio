import React from "react";
import Social from "./Social";
import { ReactComponent as HH } from "../assets/images/social/hh.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img src={require("../assets/images/sidebar-header.jpg")} alt="" />
      </div>

      <div className="sidebar__content">
        <div className="profile">
          <img
            className="profile__avatar"
            src={require("../assets/images/taisa.jpg")}
            alt=""
          />
          <div className="profile__header">
            <div className="profile__name">Кадыков Станислав</div>
            <div className="profile__prof">Front-end разработчик</div>
          </div>

          <Social />

          <div className="profile__resume">
            <div className="profile__resume_name">Моё резюме</div>
            <div className="profile__prof">
              <a
                className="social__link"
                href="https://ekaterinburg.hh.ru/applicant/resumes/view?resume=67e6b293ff0b9793680039ed1f36764c5a7843"
                target="blank">
                <HH />
              </a>
            </div>
          </div>

          <div className="profile__text">
            <p>
              Постоянно практикуюсь и создаю новые проекты, как учебные, так и
              коммерческие (в качестве практики).
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
