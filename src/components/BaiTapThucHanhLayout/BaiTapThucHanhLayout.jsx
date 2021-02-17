import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3Header from './BT3Header'
import BT3SideBar from './BT3SideBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header/>
                <BT3SideBar/>
                <BT3Carousel/>
            </div>
        )
    }
}
