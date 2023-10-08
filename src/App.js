import Projects from "./containers/Projects";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const temp_data = [];
      const filteredQuery = query(
        collection(db, "projects"),
        where("project_status", "==", "active"),
        limit(10)
      );

      // Execute the query and retrieve the filtered data
          getDocs(filteredQuery)
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const project_data = doc.data();
                temp_data.push(project_data);
              });
              setData(temp_data);
            })
            .catch((error) => {
              console.error("Error fetching filtered data: ", error);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {data ? (
        <Projects projectList={data} />
      ) : (
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
    // <LoginComponent />
  );
}

export default App;
