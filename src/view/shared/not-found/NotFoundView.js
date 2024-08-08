import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'

const NotFoundView = () => {

    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        setTimeout(() => navigate("/"), 5000);
        setInterval(() => setSecondsLeft(prevSecondsLeft => prevSecondsLeft - 1), 1000)
    }, []);

    return (
        <div>
            <br /><br />
            <img src="https://t4.ftcdn.net/jpg/01/02/39/59/360_F_102395943_0jOAtQNqlvQpA9soKBUMXksgvq4ZDx04.jpg" alt="not-found-icon" />
            <h2>There is nothing here!</h2>
            <h3>You will be redirected to homepage in {secondsLeft} seconds...</h3>
        </div>
    )
}

export default NotFoundView