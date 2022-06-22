import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <form className="search">
      <TextField
        id="standard-search"
        label="Search"
        type="search"
        fullWidth
        variant="filled"
        sx={{ margin: " 15px auto" }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <label
                htmlFor="standard-search"
                style={{ margin: "0 0 0.5rem " }}
              >
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                    margin: "auto",
                  }}
                />
              </label>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Search;
