// import StatsGrid from "@/components/Stats/StatsGrid";
// import NetworkStatus from "@/components/NetworkStatus/NetworkStatus";
// import BlockchainActivityChart from "@/components/AllGraphs/BlockchainActivityChart";
// import BarlineChart from "@/components/AllGraphs/BarlineChart";
// import LatestBlocks from "@/components/Block/LatestBlock";
// import TransactionsTable from "@/components/Transactions/Transactions";
// import AuditDashboard from "@/components/AuditDashboard/AuditDashboard";
// import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/landing-page");
  return (
    <>
      {/* <Navbar />
      <section className="brick-overlay pt-10 px-6 mx-auto w-full">
        <StatsGrid />
        <NetworkStatus />
        <div className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-2">
          <BlockchainActivityChart />
          <BarlineChart />
        </div>

        <TransactionsTable />

        <LatestBlocks />
        <AuditDashboard />
      </section> */}
    </>
  );
}
