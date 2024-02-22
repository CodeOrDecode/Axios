import axios from "axios";

function App() {
  const envurl = import.meta.env.VITE_BASEURL;
  const envurl2 = import.meta.env.VITE_BASEURL2;

  let mainurlis = import.meta.env.MODE ==="production"?envurl2:envurl;
  async function getData() {
    try {
      let res = await axios({
        method: "get",
        baseURL:mainurlis,
        url: `/api/users`,
        params: {
          page: 2,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={getData}>Click</button>
    </>
  );
}

export default App;
