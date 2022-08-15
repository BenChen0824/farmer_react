import React, { useEffect, useRef, useState } from 'react';
import './pointtime.css';

function Pointtime() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('August 16 2022 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <section className="container">
            <div className="timer_text">
                <span className=""></span>
                <h4>距離下次領取時間</h4>
            </div>
            <section className="pointtimer">
                <div className="text-center">
                    <section>
                        <p>{timerDays}</p>
                        <p>
                            <small>Days</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p>
                            <small>Min</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p>
                            <small>Sec</small>
                        </p>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default Pointtime;
