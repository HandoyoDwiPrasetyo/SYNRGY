import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFileItem } from "../../../services/types";
import { IBooks } from "../books.types";

interface RouteParams {
  id: string;
}

export default function useUpdate() {
  const navigate = useNavigate();
  const { id } = useParams<RouteParams>();
  const [formValues, setFormValues] = useState<IBooks | undefined>({});
  const [loadingCover, setLoadingCover] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [fileItem, setFileItem] = useState<IFileItem | undefined>();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get<IBooks>(
          `http://localhost:8000/api/books/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setFormValues(response.data);
      } catch (error) {
        console.log("error > ", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      setLoadingSubmit(true);
      const payload = { ...formValues, cover: fileItem };
      await axios.put(
        "http://localhost:8000/api/books/${formValues?.id}",
        payload,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(-1);
    } catch (error) {
      console.log("error > ", error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleUploadCover = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        setLoadingCover(true);
        const formData = new FormData();
        formData.append("cover", files[0]);

        const response = await axios.post(
          "http://localhost:8000/api/books/upload",
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setFileItem(response.data.data);
      } catch (error) {
        console.log("error > ", error);
      } finally {
        setLoadingCover(false);
      }
    }
  };

  return {
    handleSubmit,
    handleUploadCover,
    setFormValues,
    formValues,
    loadingCover,
    loadingSubmit,
    fileItem,
  };
}
