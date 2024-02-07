import BeatLoader from "react-spinners/BeatLoader";

const color = "#FFA500FF";

const Loader = () => {
  return (
    <BeatLoader
      color={color}
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
