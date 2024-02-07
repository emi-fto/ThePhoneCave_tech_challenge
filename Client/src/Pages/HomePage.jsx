import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Text, Group } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import "../Styles/HomePage.css";
import Loader from "../Components/Loader";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useViewportSize();

  const getAllPhones = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/phones`);
      if (response.ok) {
        const phonesData = await response.json();
        setPhones(phonesData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPhones();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SimpleGrid m="1.5rem" cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
          {phones.map((phone) => {
            return (
              <div key={phone.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Link to={`/phones/${phone.id}`}>
                    <div className="homeCtn">
                      <Card.Section>
                        <Image
                          src={`/src/images/${phone.imageFileName}`}
                          height="400vw"
                          width="40vw"
                          alt="Phone picture"
                        />
                      </Card.Section>

                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{phone.name}</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        {phone.manufacturer}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {phone.price}€
                      </Text>
                    </div>
                  </Link>
                </Card>
              </div>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
}
export default HomePage;
