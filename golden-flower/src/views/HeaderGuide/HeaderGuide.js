import React, { Component } from 'react';
import TopMenu from '../../components/TopMenu/TopMenu'
import BottomMenu from '../../components/BottomMenu/BottomMenu'

import { renderRoutes } from 'react-router-config';
class HeaderGuide extends Component {
    render() {
        return (
            <div>
                <div>
                    <TopMenu></TopMenu>
               
                    {renderRoutes(this.props.route.children)}

                    <BottomMenu></BottomMenu>
                </div>
            </div>
        );
    }
}

export default HeaderGuide;

