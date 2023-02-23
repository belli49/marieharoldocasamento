import logo from './logo.jpg';
import './App.css';
import divisor from './divisor.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={divisor} className="Divisor" />
        <p className="Japanese-text">
            本日はお忙しいところお越しいただき誠にありがとうございました。
        </p>
        <p className="Japanese-text">
            私たちにとって特別なこの日は皆さんのおかげです。
        </p>
        <p className="Japanese-text">
            素晴らしく忘れられない一日になりました。
        </p>
        <p className="Japanese-text">
            これからも私たちをどうぞ宜しくお願い致します。
        </p>
        <p/>
        <p className="Portuguese-text">
            AGRADECEMOS POR VIVER ESSE MOMENTO COM A GENTE.
        </p>
        <p className="Portuguese-text">
            NOSSO DIA NÃO SERIA TÃO ESPECIAL SEM VOCÊS.
        </p>
        <p/>
        <img src={divisor} className="Divisor" />
        <p className="Portuguese-text">
            MARI & HAROLDO
        </p>
      </header>
    </div>
  );
}

export default App;
