import DashboardLayout from "./DashboardLayout";

const navItems = [
    { to: "search", label: "Search" },
    { to: "booking", label: "Booking" },
];

export default function UserDashboard() {
    return <DashboardLayout title="User Panel" navItems={navItems} />;
}