import React, { Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu'
import { renderRoutes } from 'react-router-config';
class HeaderGuide extends Component {
    render() {
        return (
            <div>
                <div>
                    <TopMenu></TopMenu>
               
                    {renderRoutes(this.props.route.children)}
                </div>
            </div>
        );
    }
}

export default HeaderGuide;

