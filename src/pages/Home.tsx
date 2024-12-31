import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="w-full space-y-4 p-4">
      <Navbar />
      <Header />
      <Table />
    </div>
  );
}
