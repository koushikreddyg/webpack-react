import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";
import localeEn from "react-intl/locale-data/en";
import localeDe from "react-intl/locale-data/de";
import localeEs from "react-intl/locale-data/es";
import messagesDe from "./translations/de.json";
import messagesEn from "./translations/en.json";
import messagesEs from "./translations/es.json";
import localMessage from "./messages";


import "./Ap.scss";
import "./App.css";
import Button from "./Button";

addLocaleData([...localeEn, ...localeDe, ...localeEs]);
const messages = {
  de: messagesDe,
  en: messagesEn,
  es: messagesEs
};

class App extends React.Component {
  state = { count: 0 };
  increase = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    const { count } = this.state;
    const language = "en";
    console.log("name is ", process.env.NODE_ENV);
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="background textSize">
          {<FormattedMessage {...localMessage.title} />}
          <p>{count}</p>
          <Button onClick={this.increase} />
        </div>
      </IntlProvider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
