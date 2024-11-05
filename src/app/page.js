import Image from "next/image";
import List from "@/components/List";
import ToDoApp from "@/components/ToDoApp";

function Home() {
  return (
    <>
      <ToDoApp />
      <div className="pr-32 pl-32">
        <List />
      </div>
    </>
  );
}
export default ToDoApp;
