import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:2050/");

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatHistory: ["hi"],
      socketId: ""
    };
    socket.on("connect", () => {
      this.setState({ socketId: socket.id });
    });
    socket.on("chat-message", msg =>
      this.setState({ chatHistory: this.state.chatHistory.concat([msg]) })
    );
  }

  // componentDidMount() {
  //   document.title = "Koushik-A";
  // }

  handleChange = e => {
    const chatMessage = e.target.value;
    this.setState(() => ({ chatMessage }));
  };

  onSubmit = e => {
    const { chatMessage, socketId } = this.state;
    e.preventDefault();
    this.setState(() => ({ chatMessage: "" }));
    socket.emit("chat-message", { message: chatMessage, socketId });
  };
  // componentWillUnmount() {
  //   document.title = "Document";
  // }
  render() {
    const { chatMessage, chatHistory } = this.state;
    return (
      <div>
        <ul id="messages">
          {chatHistory.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={this.onSubmit}>
          <input value={chatMessage} onChange={this.handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default A;
