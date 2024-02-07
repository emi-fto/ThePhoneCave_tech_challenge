import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Image, Text, Button, Group, Space } from "@mantine/core";
import "../Styles/DetailsPage.css";
import Loader from "../Components/Loader";

function DetailsPage() {
  const [phone, setPhone] = useState({});
  const { phoneId } = useParams();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getSinglePhone = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/phones/${phoneId}`
      );
      if (response.ok) {
        const phoneData = await response.json();
        setPhone(phoneData);
      } else {
        alert("Couldn't fetch Phone");
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePhone();
    setLoading(false);
  }, [phoneId]);

  return (
    <div className="detailsCtn">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3>Product Details</h3>
          {phone && (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="detailsCtn">
                <Card.Section>
                  <Image
                    src={`/src/images/${phone.imageFileName}`}
                    h="80vw"
                    w="40vw"
                    alt="Phone picture"
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{phone.name}</Text>
                </Group>
                <Space h="md" />
                <Text size="sm" c="dimmed">
                  {phone.manufacturer}
                </Text>
                <Space h="md" />
                <Text size="sm" c="dimmed">
                  {phone.description}
                </Text>
                <Space h="md" />
                <Text size="sm" c="dimmed">
                  Color: {phone.color}
                </Text>
                <Text size="sm" c="dimmed">
                  Screen: {phone.screen}
                </Text>
                <Text size="sm" c="dimmed">
                  Processor: {phone.processor}
                </Text>
                <Text size="sm" c="dimmed">
                  Ram: {phone.ram}
                </Text>
                <Space h="md" />
                <Text size="sm" c="dimmed">
                  {phone.price}€
                </Text>
                <Button
                  w="40vw"
                  color="blue"
                  mt="md"
                  radius="md"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

export default DetailsPage;
