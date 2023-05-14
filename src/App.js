import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Inbox } from "./Pages/Inbox";
import { Spam } from "./Pages/Spam";
import { Trash } from "./Pages/Trash";
import { EmailDetailsCard } from "./Components/EmailDetailsCard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/:emailId" element={<EmailDetailsCard />} />
      </Routes>
    </div>
  );
}
