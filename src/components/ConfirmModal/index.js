import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import {
    Alert,
    Divider,
    IconButton,
    InputBase,
    Paper,
} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { CONFORM_TIME_TO_CLOSE } from '../../const';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export const ConfirmModal = ({ open, url, title, onClose }) => {
    const navigate = useNavigate();
    const [openAlert, setOpenAlert] = React.useState(false);
    const handleCloseAlert = () => {
        setOpenAlert(false);
        onClose();
    };
    React.useEffect(() => {
        let timer;
        if (openAlert) {
            timer = setTimeout(() => {
                setOpenAlert(false);
            }, CONFORM_TIME_TO_CLOSE);
        }
        return () => clearTimeout(timer);
    }, [openAlert]);
    return (
        <Modal
            open={open}
            onClose={handleCloseAlert}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2">
                    {title}
                </Typography>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        mt: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="List URL"
                        inputProps={{
                            'aria-label': 'List URL',
                        }}
                        value={url}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: '10px' }}
                        aria-label="preview"
                        // href={url}
                        // target="_blank"
                        onClick={() => navigate(url)}>
                        <VisibilityIcon />
                    </IconButton>
                    <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                    />
                    <CopyToClipboard
                        text={url}
                        onCopy={() => setOpenAlert(true)}>
                        <IconButton
                            color="primary"
                            sx={{ p: '10px' }}
                            aria-label="copy to clipboard">
                            <ContentCopyIcon />
                        </IconButton>
                    </CopyToClipboard>
                </Paper>
                {openAlert && (
                    <Alert
                        sx={{ width: '100%', mt: '10px' }}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpenAlert(false);
                                }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }>
                        Copied!
                    </Alert>
                )}
            </Box>
        </Modal>
    );
};

ConfirmModal.propTypes = {
    open: PropTypes.bool,
    url: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func,
};
