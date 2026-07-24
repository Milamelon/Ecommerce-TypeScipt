import emailjs from "@emailjs/browser";
import { CarItem } from "@/types/car.types";

interface EmailData {
    items: CarItem[];
    totalPrice: number;
    customerName: string;
    customerEmail: string;
}

export async function sendEmail({ items, totalPrice, customerName, customerEmail }: EmailData) {
    const orderDetails = items
    .map((item) => `${item.title} x${item.carQuantity} - $${(item.price * item.carQuantity).toFixed(2)}`
    )
    .join("\n");
    await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
        to_name: customerName,
        to_email: customerEmail,
        order_details: orderDetails,
        total_price: totalPrice.toFixed(2),
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
}