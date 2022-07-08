import { Route,Routes } from "react-router-dom"
import MainLayout from "./routes/layout"
import Home from "./routes/home"
import Dashboard from "./routes/dashboard"
import Accounts from "./routes/accounts"
import Expenses from "./routes/expenses"
import Reports from "./routes/reports"
import NotFound from "./routes/notFound"
import Sales from "./routes/sales"
import SalesLayout from "./routes/sales/layout"
import SalesDeposits from "./routes/sales/deposits"
import SalesSubscriptions from "./routes/sales/supscription"
import SalesCustomers from "./routes/sales/customers"
import SalesInvoices from "./routes/sales/invoices"
import SalesInvoicesLayout from "./routes/sales/invoices/layout"
import SalesInvoicesDetails from "./routes/sales/invoices/details"

export default function Navigation() {
    return(
        <div>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="accounts" element={<Accounts />} />
                    <Route path="sales" element={<SalesLayout />}>
                        <Route index element={<Sales />} />
                        <Route path="invoices" element={<SalesInvoices />}>
                            <Route index element={<SalesInvoicesLayout />} />
                            <Route path=":invoices" element={<SalesInvoicesDetails />} />
                        </Route>
                        <Route path="deposits" element={<SalesDeposits />} />
                        <Route path="subscriptions" element={<SalesSubscriptions />} />
                        <Route path="customers" element={<SalesCustomers />} />
                    </Route>
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}