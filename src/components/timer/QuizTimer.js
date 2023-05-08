import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { calculateTime } from '../utils/calculateTime';

const QuizTimer = ({quizTimer}) => {
    // state
    const [countDown, setCountDown] = useState(quizTimer);
    const [backColor, setbackColor] = useState('');
    const [bouncingEffects, setbouncingEffacts] = useState('')

    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        if (countDown  <  quizTimer * 60 / 100 && countDown  >  quizTimer * 40 / 100) {
            setbackColor('rgba(221,209,1,1)')
            setbouncingEffacts('');
        }
        if (countDown  <  quizTimer * 30 / 100 &&  countDown  > 0) {
            setbackColor('rgba(180,22,27,1)');
            setbouncingEffacts('animated-bounce bounce');
        }
        if (countDown  >  quizTimer * 60 / 100 ) {
            setbackColor('rgba(110,199,45,1)');
            setbouncingEffacts('');
        }
        if (countDown === 1) {
            setbouncingEffacts('');
            return () => clearInterval(timerId.current);
        }
    }, [countDown, quizTimer]);

    // console.log(quizTimer)
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 2,
                },
            }}
        >
            <Paper elevation={3} sx={{ padding: '8px 1rem', marginRight: '2rem', background: `${backColor}`, color: '#fff' }} className={bouncingEffects}>
                <h3>Timer: {calculateTime(countDown)}</h3>
            </Paper>
        </Box>
    )
}

export default QuizTimer