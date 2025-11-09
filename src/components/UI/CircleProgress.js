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
              stroke: "var(--accent-color)",
            },
            text: {
              fill: "var(--primary-text)",
            },
          }}
          text={`${value}%`}
        />
      )}
    </ProgressProvider>
  );
};

export default CircleProgress;
