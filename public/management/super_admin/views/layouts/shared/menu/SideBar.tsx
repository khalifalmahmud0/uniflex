/* eslint-disable no-undef */
import React from 'react';
import MenuDropDown from './MenuDropDown';
import MenuDropDownItem from './MenuDropDownItem';
import MenuSingle from './MenuSingle';
export interface Props {}

const SideBar: React.FC<Props> = (props: Props) => {
    setTimeout(() => {
        init_nav_action();
        active_link(window.location.href);
    }, 1000);

    return (
        <>
            <ul className="sidebar-menu">
                <MenuSingle to="/" icon="icon-dashboard" label="Dashboard" />

                <MenuDropDown
                    section_title="Management"
                    group_title="Users"
                    icon="icon-desktop"
                >
                    <MenuDropDownItem label="All users" to="/users" />
                    <MenuDropDownItem label="Create user" to="/users/create" />
                </MenuDropDown>

                <MenuDropDown
                    section_title=""
                    group_title="Insetive setup"
                    icon="icon-money"
                >
                    <MenuDropDownItem label="All users" to="/users" />
                    <MenuDropDownItem label="Create user" to="/users/create" />
                </MenuDropDown>

                <MenuSingle to="/" icon="icon-anchor" label="Starter kit" />

                {/* <li>
                    <a
                        href="http://admin.pixelstrap.com/universal/default/maintenance.html"
                        className="sidebar-header"
                    >
                        <i className="icon-settings" />
                        <span>Maintenance</span>
                    </a>
                </li> */}
            </ul>
        </>
    );
};

function active_link(hash) {
    let url = new URL(hash);
    $(`.sidebar-submenu a`).removeClass('active');
    $(`.sidebar-submenu a[href="${url.hash}"]`).addClass('active');
}
function init_nav_action() {
    var animationSpeed = 300,
        subMenuSelector = '.sidebar-submenu';
    $('.sidebar-menu').on('click', 'li a', function (e) {
        var $this = $(this);
        var checkElement = $this.next();
        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent('li').removeClass('active');
        } else if (
            checkElement.is(subMenuSelector) &&
            !checkElement.is(':visible')
        ) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('menu-open');
            var parent_li = $this.parent('li');
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
        }

        if (e.target && e.target.href && e.target.href.includes('http')) {
            active_link(e.target.href);
        }
    });
}

export default SideBar;