import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchTerm } from "../../app/redditSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    dispatch(getSearchTerm(searchTerm));
  };
  return (
    <form className="search" onSubmit={handleSearch}>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
