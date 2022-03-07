import React from "react";
import {Icon} from "../logo/Icon";
import {mainLogo} from "../../helpers/icons";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-logo">
                    <Icon src={mainLogo} alt="123"/>
                </div>
            </div>
            <div className="header-nav"></div>
        </div>

    )
}