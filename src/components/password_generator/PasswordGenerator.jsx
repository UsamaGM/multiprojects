import { useCallback, useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";

function PasswordGenerator() {
  const [password, setPassword] = useState("Password");
  const [length, setLength] = useState(8);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  const passwordRef = useRef(null);

  const range = document.createRange();
  const selection = window.getSelection();

  const generatePassword = useCallback(() => {
    let pass = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (hasUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasSymbols) characters += "!@#$%^&*()_+";
    if (hasNumbers) characters += "0123456789";

    for (let i = 0; i < length; i++) {
      pass += characters.charAt(
        Math.floor(Math.random() * characters.length + 1)
      );
    }

    setPassword(pass);
  }, [length, hasUpper, hasSymbols, hasNumbers]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, hasNumbers, hasSymbols, hasUpper, length]);

  function copyPassword() {
    window.navigator.clipboard.writeText(password);

    if (passwordRef.current) {
      range.selectNodeContents(passwordRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  return (
    <div className="w-full h-screen bg-gray-400 flex items-center justify-center">
      <div className="flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap min-w-64 flex-col justify-center gap-5 px-4 py-2 rounded-2xl bg-gray-800">
          <label
            className="text-2xl px-3 py-2 text-white text-center"
            id="password"
            ref={passwordRef}
          >
            {password}
          </label>
          <button
            onClick={copyPassword}
            className="rounded-full px-3 py-2 bg-gray-500 text-white"
          >
            Copy
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            <label className="text-gray-400" htmlFor="length">
              Length: {length > 9 ? length : `0${length}`}
            </label>
            <input
              className="accent-gray-400"
              type="range"
              min="8"
              max="20"
              value={length}
              id="length"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-around gap-3">
            <CheckBox
              title="Uppercase"
              value={hasUpper}
              onChange={() => setHasUpper((prev) => !prev)}
            />
            <CheckBox
              title="Numbers"
              value={hasNumbers}
              onChange={() => setHasNumbers((prev) => !prev)}
            />
            <CheckBox
              title="Symbols"
              value={hasSymbols}
              onChange={() => setHasSymbols((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
