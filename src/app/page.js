import ExchangeRates from "./components/ExchangeRate";
import { ExchangeProvider } from "./context/ExchangeContext";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ExchangeProvider>
        <ExchangeRates/>
      </ExchangeProvider>
    </div>
  );
}
