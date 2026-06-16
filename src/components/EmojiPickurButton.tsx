
function EmojiPickerButton() {
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
    😀
  </button>

  {/* Small Plus Button */}
  <button
    className="
      absolute
      top-6
      right-4
      w-10 h-10
      rounded-full
      bg-white
      text-purple-600
      font-bold
      text-2xl
      flex items-center justify-center
      shadow-lg
    "
  >
    +
  </button>
</div>
  );
}

export default EmojiPickerButton;