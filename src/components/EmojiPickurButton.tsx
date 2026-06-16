import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { div, em } from "framer-motion/client";

function EmojiPickerButton() {
  const [emoji, setEmoji] = useState("😀");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative w-40 h-40 mx-auto">
      {/* Main Emoji Button */}
      <button
        className="
      w-32 h-32
      rounded-full
      bg-gradient-to-br from-fuchsia-500 to-purple-600
      flex items-center justify-center
      text-6xl
      shadow-xl
      absolute
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
    "
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
        bg-red-500
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
