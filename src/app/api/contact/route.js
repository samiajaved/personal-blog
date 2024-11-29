// Example contact API route in Next.js 13 using the app directory

export async function POST(request) {
    try {
      const formData = await request.json();
      const { name, email, message } = formData;
  
      // Basic validation
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: "All fields are required." }),
          { status: 400 }
        );
      }
  
      // Simulate processing the form (e.g., sending an email or saving to a database)
      console.log("Message received:", { name, email, message });
  
      // Respond with success
      return new Response(
        JSON.stringify({ message: "Message sent successfully!" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error processing the contact form:", error);
      return new Response(
        JSON.stringify({ error: "Error sending message. Please try again later." }),
        { status: 500 }
      );
    }
  }
  