// CircleProgress.jsx
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../ProgressProvider";

const CircleProgress = ({ valueEnd }) => {
  return (
    <ProgressProvider valueStart={0} valueEnd={valueEnd}>
      {(value) => (
        <CircularProgressbar
          value={value}
          styles={{
            trail: {
              strokeLinecap: "butt",
            },
            path: {
              strokeLinecap: "butt",
              stroke: "#78cc6d",
            },
            text: {
              fill: "#000",
            },
          }}
          text={`${value}%`}
        />
      )}
    </ProgressProvider>
  );
};

export default CircleProgress;
