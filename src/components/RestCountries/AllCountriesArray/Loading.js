import React from 'react'
import PropTypes from 'prop-types'
import Spin from 'antd/es/spin'
import 'antd/es/spin/style/css'


const Loading=({message})=> {
    return (
       <Spin tip={message} size="large"/>
    )
}
Loading.propTypes={
    message:PropTypes.string.isRequired
}
export default Loading