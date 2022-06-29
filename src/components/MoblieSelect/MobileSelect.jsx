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
import {
  setSelectedSubreddit,
  fetchSubredditPosts,
} from "../../app/redditSlice";
import { useSelector } from "react-redux";
import "./MobileSelect.css";
import { useDispatch } from "react-redux";

export default function MobileSelect({ subreddit }) {
  const subreddits = useSelector(selectAllSubreddits);
  const status = useSelector(selectSubredditStatus);
  const error = useSelector(selectSubredditErrorMessage);

  const dispatch = useDispatch();

  //get value from selected drop down option and dispatch to change subreddit on Mobile veiw

  const handleSelect = (e) => {
    dispatch(setSelectedSubreddit(e.target.value));
    dispatch(fetchSubredditPosts(e.target.value));
  };

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
          onChange={(e) => handleSelect(e)}
        >
          {content}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
