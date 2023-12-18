import { useEffect, useState } from "react";
import { fetch_data } from "../services/fetch_api";

function DummyFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch_data().then((data) => {
      setData(data);
    });
  }, []);

  return { data };
}

export default DummyFetch;
