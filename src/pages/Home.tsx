import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="space-y-8 px-8 py-4">
      <Navbar />
      <Header />
      <Table route="/data" />
    </div>
  );
}
