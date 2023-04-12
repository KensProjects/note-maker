export default function ToggleButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        className="rounded-lg hover:bg-purple-400 duration-300 ease-in-out bg-purple-500 px-8 py-4 text-white"
        onClick={onClick}
      >
        <div>{text}</div>
      </button>
    </div>
  );
}
