import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const notify = () => toast("Room Id generated");
// const copy = () => toast('RoomId copied');
import roomback from "../assets/roomback.jpg"
import { BackgroundLines } from "./Bg";
export default function NewRoom() {
  const [roomid, setroomid] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    navigate(`/room/${roomid}`, {
      state: {
        username,
      },
    });
  }

  function handlenewrom() {
    const newRoomId = uuidv4();
    setroomid(newRoomId);
    document.getElementById("roomInput").value = newRoomId;
    notify();
  }
  console.log(roomid);

  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        {/* // style={{ backgroundImage: `url(${roomback})`, backgroundSize: 'cover', backgroundPosition: 'center' }} */}
        <div className="flex flex-col justify-end items-center h-[80vh] w-full">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 relative z-20 font-bold tracking-tight">
            LiveCodeSpace
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Real-time Synchronized Code Playground with Integrated Chat, Whiteboard and Multi-language Code Execution.
          </p>
        </div>
        <div className="z-50  flex justify-center items-center h-screen " >
          <div className="m-2 p-2 flex flex-col items-center">
            <form className="p-2" onSubmit={submit}>
              <h1 className="text-white text-2xl m-2 font-bold">ROOM</h1>
              <input
                placeholder="enter id"
                className="outline-none w-full m-2 px-6 py-4 shadow-[-7px_9px_0px_0px_rgba(255,93,7,1)] hover:shadow-[-7px_-9px_0px_0px_rgba(255,93,7,1)] focus:shadow-[-7px_-9px_0px_0px_rgba(255,93,7,1)] transition"
                value={roomid}
                onChange={(e) => setroomid(e.target.value)}
                id="roomInput"
                required
              ></input>
              <input
                placeholder="enter username"
                className="outline-none w-full m-2 my-4 px-6 py-4 shadow-[-7px_9px_0px_0px_rgba(255,93,7,1)] hover:shadow-[-7px_-9px_0px_0px_rgba(255,93,7,1)] focus:shadow-[-7px_-9px_0px_0px_rgba(255,93,7,1)] transition"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              ></input>
              <button className="bg-[#ff5d07] px-6 py-4 -md text-white text-xl">
                JOIN
              </button>
            </form>
            <p className="text-white font-bold">
              Dont have room id?{" "}
              <button onClick={handlenewrom} className="text-[#ff5d07] font-bold text-md">
                New room
              </button>{" "}
              <Toaster />
            </p>
          </div>
        </div>
      </BackgroundLines >
    </ >
  );
}
