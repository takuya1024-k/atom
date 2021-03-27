import { PrimaryButton } from "./components/atoms/boutton/PrimaryButton";
import { SecondaryButton } from "./components/atoms/boutton/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
