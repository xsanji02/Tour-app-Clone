import { useState, useEffect } from "react";
import "./App.css";
import { Tours } from "../Components/Tours";
import { Loading } from "../Components/Loading";

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [tours, setTours] = useState([]);

  let api = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    setLoadingScreen(true);
    try {
      const response = await fetch(api);
      const data = await response.json();
      setTimeout(() => {
        setLoadingScreen(false);
      }, 2000)
      setTours(data);
    } catch {
      setLoadingScreen(false);
      console.log("webpage cannot found code 404");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loadingScreen) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const deleteTours = (id) => {
    const deleteTour = tours.filter((del) => del.id !== id);
    setTours([...deleteTour]);
  };

  if (tours.length === 0) {
    return (
      <main  style={{height: "5rem"}}>
        <div className="d-flex justify-content-center mt-4">
          <h3 className="border-bottom border-primary border-3 mb-5">There's no left Tours</h3>
        </div>
        <div className="d-flex justify-content-center ">
          <button className="btn btn-primary text-center" onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <Tours tours={tours} deleteTours={deleteTours} />
    </main>
  );
}

export default App;
