import DashboardLayout from "./DashboardLayout";

const navItems = [
    { to: "manage", label: "Manage profile" },
    { to: "placeorder", label: "Place stock order" },
    { to: "role3", label: "Track order" },
    { to: "role4", label: "View invoices/payments" },
    { to: "role5", label: "role5" },
    { to: "role6", label: "role6" },
];

export default function FranchiseDashboard() {
    return <DashboardLayout title="Franchise Panel" navItems={navItems} />;
}