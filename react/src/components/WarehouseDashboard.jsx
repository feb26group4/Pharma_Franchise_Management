import DashboardLayout from "./DashboardLayout";

const navItems = [
    { to: "inventory", label: "Current Inventory" },
    { to: "orders", label: "View Orders" },
    { to: "role3", label: "Raise Request" },
    { to: "role4", label: "Dispatch" },
    { to: "role5", label: "role5" },
    { to: "role6", label: "role6" },
];

export default function WarehouseDashboard() {
    return <DashboardLayout title="Warehouse Panel" navItems={navItems} />;
}