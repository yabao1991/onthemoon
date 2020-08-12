import React, { Component } from 'react'
import './digitalCard.scss'

class DigitalCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipping: false,
            flipType: 'down',
            frontTextFromData: 0,
            backTextFromData: 1
        }
    }

    setNextDigitalCard = (type, front, back) => {
        this.setState({
            frontTextFromData: front,
            backTextFromData: back,
            flipType: type,
            isFlipping: true
        })
        setTimeout(() => {
            this.setState({
                frontTextFromData: back,
                isFlipping: false
            })
        }, 600)
    }

    setFront = (text) => {
        this.setState({
            frontTextFromData: text
        })
    }

    render() {
        const { isFlipping, flipType, frontTextFromData, backTextFromData } = this.state
        return (
            <div className={['digitalCard', flipType, isFlipping ? 'go' : null].join(' ')}>
                <div className={`digital front number${frontTextFromData}`}></div>
                <div className={`digital back number${backTextFromData}`}></div>
            </div>
        )
    }
}

export default DigitalCard;