import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import React from 'react';

export const SearchAndButton = ({ onSubmit }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={(values) => {
                const errors = {};
                if (!values.listName) {
                    errors.listName = 'Required';
                }
                return errors;
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Paper
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                        <Field
                            name="listName"
                            render={({ input, meta }) => (
                                <>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Put the list name"
                                        inputProps={{
                                            'aria-label':
                                                'search google maps',
                                        }}
                                        {...input}
                                    />
                                    {meta.touched && meta.error && (
                                        <span>{meta.error}</span>
                                    )}
                                </>
                            )}
                        />

                        <Divider
                            sx={{ height: 28, m: 0.5 }}
                            orientation="vertical"
                        />
                        <IconButton
                            color="primary"
                            sx={{ p: '10px' }}
                            aria-label="directions"
                            type="submit">
                            <CheckIcon />
                        </IconButton>
                    </Paper>
                </form>
            )}
        />
    );
};
