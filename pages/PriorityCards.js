import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
import { MdCall } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import io from "socket.io-client";
import styles from '/styles/prioritycard.module.css'
import { motion } from "framer-motion"


const PriorityCards = ({
  priority,
  priorityCard,
  setpriorityCard,
  updateLabel,
  selectedCard,
  setSelectedCard,
}) => {
  // setting up webserver connection
  const socket = io("http://localhost:3001", { transports: ["websocket"] });

  // setting up hugging face api
  let api_token = process.env.REACT_APP_HFTOKEN;
  let API_URL =
    "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2";

  // handling an emergency call
  socket.on("call progress event", async function (call) {
    console.log(call);
    let thecards = [...priorityCard];
    let newCard = {
      inProgress: call.inProgress,
      name: call.name,
      number: call.number,
      emergency: call.emergency,
      location: call.location,
      id: call.id,
      status: "open",
      transcript: call.transcript,
      priority: 0,
    };

    let duplicate = thecards.findIndex(
      (card) => card.id && card.id == newCard.id
    );
    if (duplicate == -1) {
      thecards.push(newCard);
      setpriorityCard(thecards);
    } else {
      thecards[duplicate] = newCard;
    }
    setpriorityCard(thecards);
  });

  function addNewLines(text) {
    let result = [];
    result = text.split("\n");
    console.log(result);
    return result;
  }


  return (
    <div>

      {priorityCard.map((card) => {
        if (
          priority == card.priority ||
          (priority == "Incoming" && card.priority == 0)
        ) {
          return card.id == selectedCard ? (
            
            <div key={card.id} className={styles.cardactive} >
            {/**Card Active*/}
            <motion.img
                            
                            className={styles.exit}
                            onClick={() => setSelectedCard(false)}
                            src={"/cross.png"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: .5 }}/> 

              <div className={styles.cardheader}>
                <h1 className={styles.cardtitle}>{card.emergency} </h1>
              </div>

              <div className={styles.cardcontent}>
                {/**first section */}
                <div className={styles.priority}>
                  <h3>Priority</h3>
                  <select
                    value={card.priority}
                    placeholder="select priority level"
                    onChange={updateLabel}
                    className={styles.priorityselect}
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                
                <div className={styles.calldata}>
                  <h3 className="">Phone Number: <span>{card.number}</span></h3>
                  <h3 className="">Status: <span>{card.status}</span></h3>
                  <h3 className="">Name: <span>{card.name}</span></h3>
                  <h3 className="">Location: <span>{card.location}</span></h3>
                </div>
                    <div className={styles.log}>
                        <h2> Log </h2>
                        <div className={styles.line}/>
                        <div className={styles.logbody}>
                            <p>
                            {addNewLines(card.transcript).map((item) => {
                                if (item.includes("Dispatcher: ")) {
                                    let todisplay = item.split("Dispatcher: ");
                                    return (
                                        <h3>
                                            <span className="font-bold">Dispatcher: </span>
                                            {todisplay}
                                        </h3>
                                    );
                                    } else if (item.includes("Caller: ")) {
                                        let todisplay = item.split("Caller: ");
                                        return (
                                            <h3>
                                                <span className="font-bold">Caller: </span>
                                                {todisplay}
                                            </h3>
                                        );
                                }})}
                            </p>
                        </div> 
                    </div>

                    <h1 className={styles.dispatchtitle}> Dispatch </h1>
                    <div className={styles.line}/>

                    <div className={styles.dispatch}>
                        <motion.div className={`${styles.dispatchicon} ${styles.icon1}`} whileHover={{ scale: 1.1, }}> <p>TORONTO FIRE SERVICES</p> </motion.div>
                        <motion.div className={`${styles.dispatchicon} ${styles.icon2}`} whileHover={{ scale: 1.1, }}> <p>TORONTO POLICE SERVICES</p> </motion.div>
                        <motion.div className={`${styles.dispatchicon} ${styles.icon3}`} whileHover={{ scale: 1.1, }}> <p>TORONTO PARAMEDIC SERVICES</p> </motion.div>
                    </div>

              </div>
            </div>
          ) : 
          
          
        
          
          (
            <div key={card.id}
              onClick={() => {setSelectedCard(card.id); }}
              className={styles.cardclosed}
            >
                {/**Card NOT Active*/}
              <h3 className={styles.cardClosedHeader}>
                {card.emergency}
              </h3>
              <div className={styles.cardClosedDesc}>
                <h3 className={styles.cardClosedDescElement}>{card.status}</h3>
                <h3 className={styles.cardClosedDescElement}>{card.location}</h3>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PriorityCards;