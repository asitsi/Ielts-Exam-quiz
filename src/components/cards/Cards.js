import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { text } from '../utils/cardstext';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {transform} from '../utils/stringConvert';

const Cards = () => {
    return (
        <Box sx={{
            display: 'flex', flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: '40%',
            }, justifyContent: 'center',
            height: '100vh',
            alignItems: 'center'
        }}>
            <Row xs={1} md={2}>
                {text && text.map((item, index) => {
                    return (
                        <Col className='gy-3' key={index}>
                            <Link to={`/home/${transform(item.text)}`} style={{textDecoration: 'none'}}>  {/*  .replace(/ +/g, "").replace(/\//g, '-').toLowerCase() */}
                                <Paper sx={{ height: '35vh', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset` }}>{item.text}</Paper>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Box>
    )
}

export default Cards