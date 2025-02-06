import emailjs from "@emailjs/browser"

interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
  service: string;
  budget: string;
}

export const sendEmail = async (formData: FormData) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.number,
      message: formData.message,
      service: formData.service,
      budget: formData.budget,
      to_name: "Code & Motion Team",
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200) {
      return { type: "success", text: "Message sent successfully!" };
    } else {
      return { type: "error", text: "Failed to send message. Please try again!" };
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { type: "error", text: "Something went wrong. Please try again later." };
  }
};
