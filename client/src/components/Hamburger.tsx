export default function Hamburger({ onClick }: { onClick: () => void }) {
  return (
    <div className="space-y-2 cursor-pointer flex flex-col sm:hidden top-0 absolute right-0 h-8 justify-center m-4" onClick={onClick}>
      <div className="w-8 h-0.5 bg-gray-600"></div>
      <div className="w-8 h-0.5 bg-gray-600"></div>
      <div className="w-8 h-0.5 bg-gray-600"></div>
    </div>
  );
}
