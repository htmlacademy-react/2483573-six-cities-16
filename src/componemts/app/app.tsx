import Main from '../../pages/main/main'
import { OFFERS } from '../../mocks/offers';

function App(): JSX.Element {
  return (
    <Main
      offers={OFFERS}
    />
  );
}

export default App;