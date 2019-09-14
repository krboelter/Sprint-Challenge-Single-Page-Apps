import React, { useState } from "react";
import { Tab, Menu, Icon, MenuHeader } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='home'
                    as={NavLink}
                    to={'/'}
                />
                <Menu.Item 
                    name='characters'
                    as={NavLink}
                    to={'/characters'}
                />
                <Menu.Item 
                    name='locations'
                    as={NavLink}
                    to={'/locations'}
                />
                <Menu.Item 
                    name='episodes'
                />
            </Menu>
        </div>
    )
};
