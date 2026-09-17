export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { reference } = req.body;

  if (!reference) {
    return res.status(400).json({ message: "Reference is required" });
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.status && data.data?.status === "success") {
      return res.status(200).json({
        verified: true,
        data: data.data,
      });
    }

    return res.status(400).json({
      verified: false,
      message: data.message || "Payment not successful",
    });
  } catch (error) {
    console.error("Paystack verification error:", error);
    return res.status(500).json({ message: "Verification failed" });
  }
}