import { Icons } from "@/components/icons";

import {
  NavItem,
  SidebarNavItem,
  User,
  Computers,
  Cafe,
  Report,
} from "@/types";

export const users: User[] = [
  {
    username: "user1",
    first_name: "John",
    last_name: "Doe",
    email: "user1@example.com",
    phone: "+1-800-555-1234",
    address: "123 Main St, Anytown, USA",
    dob: "1980-01-01",
  },
  {
    username: "user2",
    first_name: "Jane",
    last_name: "Smith",
    email: "user2@example.com",
    phone: "+1-123-335-2345",
    address: "456 Elm St, Othertown, USA",
    dob: "1985-09-23",
  },
  {
    username: "user3",
    first_name: "Alice",
    last_name: "Johnson",
    email: "user3@example.com",
    phone: "+1-899-756-4123",
    address: "789 Oak St, Anothertown, USA",
    dob: "1992-11-11",
  },
];

export const computers: Computers[] = [
  {
    computer_id: 1,
    Model_No: "1",
    is_occupied: "true",
    os: "Windows",
    status: "Working",
  },
  {
    computer_id: 2,
    Model_No: "2",
    is_occupied: "true",
    os: "Linux",

    status: "Working",
  },
  {
    computer_id: 3,
    Model_No: "3",
    is_occupied: "true",
    os: "MacOSX",

    status: "Working",
  },
  {
    computer_id: 4,
    Model_No: "34",
    is_occupied: "true",
    os: "Windows",
    status: "Working",
  },
];

export const cafe: Cafe[] = [
  {
    id: 1,
    name: "Cafe A",
    image: "cafe_a.jpg",
    address: "123 Main Street",
    map_url: "https://maps.google.com/cafe_a",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+1234567890",
    cgst: 5,
    sgst: 5,
    gst_number: "GST123456789",
    license: "ABC123",
    price: 10,
  },
  {
    id: 2,
    name: "Cafe B",
    image: "cafe_b.jpg",
    address: "456 Elm Street",
    map_url: "https://maps.google.com/cafe_b",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+1987654321",
    cgst: 6,
    sgst: 6,
    gst_number: "GST987654321",
    license: "DEF456",
    price: 12,
  },
  {
    id: 3,
    name: "Cafe C",
    image: "cafe_c.jpg",
    address: "789 Oak Street",
    map_url: "https://maps.google.com/cafe_c",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+1122334455",
    cgst: 7,
    sgst: 7,
    gst_number: "GST1122334455",
    license: "GHI789",
    price: 15,
  },
  {
    id: 4,
    name: "Cafe D",
    image: "cafe_d.jpg",
    address: "321 Pine Street",
    map_url: "https://maps.google.com/cafe_d",
    opens_at: "08:30 AM",
    closes_at: "10:30 PM",
    phone: "+9988776655",
    cgst: 8,
    sgst: 8,
    gst_number: "GST9988776655",
    license: "JKL012",
    price: 18,
  },
  {
    id: 5,
    name: "Cafe E",
    image: "cafe_e.jpg",
    address: "567 Maple Street",
    map_url: "https://maps.google.com/cafe_e",
    opens_at: "07:00 AM",
    closes_at: "09:00 PM",
    phone: "+5544332211",
    cgst: 9,
    sgst: 9,
    gst_number: "GST5544332211",
    license: "MNO345",
    price: 20,
  },
  {
    id: 6,
    name: "Cafe F",
    image: "cafe_f.jpg",
    address: "987 Cedar Street",
    map_url: "https://maps.google.com/cafe_f",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+6677889900",
    cgst: 10,
    sgst: 10,
    gst_number: "GST6677889900",
    license: "PQR678",
    price: 22,
  },
  {
    id: 7,
    name: "Cafe G",
    image: "cafe_g.jpg",
    address: "654 Walnut Street",
    map_url: "https://maps.google.com/cafe_g",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+1122334455",
    cgst: 11,
    sgst: 11,
    gst_number: "GST1122334455",
    license: "STU901",
    price: 25,
  },
  {
    id: 8,
    name: "Cafe H",
    image: "cafe_h.jpg",
    address: "234 Oak Street",
    map_url: "https://maps.google.com/cafe_h",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+9988776655",
    cgst: 12,
    sgst: 12,
    gst_number: "GST9988776655",
    license: "VWX234",
    price: 28,
  },
  {
    id: 9,
    name: "Cafe I",
    image: "cafe_i.jpg",
    address: "345 Pine Street",
    map_url: "https://maps.google.com/cafe_i",
    opens_at: "08:30 AM",
    closes_at: "10:30 PM",
    phone: "+5544332211",
    cgst: 13,
    sgst: 13,
    gst_number: "GST5544332211",
    license: "YZA567",
    price: 30,
  },
  {
    id: 10,
    name: "Cafe J",
    image: "cafe_j.jpg",
    address: "876 Elm Street",
    map_url: "https://maps.google.com/cafe_j",
    opens_at: "07:00 AM",
    closes_at: "09:00 PM",
    phone: "+6677889900",
    cgst: 14,
    sgst: 14,
    gst_number: "GST6677889900",
    license: "BCD345",
    price: 35,
  },
  {
    id: 11,
    name: "Cafe K",
    image: "cafe_k.jpg",
    address: "567 Walnut Street",
    map_url: "https://maps.google.com/cafe_k",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+1122334455",
    cgst: 15,
    sgst: 15,
    gst_number: "GST1122334455",
    license: "EFG678",
    price: 40,
  },
  {
    id: 12,
    name: "Cafe L",
    image: "cafe_l.jpg",
    address: "234 Maple Street",
    map_url: "https://maps.google.com/cafe_l",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+9988776655",
    cgst: 16,
    sgst: 16,
    gst_number: "GST9988776655",
    license: "HIJ901",
    price: 45,
  },
  {
    id: 13,
    name: "Cafe M",
    image: "cafe_m.jpg",
    address: "123 Cedar Street",
    map_url: "https://maps.google.com/cafe_m",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+1122334455",
    cgst: 17,
    sgst: 17,
    gst_number: "GST1122334455",
    license: "KLM012",
    price: 50,
  },
];

// export const Reports: Report[] = [
//   // {
//   //   id: 1,
//   //   userId: 1234,
//   //   title: "Lorem Ipsum",
//   //   description: "Lorem Ipsum",
//   //   date_of_submit: "1984-02-14",
//   //   status: "Pending",
//   // },
//   {

//   }
//   {
//     id: 2,
//     userId: 1235,
//     title: "Lorem Ipsum",
//     description: "Lorem Ipsum",
//     date_of_submit: "1984-02-13",
//     status: "Submitted",
//   },
//   {
//     id: 3,
//     userId: 1236,
//     title: "Lorem Ipsum",
//     description: "Lorem Ipsum",
//     date_of_submit: "1984-02-12",
//     status: "Working",
//   },
// ];

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Computers",
    href: "/dashboard/computers",
    icon: "laptop",
    label: "computer",
  },
  // {
  //   title: "Profile",
  //   href: "/dashboard/profile",
  //   icon: "profile",
  //   label: "profile",
  // },
  {
    title: "Report",
    href: "/dashboard/reports",
    icon: "help",
    label: "report",
  },
  // {
  //   title: "Logout",
  //   href: "/",
  //   icon: "logo",
  //   label: "logout",
  // },
];

export const ReportList = [
  // "PENDING",
  // "SOLVED",
  // "WORKING"
  { id: 1, status: "PENDING" },
  { id: 2, status: "SOLVED" },
  { id: 3, status: "WORKING" },
];

export const ComputerWorkingStatus = [
  { id: 1, status: "WORKING" },
  { id: 2, status: "OUT OF ORDER" },
];

export const OSList = [
  { id: 1, OS: "Windows" },
  { id: 2, OS: "Linux" },
  { id: 3, OS: "MACOSx" },
];

export const CafeList: Cafe[] = [
  {
    id: 1,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 2,
    name: "Cafe 2",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 3,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 4,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 5,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 6,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 7,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
  {
    id: 8,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    phone: "1234567890",
    cgst: 12,
    sgst: 12,
    price: 10,
    image: "dfjsdlfj",
    map_url: "sljglsdjkf",
    opens_at: "2023-16-15",
    closes_at: "2023-16-15",
  },
];
