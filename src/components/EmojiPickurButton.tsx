import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { div, em } from "framer-motion/client";
import { APP_BACKGROUNDS } from "../constants/colors";

function EmojiPickerButton() {
  const [emoji, setEmoji] = useState("😀");
  const [showPicker, setShowPicker] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % APP_BACKGROUNDS.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-40 h-40 mx-auto">
      {/* Main Emoji Button */}
      <button
        className="
      w-32 h-32
      rounded-full
      flex items-center justify-center
      text-6xl
      shadow-xl
      absolute
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
    "
        style={{
          backgroundColor: APP_BACKGROUNDS[bgIndex],
          transition: "background-color 3s ease-in-out",
        }}
      >
        {emoji}
      </button>

      {/* Small Plus Button */}
      <button
        className="
      absolute
      top-6
      right-4
      w-10 h-10
      rounded-full
      bg-slate-500/80
      text-white
      font-bold
      text-2xl
      flex items-center justify-center
      shadow-lg
      cursor-pointer
    "
        onClick={() => setShowPicker(true)}
      >
        {emoji === "😀" ? "+" : "✏️"}
      </button>
      {showPicker && (
        <div>
          <EmojiPicker
            className="fixed inset-0 z-50"
            onEmojiClick={(emojiData) => {
              setEmoji(emojiData.emoji);
              setShowPicker(false);
            }}
          />

          <button
            onClick={() => setShowPicker(false)}
            className="
        mt-2
        px-4 py-2
        rounded-lg
        bg-black
        text-white
        cursor-pointer
      "
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default EmojiPickerButton;
