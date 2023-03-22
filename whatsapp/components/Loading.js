import { ClipLoader } from "react-spinners";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <img
        src="https://1.bp.blogspot.com/-tN6DCkDTyT4/XyJoQz9yGcI/AAAAAAAAAF4/aBZwjuwwmb4iG3ZWEPKOZOi59_E4sXS5wCLcBGAsYHQ/s2048/logo%2Bwa%2Bpng%2Byogiancreative.png"
        alt=""
        height={200}
        style={{ marginBottom: 10 }}
      />
      <ClipLoader color="green" size={50} />
    </center>
  );
}

export default Loading;
