import React from "react";
import useSvgIcon from "../../hooks/useSvgIcon";

const Social: React.FC = () => {
    const { Vk, Github, Telegram, Discord } = useSvgIcon();

    return (
        <ul className="social">
            <li className="social__item">
                <a
                    className="social__link"
                    href="https://t.me/Tai_SaWFly"
                    target="blank"
                >
                    <Telegram />
                </a>
            </li>

            <li className="social__item">
                <a
                    className="social__link"
                    href="https://github.com/TaiSaWFly"
                    target="blank"
                >
                    <Github />
                </a>
            </li>

            <li className="social__item">
                <a
                    className="social__link"
                    href="https://vk.com/kadykovsv"
                    target="blank"
                >
                    <Vk />
                </a>
            </li>

            <li className="social__item">
                <a
                    className="social__link"
                    href="https://discordapp.com/users/378635814768214016/"
                    target="blank"
                >
                    <Discord />
                </a>
            </li>
        </ul>
    );
};

export default Social;
