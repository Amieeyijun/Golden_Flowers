import React from 'react';
import Myfamily from './Myfamily/Myfamily'
import Mygoods from './Mygoods/Mygoods'
import Myreview from './Myreview/Myreview'
import Mytravel from './Mytravel/Mytravel'
export default function Myhome(props) {
    if (props.now == "mail") {
        return <Myfamily name = { props.name }
        />
    } else if (props.now == 'alipay') {
        return <Mygoods / >
    } else if (props.now == 'app') {
        return <Mytravel / >
    } else if (props.now == 'call') {
        return <Myreview / >
    }
}