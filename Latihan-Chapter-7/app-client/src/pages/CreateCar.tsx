import styled from "@emotion/styled";
import { TextField, Input, Checkbox, MenuItem } from "@mui/material";
import { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CreateCar() {
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
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}
