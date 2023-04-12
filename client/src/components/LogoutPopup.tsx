export default function LogoutPopup({
  acceptClick,
  declineClick,
  error
}: {
  acceptClick: () => void;
  declineClick: () => void;
  error:string | null
}) {
  return (
    <div
      id="logout-container"
      className="flex justify-center items-center flex-col bg-white rounded-xl gap-4 px-20 py-10"
    >
      <p className="text-red-600 text-xl">{error}</p>
      <p className="text-lg">Do you wish to logout?</p>
      <div
        id="logout-button-group"
        className="flex justify-center items-center gap-4 "
      >
        <button
          type="button"
          className="bg-green-200 px-10 py-2"
          onClick={acceptClick}
        >
          Yes
        </button>
        <button
          type="button"
          className="bg-red-200 px-10 py-2"
          onClick={declineClick}
        >
          No
        </button>
      </div>
    </div>
  );
}
