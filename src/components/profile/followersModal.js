import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import {Typography} from '@material-ui/core';
import {Button} from '@mui/material';
import UserFollow from './UserFollow';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 10,
    borderRadius:5,
    p: 4,
};

export default function FollowersModal({userFollowers, followersCount}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Button onClick={handleOpen}>
                <Typography variant="h3" color='textSecondary'>
                    {!followersCount? 0 : followersCount}
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="img-upload"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {!userFollowers?
                        <></>
                    :
                        <UserFollow props={userFollowers} setOpen={setOpen} />

                    }
                </Box>
            </Modal>
        </div>
    );
}