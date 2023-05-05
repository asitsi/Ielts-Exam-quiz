import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { titleCase, transformURLString } from '../utils/stringConvert';
import { questionList } from '../utils/cardstext';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import StartIcon from '@mui/icons-material/Start';
import Popup from '../popup/popup';
import { Button, Paper } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#501F3A"),
  backgroundColor: "#501F3A",
  "&:hover": {
    backgroundColor: "#CB2D6F",
  },
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const QuestionList = () => {
  const [data, setData] = useState([])
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [ButtonPopup, setButtonPopup] = React.useState(false);
  const [check, setCheck] = React.useState(false)

  let { list } = useParams();
  let listid = { list }
  if (list === 'question-answers') {
    listid = 1
  } else if (list === 'Essay') {
    listid = 2
  } else if (list === 'audio-question-answers') {
    listid = 3
  } else if (list === 'Speaking') {
    listid = 4
  }

  const arr = questionList.filter((item) => item.id === listid);
  // setData(arr[0])

  let isLoading = false

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Top 10 { transformURLString(list) } Quizes, you can take -
          </Typography>
          <Demo >
            {arr && arr.length > 0 ? arr[0].list.map((item, index) => {
              return (
                // <Link to={'/'} >
                <List dense={dense} onClick={() => setButtonPopup(true)}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <StartIcon />
                      </IconButton>
                    }
                    key={index}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        {index + 1}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.title.split(" ").slice(0, 15).join(" ") + '...'}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                </List>
                // </Link>
              )
            }) : <h1>'Some - Thing Went Wrong'</h1>
            }
          </Demo>
        </Grid>
      </Box>
      <Popup
        trigger={ButtonPopup}
        setTrigger={setButtonPopup}
        className="Popup"
        style={{ padding: '1.5rem 0 0 0' }}
      >
        <div className="popup-inner" style={{ width: '100%', margin: '0', padding: '0' }}>
          <div>
            <h2 style={{ margin: '2rem 15rem 1rem 1rem' }} className='text-capitalize'>Examples of Ielets exam test rules</h2>
            <ul style={{ height: '200px', overflowY: 'auto', margin: '0 1rem' }}>
              {Rules && Rules.length > 0 ?
                Rules.map((items, index) => {
                  return (
                    <li key={index} style={{ display: 'flex', margin: '1rem 0' }}>
                      <Avatar>{index + 1}</Avatar> <span style={{ marginLeft: '1rem' }}>{items}</span></li>
                  )
                })
                : ''}

            </ul>
          </div>
          <Paper elevation={3} style={{ padding: '1rem 1.5rem' }}>
            <FormControlLabel required control={<Checkbox onClick={() => setCheck(!check)} />} label="Accept terms & conditions" />
            <Link to={`/home/${list}/quiz`}>
              <ColorButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!check}
              >
                {isLoading ? <RestartAltIcon className="loading" /> : <>Next <StartIcon sx={{marginLeft: '10px'}}/></>}
              </ColorButton>
            </Link>
          </Paper>
        </div>
      </Popup>
    </React.Fragment >
  )
}

export default QuestionList;

const Rules = [
  'You must use a functioning webcam and microphone',
  'No cell phones or other secondary devices in the room or test area',
  'Your desk/table must be clear or any materials except your test-taking device',
  'No one else can be in the room with you',
  'No talking',
  'The testing room must be well-lit and you must be clearly visible',
  'No dual screens/monitors',
  'Do not leave the camera',
  'No use of additional applications or internet'
]

