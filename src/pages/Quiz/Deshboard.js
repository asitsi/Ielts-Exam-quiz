import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';
import { questionList } from '../../components/utils/cardstext';
import Button from '@mui/material/Button';
import styles from "../../styles/quiz.module.css";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import QuizTimer from '../../components/timer/QuizTimer';

const Dashboard = () => {
    // state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentList, setCurrentList] = useState(0)
    // const [score, setScrore] = useState();
    const [selected, setSelected] = useState([]);
    const [IsSelectedIndex, setIsSelectedIndex] = useState();
    // const [onSelectedStyle, setOnSelectedStyle] = useState();
    const [text, setText] = React.useState('');

    // Emoji for textarea
    const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

    const optionArr = questionList[currentList]?.list[currentQuestion];

    let navigate = useNavigate();

    let { list } = useParams();

    const nextQuestion = () => {
        if (currentQuestion < questionList[0]?.list.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setIsSelectedIndex(0)
        } else {
            console.log('redirect')
            navigate("/profile");
            setCurrentQuestion(0)
        }

    }

    const handleSelect = (value, index) => {
        setIsSelectedIndex(index)
        // for Unique 
        if (!selected.includes(value)) {
            setSelected([...selected, value]);
        }
        // setOnSelectedStyle('active')
    }

    useEffect(() => {
        if (list === 'question-answers') {
            setCurrentList(0)
        } else if (list === 'Essay') {
            setCurrentList(1)
        } else if (list === 'audio-question-answers') {
            setCurrentList(3)
        } else if (list === 'Speaking') {
            setCurrentList(4)
        }
    }, [list])



    return (
        <>
            <QuizTimer quizTimer={questionList[currentList]?.time} />

            <Box sx={{
                display: 'flex', flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '48%',
                },
            }}>
                {(() => {
                    switch (list) {
                        case "question-answers":
                            return (
                                <>
                                    <Box>
                                        <Paper elevation={3} sx={{ height: '70vh', padding: '1rem' }}> { /* display: 'flex', justifyContent: 'center', alignItems: 'flex-end' */}
                                            {/* <AudioPlayer /> */}
                                            <h3>Questions {optionArr.id} – {questionList[0]?.list.length} </h3>

                                            <p style={{ fontSize: '20px' }}><span style={{ fontWeight: '700!important' }}>{optionArr.id}. </span> {optionArr.question}</p>
                                        </Paper>
                                    </Box>
                                    <Box>

                                        <Paper elevation={3} sx={{ height: '70vh', display: 'grid', gap: '8px', padding: '1rem' }}>
                                            <h3>Choose the correct one - </h3>
                                            {optionArr?.options?.map((item, index) => {
                                                return (
                                                    <Button size="large" key={index}
                                                        onClick={() => handleSelect(item, index + 1)} sx={{ zIndex: 1 }}
                                                        className={`${styles.optionsButton} ${IsSelectedIndex === index + 1 ? styles.active : null}`}>{item}</Button>
                                                )
                                            })}
                                            <br />
                                            <ColorButton onClick={nextQuestion}>Next</ColorButton>
                                        </Paper>
                                    </Box>
                                </>
                            )
                        case "Essay":
                            return (
                                <>
                                    <Box>
                                        <Paper elevation={3} sx={{ height: '70vh', padding: '1rem' }}> { /* display: 'flex', justifyContent: 'center', alignItems: 'flex-end' */}
                                            {/* <AudioPlayer /> */}
                                            <h3>Questions {optionArr.id} – {questionList[0]?.list.length} </h3>

                                            <p style={{ fontSize: '20px' }}><span style={{ fontWeight: '700!important' }}>{optionArr.id}. </span> {optionArr.question}</p>
                                            <ul>
                                                {optionArr?.options?.map((item, index) => {
                                                    return (
                                                        <li size="large" key={index}
                                                            onClick={() => handleSelect(item, index + 1)} sx={{ zIndex: '1' }}
                                                        >{item}</li>
                                                    )
                                                })}
                                            </ul>
                                        </Paper>
                                    </Box>
                                    <Box>

                                        <Paper elevation={3} sx={{ height: '70vh', display: 'grid', gap: '8px', padding: '1rem' }}>
                                            <h3>Using The Minimum Of 150 Words. - </h3>
                                            {/* {optionArr?.options?.map((item, index) => {
                                                return (
                                                    <Button size="large" key={index}
                                                        onClick={() => handleSelect(item, index + 1)} sx={{ zIndex: '1' }}
                                                        className={`${styles.optionsButton} ${IsSelectedIndex == index + 1 ? styles.active : null}`}>{item}</Button>
                                                )
                                            })} */}
                                            <Textarea
                                                placeholder="Type in here…"
                                                value={text}
                                                onChange={(event) => setText(event.target.value)}
                                                minRows={10}
                                                maxRows={12}
                                                startDecorator={
                                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                                        <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                                                            👍
                                                        </IconButton>
                                                        <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                                                            🏖
                                                        </IconButton>
                                                        <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                                                            😍
                                                        </IconButton>
                                                    </Box>
                                                }
                                                endDecorator={
                                                    <Typography level="body3" sx={{ ml: 'auto' }}>
                                                        {text.length} character(s)
                                                    </Typography>
                                                }
                                                sx={{ minWidth: 300, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;' }}
                                            />

                                            <ColorButton onClick={nextQuestion}>Next</ColorButton>
                                        </Paper>
                                    </Box>
                                </>
                            )
                        case "Speaking":
                            return (
                                <>
                                    <Box>
                                        <Paper elevation={3} sx={{ height: '70vh', padding: '1rem' }}> { /* display: 'flex', justifyContent: 'center', alignItems: 'flex-end' */}
                                            {/* <AudioPlayer /> */}
                                            <h3>Questions {optionArr.id} – {questionList[0]?.list.length} </h3>

                                            <p style={{ fontSize: '20px' }}><span style={{ fontWeight: '700!important' }}>{optionArr.id}. </span> {optionArr.question}</p>
                                        </Paper>
                                    </Box>
                                    <Box>

                                        <Paper elevation={3} sx={{ height: '70vh', display: 'grid', gap: '8px', padding: '1rem' }}>
                                            <h3>Choose the correct one - </h3>
                                            {optionArr?.options?.map((item, index) => {
                                                return (
                                                    <Button size="large" key={index}
                                                        onClick={() => handleSelect(item, index + 1)} sx={{ zIndex: '1' }}
                                                        className={`${styles.optionsButton} ${IsSelectedIndex === index + 1 ? styles.active : null}`}>{item}</Button>
                                                )
                                            })}
                                            <br />
                                            <ColorButton onClick={nextQuestion}>Next</ColorButton>
                                        </Paper>
                                    </Box>
                                </>
                            )
                        case "audio-question-answers":
                            return (
                                <>
                                    <Box>
                                        <Paper elevation={3} sx={{ height: '70vh', padding: '1rem' }}> { /* display: 'flex', justifyContent: 'center', alignItems: 'flex-end' */}
                                            <AudioPlayer audioLink={optionArr?.audioLink} />
                                            {/* <h3>Questions {optionArr.id} – {questionList[0]?.list.length} </h3>

                                            <p style={{ fontSize: '20px' }}><span style={{ fontWeight: '700!important' }}>{optionArr.id}. </span> {optionArr.question}</p> */}
                                        </Paper>
                                    </Box>
                                    <Box>

                                        <Paper elevation={3} sx={{ height: '70vh', display: 'grid', gap: '8px', padding: '1rem' }}>
                                            <h3>Choose the correct one - </h3>
                                            {optionArr?.options?.map((item, index) => {
                                                return (
                                                    <Button size="large" key={index}
                                                        onClick={() => handleSelect(item, index + 1)} sx={{ zIndex: '1' }}
                                                        className={`${styles.optionsButton} ${IsSelectedIndex === index + 1 ? styles.active : null}`}>{item}</Button>
                                                )
                                            })}
                                            <br />
                                            <ColorButton onClick={nextQuestion}>Next</ColorButton>
                                        </Paper>
                                    </Box>
                                </>
                            )
                        default:
                            return (
                                <><h1>'Some - Thing Went Wrong'</h1></>
                            )
                    }
                })()}

            </Box>
        </>
    )
}

export default Dashboard;

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#501F3A"),
    backgroundColor: "#501F3A",
    "&:hover": {
        backgroundColor: "#CB2D6F",
    },
}));