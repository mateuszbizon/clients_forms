import axios from "axios";

export const tropicalParadiseForm = async (req, res) => {
    const { name, email, message } = req.body;

  try {
    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Message: message
          }
        }
      ]
    };

    const response = await axios.post(
      `https://api.airtable.com/v0/app1nv09g9qy7jOgP/contacts`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.TROPICAL_PARADISE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Błąd podczas wysyłania danych do Airtable:', error);
    res.status(500).json({ success: false, error: 'Błąd podczas wysyłania danych do Airtable' });
  }
}