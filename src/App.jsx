import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
      <Route path="sent" element={<SentInvoices />} />
    </Route> */}
      </Routes>
    </Layout>
  );    
}

export default App;
