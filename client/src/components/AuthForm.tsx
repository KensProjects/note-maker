import { FormEvent } from "react";

export default function AuthForm({
  onSubmit,
  onUsernameChange,
  onPasswordChange,
  username,
  password,
  type,
  error
}: {
  onSubmit: (e: FormEvent<Element>) => Promise<void>;
  onUsernameChange: (e: FormEvent) => void;
  onPasswordChange: (e: FormEvent) => void;
  username: string;
  password: string;
  type: string;
  error:string
}) {
  return (
    <div
      id="container"
      className="flex justify-center items-center w-full h-fit pt-12 align-middle relative"
    >
      <form
        onSubmit={onSubmit}
        autoComplete="on"
        className=" h-3/4 md:w-1/2 w-3/4 p-4 flex justify-center items-center flex-col gap-6 rounded-lg border-2 border-black bg-gray-100/50"
      >
        <h1 className="text-2xl">{type}</h1>
        <h2 className="text-red-600">{error}</h2>
        <div
          id="username-group"
          className="flex justify-center items-start flex-col w-full gap-4"
        >
          <label htmlFor="username" className="text-xl text-gray-800">
            Username:
          </label>
          <input
            type="text"
            onChange={onUsernameChange}
            value={username}
            placeholder="Username"
            className="border border-black w-full py-2 pl-2 rounded-lg"
          />
        </div>
        <div
          id="pass-group"
          className="flex justify-center items-start flex-col w-full gap-4"
        >
          <label htmlFor="password" className="text-xl text-gray-800">
            Password:
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            className="border border-black w-full py-2 pl-2 rounded-lg"
            autoComplete="on"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 duration-300 ease-in-out text-white w-3/4 sm:w-2/4 py-2 rounded-lg "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
