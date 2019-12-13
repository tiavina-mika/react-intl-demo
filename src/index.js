import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage, FormattedHTMLMessage, useIntl} from 'react-intl';
import messages_fr from "./fr.json";
import messages_de from "./de.json";

const messages = {
  'fr': messages_fr,
  'de': messages_de,
};
// const language = navigator.language.split(/[-_]/)[0];  // language without region code
// console.log(language)

const App = () => {
  const {formatMessage: f} = useIntl();
    return (
      <>
          <p>
              <FormattedHTMLMessage 
                id="app.text"
                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                description="Welcome header on app main page"
                values={{ what: 'react-intl' }}/>
          </p>
          <p>
                {f({
                id:"app.text",
                defaultMessage:"Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                ,description:"Welcome header on app main page"
                  }, 
                  {what: 'react-intl'}
                )}
          </p>

          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <FormattedMessage 
                id="app.learn-react-link"
                defaultMessage="Learn React"
                description="Link on react page"/>
          </a>
      </>
    );
}

ReactDOM.render(
  <IntlProvider  locale="de" messages={messages['fr']}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);