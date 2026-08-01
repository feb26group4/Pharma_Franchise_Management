import DashboardLayout from "./DashboardLayout";

const navItems = [
    { to: "viewapp", label: "View Application" },
    { to: "track", label: "Track Application" },
    { to: "role3", label: "Raise quotation" },
    { to: "role4", label: "role4" },
    { to: "role5", label: "role5" },
    { to: "role6", label: "role6" },
];

export default function AccountDashboard() {
    return <DashboardLayout title="Account Panel" navItems={navItems} />;
}