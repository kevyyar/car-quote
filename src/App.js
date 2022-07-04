import { Insurance } from "./components/Insurance";
import { CarQuoteProvider } from "./context/CarQuoteProvider";

function App() {
  return (
    <div>
      <CarQuoteProvider value={}>
        <Insurance />
      </CarQuoteProvider>
    </div>
  );
}

export default App;
