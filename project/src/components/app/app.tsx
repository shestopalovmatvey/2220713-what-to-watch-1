import WelcomePage from '../../pages/welcome-page/welcomePage';
import { WelcomePageProps } from '../../pages/welcome-page/welcomePage';

function App(props: WelcomePageProps): JSX.Element {
  return <WelcomePage {...props}/>;
}

export default App;
