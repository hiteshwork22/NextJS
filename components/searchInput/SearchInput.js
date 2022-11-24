import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = (props) => {
    const {handleChange, value, defaultValue} = props;
    return (
        <TextField
            placeholder={"Search for user"}
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            size="small"
            variant="outlined"
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
        />
    );
};
export default SearchInput;
