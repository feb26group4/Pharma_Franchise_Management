-- =========================================================
-- Seed Data: Role, Users, Franchise
-- Pharmaceutical Franchise Management System
-- MySQL 8.0+
-- =========================================================

USE project_db;

-- ---------------------------------------------------------
-- Role
-- ---------------------------------------------------------
INSERT INTO Role (role_name) VALUES
('admin'),
('warehouse'),
('franchise'),
('account');
-- role_id: 1=admin, 2=warehouse, 3=franchise, 4=account

-- ---------------------------------------------------------
-- Users
-- (password values below are placeholder bcrypt-style hashes —
--  replace with real hashed output from your app before going live)
-- ---------------------------------------------------------
INSERT INTO Users (uname, password, fname, lname, role_id, email, contact) VALUES
('admin_riya',   '$2b$12$rB7YkX0nQZ8mF1yP3jL9EeQd6sA1cVvW2xN4tK9pR7uH0gJ5sD3Ci', 'Riya',    'Sharma',   1, 'riya.sharma@pharmacorp.com',   '9876543210'),
('wh_suresh',    '$2b$12$mN4pQ7rT1vX9yL3jH6sK0DeA8wF2cZ5nB7xM1pQ4rL8tY6uJ9hK3Fg', 'Suresh',  'Iyer',     2, 'suresh.iyer@medisupply.com',   '9845123467'),
('fran_akash',   '$2b$12$hT2mR9pL6qX1yV4nB8sK0OeF3jD5wA7cN9zM2xP6rQ8tY1uH4gJ0Wi', 'Akash',   'Mehta',    3, 'akash.mehta@medilife.com',     '9823456712'),
('fran_neha',    '$2b$12$xQ8vN3mK7pL1rT4jH9sD6BeC2wF5aZ0yX8nM3pQ7rL9tY2uJ5hK1Vd', 'Neha',    'Kulkarni', 3, 'neha.kulkarni@wellcare.com',   '9812345678'),
('acc_kavita',   '$2b$12$zL9nP4mQ2rT8vX1yH5sK6EeB3wD7cA0nF9xM2pQ5rL1tY7uJ4hK8Sd', 'Kavita',  'Reddy',    4, 'kavita.reddy@pharmacorp.com',  '9834567891');
-- uid: 1=admin_riya, 2=wh_suresh, 3=fran_akash, 4=fran_neha, 5=acc_kavita

-- ---------------------------------------------------------
-- Franchise
-- (linked to the two 'franchise' role users above: uid 3 and uid 4)
-- ---------------------------------------------------------
INSERT INTO Franchise (uid, fname, address, regno, status) VALUES
(3, 'MediLife Pharmacy - Andheri',   '12 SV Road, Andheri West, Mumbai, Maharashtra 400058',        100234567891, TRUE),
(3, 'MediLife Pharmacy - Borivali',  '45 Link Road, Borivali West, Mumbai, Maharashtra 400092',      100234567892, TRUE),
(4, 'WellCare Franchise - Pune',     '78 FC Road, Shivajinagar, Pune, Maharashtra 411005',           100234567893, TRUE),
(4, 'WellCare Franchise - Kothrud',  '23 Karve Road, Kothrud, Pune, Maharashtra 411038',              100234567894, FALSE);
-- fid: 1,2 -> Akash's franchises; 3,4 -> Neha's franchises (fid 4 marked inactive/status=FALSE for testing)
