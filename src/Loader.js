import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  marginTop: "150px",
};

export default function Loader() {
  return (
    <div className="Loader">
      <RingLoader
        color="blueviolet"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
