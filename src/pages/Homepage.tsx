import React, { useState, useEffect } from "react";
import "../Styles/Homepage.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import store from "../redux/store";
import { DATASET_ADD, DATASET_SELECTED } from "../redux/actions";
import Datasets from "../redux/Dataset";
// import MNIST_IMAGE from "../images/MNIST.png";
// import NLP_IMAGE from "../images/NLP.png";
// import TWITTER_IMAGE from "../images/Twitter.jpg";

const Homepage = () => {
  // objects for function function to run
  // eslint-disable-next-line
  const [showHoverText, setShowHoverText] = useState(false);
  const [showParameter, setShowParameter] = useState(false);

  useEffect(() => {
    Datasets.map((dataset) => store.dispatch(DATASET_ADD(`${dataset}`)));
  }, []);

  const [dataset, setDataset] = useState("");

  //Gets value after clicking button and makes state selected true for it
  function getReq(e: any) {
    setDataset(dataset + `${e.target.value}`);
    setShowParameter(true);
    store.dispatch(DATASET_SELECTED(`${e.target.value}`));
  }

  //sends get request to the server with dataset value as JSON
  //Stores the server response
  const getDataAxios = async () => {
    //URL should be changed later, just for development purpose a working url is given
    // eslint-disable-next-line
    const response = await axios.get("https://dog.ceo/api/breeds/list/all", {
      params: { dataset: dataset },
    });
    //The response data would be used later to at later stage of development
    //console.log(response.data);
    // To be redirected when new pages will be ready
  };

  //Reset of dataset so that string do not get add up
  function getUrl() {
    getDataAxios();
    setDataset((dataset) => "");
  }

  useEffect(getUrl, [dataset]);

  return (
    <div className="Startpage">
      {showParameter ? (
        <div className="Parameters">
          <h1>Show parameter here</h1>
          <Button
            size="lg"
            variant="outline-light"
            style={{ margin: "100px" }}
            onClick={() => setShowParameter(false)}
          >
            Click to go back
          </Button>
        </div>
      ) : (
        <div className="Homepage">
          <h1 className="welcome">Welcome!</h1>
          <div className="mainQuestion">
            <h1 onMouseEnter={() => setShowHoverText(true)}>
              Choose which dataset are you want to use?
            </h1>
          </div>
          {
            <div className="hoverText">
              {Datasets.map((dataset) => (
                <Button
                  size="lg"
                  variant="outline-light"
                  onClick={getReq}
                  className="button"
                  value={dataset}
                  key={dataset}
                >
                  {" "}
                  {dataset} Dataset{" "}
                </Button>
              ))}
            </div>
          }{" "}
          {/* {showHoverText && (
            <div className="Homepage--images">
              <img src={MNIST_IMAGE} alt="MNIST" className="dataset--image" />
              <img src={NLP_IMAGE} alt="NLP" className="dataset--image" />
              <img
                src={TWITTER_IMAGE}
                alt="TWITTER"
                className="dataset--image"
              />
            </div>
          )} */}
          {/* Exiting of the below element shows the hidden items, commented for now */}
          {/* <h1 onMouseLeave={() => setShowHoverText(false)} className="exitItem">
            Hover Above To select Your Dataset
          </h1> */}
        </div>
      )}
    </div>
  );
};

export default Homepage;
