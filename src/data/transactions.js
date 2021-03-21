
import moment from "moment-timezone";

export default [
    {
        "invoiceNumber": 300500,
        "status": "Бүртгэсэн",
        "subscription": "235234G2S23",
        "price": "79,000",
        "issueDate": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300499,
        "status": "Бүртгэсэн",
        "subscription": "2352453bs3435",
        "price": "79,000",
        "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300498,
        "status": "Бүртгэсэн",
        "subscription": "b34634y34h535h3",
        "price": "79,000",
        "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300497,
        "status": "Бүртгэсэн",
        "subscription": "gag24252y4246245",
        "price": "23,420",
        "issueDate": moment().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300496,
        "status": "Дууссан",
        "subscription": "245346dfgsdr3453",
        "price": "53,420",
        "issueDate": moment().subtract(1, "day").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "day").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300495,
        "status": "Дууссан",
        "subscription": "235gset245242",
        "price": "53,420",
        "issueDate": moment().subtract(3, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300494,
        "status": "Дууссан",
        "subscription": "2342y2gg3425",
        "price": "23,420",
        "issueDate": moment().subtract(4, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(4, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300493,
        "status": "Цуцалсан",
        "subscription": "23246245234gf",
        "price": "53,420",
        "issueDate": moment().subtract(20, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": moment().subtract(20, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300492,
        "status": "Цуцалсан",
        "subscription": "234254345dfgw453",
        "price": "79,000",
        "issueDate": moment().subtract(2, "months").format("DD MMM YYYY"),
        "dueDate": moment().subtract(3, "months").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300491,
        "status": "Бүртгэсэн",
        "subscription": "23424gafg45345",
        "price": "79,000",
        "issueDate": moment().subtract(6, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(6, "days").add(1, "month").format("DD MMM YYYY")
    }
]