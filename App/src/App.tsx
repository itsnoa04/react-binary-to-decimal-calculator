import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputSection from "./components/InputSection";
import binaryToDecimal from "./lib/binaryToDecimal";
import { updateValue } from "./slice/inputSlice";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const input_state = useSelector((state: any) => state.input);
  const dispatch = useDispatch();
  const [mobileResultRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="p-10 flex flex-col min-h-full">
      <h1 id="logo" className="text-text text-md md:text-2xl">
        {"BIN-->DEC"}
      </h1>

      <div className="absolute md:static md:flex md:w-auto md:p-20 md:flex-auto  left-0 top-1/4">
        <InputSection
          value={input_state.value}
          onChange={(value) => dispatch(updateValue(value))}
          label="ENTER BINARY"
        />
        <div
          ref={mobileResultRef}
          className={`md:hidden bg-accent px-10 py-5 text-prime flex flex-col ${
            input_state.value === "" ? "hidden" : ""
          }`}
        >
          DECIMAL RESULT
          <span className="h-5" />
          {binaryToDecimal(input_state.value)}
        </div>

        <InputSection
          className="hidden md:block"
          label="DECIMAL RESULT"
          value={binaryToDecimal(input_state.value)}
        />
      </div>
    </div>
  );
};

export default App;
