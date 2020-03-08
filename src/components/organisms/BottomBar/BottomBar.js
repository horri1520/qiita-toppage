import React from 'react'
import BottomInfo from '../../molecules/BottomInfo/BottomInfo'
import Increments from '../../molecules/Increments/Increments'

class BottomBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            width: "100%",
            height: "235px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <BottomInfo />
                <Increments />
            </div>
        )
    }
}


export default BottomBar