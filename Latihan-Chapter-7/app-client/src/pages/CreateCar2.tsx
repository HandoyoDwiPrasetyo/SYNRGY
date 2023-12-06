import styled from "@emotion/styled";
import { TextField, Input, Checkbox, MenuItem } from "@mui/material";
import { FormEvent, useState } from "react";

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
`;
const Column = styled.div`
  width: 49%; /* Adjust the width as needed */
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export default function CreateCar2() {
  const [plate, setPlate] = useState<string>();
  const [manufacture, setManufacture] = useState<string>();
  const [model, setModel] = useState<string>();
  const [rentPerDay, setRentPerDay] = useState<number | undefined>(undefined);
  const [capacity, setCapacity] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState<string>();
  const [availableAt, setAvailableAt] = useState<Date | undefined>(undefined);
  const [transmission, setTransmission] = useState<string>();
  const [available, setAvailable] = useState<boolean | undefined>(undefined);
  const [type, setType] = useState<string>();
  const [year, setYear] = useState<number | undefined>(undefined);
  const [options, setOptions] = useState<string>();
  const [specs, setSpecs] = useState<string>();
  const [image, setImage] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ContainerStyled>
      <Form onSubmit={handleSubmit}>
        <Row>
          <h3>Create Car</h3>
        </Row>
        <Row>
          <Column>
            <TextField
              label="Plate"
              name="plate"
              id="plate"
              placeholder="Type your plate"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setPlate(e.target.value)}
            />
            <TextField
              label="Manufacture"
              name="manufacture"
              id="manufacture"
              placeholder="Type your manufacture"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setManufacture(e.target.value)}
            />
            <TextField
              label="Model"
              name="model"
              id="model"
              placeholder="Type your model"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setModel(e.target.value)}
              
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={handleImageChange}
              sx={{ width: "100%", mb: 3 }}
              focused
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", marginBottom: 16 }}
              />
            )}
            <TextField
              label="Rent Per Day"
              name="rentPerDay"
              id="rentPerDay"
              type="number"
              placeholder="Enter rent per day"
              value={rentPerDay}
              onChange={(e) => setRentPerDay(Number(e.target.value))}
              sx={{ width: "100%", mb: 3 }}
            />
            <TextField
              label="Capacity"
              name="capacity"
              id="capacity"
              type="number"
              placeholder="Enter capacity"
              value={rentPerDay}
              onChange={(e) => setCapacity(Number(e.target.value))}
              sx={{ width: "100%", mb: 3 }}
            />
            <TextField
              label="Description"
              name="description"
              id="description"
              placeholder="Type your description"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setModel(e.target.value)}
            />
            <TextField
              label="Available At"
              name="availableAt"
              id="availableAt"
              type="datetime-local"
              placeholder="Select available date and time"
              value={availableAt?.toISOString().slice(0, 16)}
              onChange={(e) => setAvailableAt(new Date(e.target.value))}
              sx={{ width: "100%", mb: 3 }}
              focused
            />
          </Column>
          <Column>
            <TextField
              label="Transmission"
              name="transmission"
              id="transmission"
              placeholder="Type your transmission"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setModel(e.target.value)}
            />
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 3 }}
            >
              <Checkbox
                id="available"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
              />
              <label htmlFor="available" style={{ marginLeft: 8 }}>
                Available
              </label>
            </div>
            <TextField
              label="Transmission"
              name="transmission"
              id="transmission"
              placeholder="Type your transmission"
              sx={{ width: "100%", mb: 3 }}
              onChange={(e) => setTransmission(e.target.value)}
            />
            {/* Add Dropdown for "Type" */}
            <TextField
              select
              label="Type"
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              sx={{ width: "100%", mb: 3 }}
            >
              <MenuItem value="automatic">Automatic</MenuItem>
              <MenuItem value="manual">Manual</MenuItem>
            </TextField>
            <TextField
              label="Year"
              name="year"
              id="year"
              type="number"
              placeholder="Enter year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              sx={{ width: "100%", mb: 3 }}
            />
            <TextField
              label="Options"
              name="options"
              id="options"
              multiline
              rows={4}
              placeholder="Enter options"
              value={options}
              onChange={(e) => setOptions(e.target.value)}
              sx={{ width: "100%", mb: 3 }}
            />
            <TextField
              label="Specs"
              name="specs"
              id="specs"
              multiline
              rows={4}
              placeholder="Enter specs"
              value={specs}
              onChange={(e) => setSpecs(e.target.value)}
              sx={{ width: "100%", mb: 3 }}
            />
          </Column>
        </Row>
      </Form>
    </ContainerStyled>
  );
}
