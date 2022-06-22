import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "./MobileSelect.css";

export default function MobileSelect() {
  return (
    <Box sx={{ minWidth: 120 }} className="MobileSelect">
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Subreddits
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "subreddits",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
