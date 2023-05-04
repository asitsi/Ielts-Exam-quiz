import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';
import { questionList } from '../../components/utils/cardstext';
import Button from '@mui/material/Button';
import styles from "../../styles/quiz.module.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    // state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScrore] = useState();
    const [selected, setSelected] = useState([]);
    const [IsSelectedIndex, setIsSelectedIndex] = useState();
    const [onSelectedStyle, setOnSelectedStyle] = useState();


    const optionArr = questionList[0]?.list[currentQuestion];
    // console.log(optionArr)

    let navigate = useNavigate();

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
        console.log("value", value);
        setIsSelectedIndex(index)
        // for Unique 
        if (!selected.includes(value)) {
            setSelected([...selected, value]);
        }
        setOnSelectedStyle('active')
    }

    // console.log("selected", selected);



    return (
        <>
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
                <Paper elevation={3} sx={{ padding: '8px 1rem', marginRight: '2rem' }}><h3>Timer: 00:00</h3></Paper>
            </Box>
            {/* <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '20rem',
                        height: 'auto',
                        padding: '1rem 0',
                        textAlign: 'center'
                    },
                }}
            >
                <Paper elevation={3} >Question / Answers</Paper>
                <Paper elevation={3} >Essay</Paper>
                <Paper elevation={3} >Audio Question / Answers</Paper>
                <Paper elevation={3} >Speaking</Paper>
            </Box> */}

            <Box sx={{
                display: 'flex', flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '48%',
                },
            }}>
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
                                    className={`${styles.optionsButton} ${IsSelectedIndex == index + 1 ? styles.active : null}`}>{item}</Button>
                            )
                        })}
                        <br />
                        <ColorButton onClick={nextQuestion}>Next</ColorButton>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard;

const options = ['A', 'B', 'C', 'D']

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#501F3A"),
    backgroundColor: "#501F3A",
    "&:hover": {
      backgroundColor: "#CB2D6F",
    },
  }));