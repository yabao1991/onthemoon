import React, { useEffect, useCallback, useRef } from 'react';
import DigitalCard from './DigitalCard'
import './clock.scss'

function Clock() {
    const setInitialNumber =  useCallback(digitalCardArr => {
        const nowTimeStr = getFormattedDate(new Date(new Date().getTime()), 'hhiiss')
        for (let i = 0; i < digitalCardArr.length; i++) {
            digitalCardArr[i].current.setFront(nowTimeStr[i])
        }
    }, [])

    const setTimer = useCallback(digitalCardArr => {
        setInterval(() => {
            let current = new Date()
            let currentTimeStr = getFormattedDate(new Date(current.getTime() - 1000), 'hhiiss')
            let nextTimeStr = getFormattedDate(current, 'hhiiss')
            for (let i = 0; i < digitalCardArr.length; i++) {
                if (currentTimeStr[i] === nextTimeStr[i]) {
                    continue
                }
                digitalCardArr[i].current.setNextDigitalCard(
                    'down',
                    currentTimeStr[i],
                    nextTimeStr[i]
                )
            }
        }, 1000)
    }, [])

    const digitalHour1 = useRef();
    const digitalHour2 = useRef();

    const digitalMinute1 = useRef();
    const digitalMinute2 = useRef();

    const digitalSecond1 = useRef();
    const digitalSecond2 = useRef();

    useEffect(() => {
        const digitalCardArr = [
            digitalHour1,
            digitalHour2,
            digitalMinute1,
            digitalMinute2,
            digitalSecond1,
            digitalSecond2
        ]
        setInitialNumber(digitalCardArr)
        setTimer(digitalCardArr)
    }, [setInitialNumber, setTimer]);

    const getFormattedDate = (date, dateFormat) => {
        if (/(y+)/.test(dateFormat)) {
            dateFormat = dateFormat.replace(
                RegExp.$1,
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)
            )
        }
        const o = {
            'm+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'i+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(dateFormat)) {
                let str = o[k] + ''
                dateFormat = dateFormat.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
                )
            }
        }
        return dateFormat
    }

    return (
        <div className="clock">
            <DigitalCard ref={digitalHour1} />
            <DigitalCard ref={digitalHour2} />
            <em>:</em>
            <DigitalCard ref={digitalMinute1} />
            <DigitalCard ref={digitalMinute2} />
            <em>:</em>
            <DigitalCard ref={digitalSecond1} />
            <DigitalCard ref={digitalSecond2} />
        </div>
    )
}

export default Clock;