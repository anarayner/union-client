import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useContext} from 'react';
import {Context} from '../../index';
import {observer} from 'mobx-react';
import {runInAction} from 'mobx';

const options = [
    // 'Edit',
    'Delete',
];

const ITEM_HEIGHT = 48;

const ItemMenuComment = ({comment, postComments})=> {
    const {posts} = useContext(Context);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDelete = () => {
        posts.deleteComment(comment._id).then(data => console.log(data))
        runInAction(()=> {
            const filtered = postComments.filter(item => item !== comment)
            postComments.replace(filtered)
        })
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleDelete}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default observer(ItemMenuComment);
