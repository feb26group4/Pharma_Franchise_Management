import DashboardLayout from "./DashboardLayout";

const navItems = [
    { to: "users", label: "Users" },
    { to: "reports", label: "Reports" },
    { to: "ProductCatalog", label: "Product Catalog" },
    { to: "ViewApplication", label: "View Applicants" },
    { to: "ApplicationStatus", label: "Application Status" },
    { to: "Department", label: "Department" },
];

export default function AdminDashboard() {
    return <DashboardLayout title="Admin Panel" navItems={navItems} />;
}