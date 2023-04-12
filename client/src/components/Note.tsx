export default function Note({
  label,
  note,
  createdAt,
  onDelete,
}: {
  label: string;
  note: string;
  createdAt:string
  onDelete: () => void;
}) {
  return (
    <div className="border border-black text-center flex justify-center items-center flex-col rounded-xl w-fit overflow-hidden  break-words">
      <div>{createdAt}</div>
      <div className="w-full">
        {label}
      </div>
      <div className="w-full">{note}</div>
      <button type="submit" className="w-full py-2 bg-red-400" onClick={onDelete}>
        X
      </button>
    </div>
  );
}
