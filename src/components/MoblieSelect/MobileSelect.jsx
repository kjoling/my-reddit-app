import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import {
  selectAllSubreddits,
  selectSubredditStatus,
  selectSubredditErrorMessage,
} from "../../app/subredditSlice";
import { useSelector } from "react-redux";
import "./MobileSelect.css";

export default function MobileSelect() {
  const subreddits = useSelector(selectAllSubreddits);
  const status = useSelector(selectSubredditStatus);
  const error = useSelector(selectSubredditErrorMessage);
  let content;
  if (status === "loading") {
    content = <option>Loading...</option>;
  } else if (status === "succeeded") {
    content = subreddits?.map((subreddit) => (
      <option
        value={subreddit.display_name_prefixed}
        subreddit={subreddit}
        key={subreddit.id}
      >
        {subreddit.display_name_prefixed}
      </option>
    ));
  } else {
    content = <option>{error}</option>;
  }
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
          {content}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
