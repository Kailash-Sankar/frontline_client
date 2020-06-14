import React, { useState, useEffect, useRef } from "react";
import useWebSocketLite from "use-websocket-lite";
import { socketUrl } from "@utils/constants";

import Api from "@api";
import { authStorage } from "@utils/LocalStorage";

const sendTag = (message) => <span>&#11014;: {message}</span>;
const receiveTag = (message) => (
  <span>&#11015;: {JSON.stringify(message)}</span>
);

function Wrapper() {
  const [token, setToken] = useState("");
  const [retryToken, setRetryToken] = useState(0);

  useEffect(() => {
    // get websocket token
    async function getToken() {
      const res = await Api.getWebsocketToken();
      if (res.data.status == 1) {
        const token = res.data.data.token;
        setToken(token);
      }
    }
    getToken();
  }, [retryToken]);

  const retryGetToken = () => {
    setRetryToken((retryToken) => retryToken + 1);
  };

  return token ? (
    <NotificationPanel token={token} getToken={retryGetToken} />
  ) : (
    "Initializing..."
  );
}

function NotificationPanel({
  messagesBacklog = ["Messages will be displayed here"],
  token,
}) {
  const [messagesList, setMessagesList] = useState(messagesBacklog);

  const txtRef = useRef();

  const ws = useWebSocketLite({
    socketUrl: socketUrl + `/demo?type=ngo_notification&token=${token}`,
    initPayload: {
      type: "jwt",
      token: authStorage.get(),
    },
  });

  useEffect(() => {
    if (ws.data) {
      const { message } = ws.data;
      setMessagesList((messagesList) =>
        [].concat(receiveTag(message), messagesList)
      );
    }
  }, [ws.data]);

  const sendData = () => {
    const message = txtRef.current.value || "";
    if (message) {
      setMessagesList((messagesList) =>
        [].concat(sendTag(message), messagesList)
      );
      ws.send(message);
    }
  };

  return (
    <div style={{ marginTop: 15 }}>
      <h4>WebSocket Demo</h4>
      <div>
        <h5>
          <strong>Connection State: {ws.readyState ? "Open" : "Closed"}</strong>
        </h5>
        <textarea rows="4" ref={txtRef} style={{ width: 250 }} />
        <br />
        <input type="button" onClick={sendData} value="Post" />
      </div>
      <div style={{ height: 200, maxHeight: 300, overflowY: "scroll" }}>
        {messagesList.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
