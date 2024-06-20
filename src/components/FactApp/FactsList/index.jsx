import { Suspense, useState, useEffect } from "react";
import Fact from "../Fact/index.jsx";
import CreateFactForm from "../CreateFactForm";
import axios from "axios";

import "./FactsList.module.css";

console.log(import.meta.env.MODE);
const serverUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : "https://rtt-11-twitter-backend.onrender.com";


function FactsList() {
  const [facts, setFacts] = useState(null); // initial value is now null

  // useEffect is used to fetch the tweets when the component is rendered
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`${serverUrl}/facts`);
        console.log(res.data);
        setTweets([...res.data]); // here the data is set to the state
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // addTweet will make a POST request and create a new tweet
  const addTweet = async (newFacts) => {
    try {
      const res = await axios.post(`${serverUrl}/facts`, {
        newFacts,
        username: "TashUno721",
      });
      console.log(res.data);
      setFacts([res.data, ...facts]); // new tweet is added to the state
    } catch (error) {
      console.log(error);
    }
  };

  // removeTweet will make a DELETE request and delete a tweet by the id
  const removeFact = async (factId) => {
    try {
      const res = await axios.delete(`${serverUrl}/facts/${factId}`);
      // if request was 'ok' remove from app state
      if (res.status === 200) {
        setFacts(facts.filter((f) => f._id !== factId));
      } else {
        throw Error("Error deleting Fact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateFact = async (factId, newFactContent) => {
    try {
      const res = await axios.put(`${serverUrl}/facts/${factId}`, {newFactContent});

      // if request was 'ok' remove from app state
      if (res.status === 200) {
        setFacts(
          facts.map((t) => {
            if (f._id === factId) {
              return {
                ...f,
                content:res.data.content,
              };
            } else {
              return f;
            }
          }),
        );
      } else {
        throw Error("Error updating Fact!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      <CreateFactForm addFact={addFact} />

      {/* <ErrorBoundary fallback={<div>Error loading Tweets!</div>}> */}
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            {facts &&
              facts.map((item) => (
                <Fact
                  fact={item}
                  key={item._id}
                  removeFact={removeFact}
                  updateFact={updateFact}
                />
              ))}
          </section>
        </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default FactsList;