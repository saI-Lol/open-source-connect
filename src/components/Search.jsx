import { useState, useEffect } from "react";
import { collection, query, where, getDocs, or } from "firebase/firestore";
import { db } from "../firebaseConfig";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async (text) => {
    const collectionRef = collection(db, "projects");
    const q = query(
      collectionRef,
      or(
        where("keywords", "array-contains", text),
        where("participation_tasks", "array-contains", text),
        where("fields_of_science", "array-contains", text)
      )
    );
    const querySnapshot = await getDocs(q);
    const document_store = [];
    querySnapshot.forEach((doc) => {
      const document_data = doc.data();
      document_store.push(document_data);
    });
    setResults(document_store);
  };

  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="input-group pt-5 pb-2 w-25">
          <input
            type="text"
            value={searchText}
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            onClick={async () => {
              const text = searchText;
              setSearchText("");
              await fetchData(text);
            }}
            id="button-addon2"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="text-secondary mx-5">
        <hr />
      </div>
    </>
  );
};

export default Search;
