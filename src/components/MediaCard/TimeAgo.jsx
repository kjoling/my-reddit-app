import { formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const myDate = new Date(timestamp * 1000);
    const timePeriod = formatDistanceToNow(myDate);
    timeAgo = `${timePeriod} ago`;
  }
  console.log(timeAgo);
  return (
    <span title={timestamp} style={{ width: "100%" }}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
