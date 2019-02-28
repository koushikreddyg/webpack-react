import React from "react";
import PropTypes from "prop-types";
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";
import localeEn from "react-intl/locale-data/en";
import localeDe from "react-intl/locale-data/de";
import localeEs from "react-intl/locale-data/es";
import messagesDe from "../../translations/de.json";
import messagesEn from "../../translations/en.json";
import messagesEs from "../../translations/es.json";
import localMessage from "./messages";
import "../../styles/Ap.scss";
import "../../styles/App.css";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { payImage } from "../../assets";

addLocaleData([...localeEn, ...localeDe, ...localeEs]);
const messages = {
  de: messagesDe,
  en: messagesEn,
  es: messagesEs
};

class App extends React.Component {
  state = { count: 0, image: "" };

  componentDidMount() {
    payImage.then(image => this.setState({ image }));
  }

  increase = () => {
    const { push } = this.props.history;
    this.setState(({ count }) => ({ count: count + 1 }));
    push("/a");
  };
  render() {
    const { count } = this.state;
    const { name } = this.props;
    const language = "en";
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="background textSize">
          {<FormattedMessage {...localMessage.title} />}
          <p>{count}</p>
          <p>{name}</p>
          <img src={this.state.image} />
          <Button onClick={this.increase}>
            <FormattedMessage {...localMessage.buttonName} />
          </Button>
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(state => ({
  name: state.name
}))(App);
