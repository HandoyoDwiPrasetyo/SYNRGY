import { Box, TextField, Switch, Stack, Checkbox } from "@mui/material";
import CommonPage from "../../../components/common-page/common-page";
import { CloudUpload } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import useAction from "./create.hooks";
import { VisuallyHiddenInput } from "./create.styled";

export default function Create() {
  const {
    formValues,
    handleSubmit,
    handleUploadCover,
    loadingCover,
    loadingSubmit,
    setFormValues,
    fileItem,
  } = useAction();
  return (
    <CommonPage
      withBack
      component={"form"}
      title="Create new Car"
      actionElement={
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loadingSubmit}
        >
          Submit
        </LoadingButton>
      }
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          width: "50%",
        }}
      >
        <TextField
          name="plate"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Plate"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              plate: e.target.value,
            })
          }
          variant="filled"
          value={formValues?.plate}
        />
        <TextField
          name="manufacture"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Manufacture"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              manufacture: e.target.value,
            })
          }
          variant="filled"
        />
        <TextField
          name="model"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Model"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              model: e.target.value,
            })
          }
          variant="filled"
        />
        <TextField
          name="rentPerDay"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Rental per hari"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              rentPerDay: e.target.value,
            })
          }
          variant="filled"
        />
        <TextField
          name="capacity"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Capacity"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              capacity: e.target.value,
            })
          }
          variant="filled"
        />
        <TextField
          name="description"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Description"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              description: e.target.value,
            })
          }
          variant="filled"
        />
        <TextField
          name="availableAt"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Available At"
          type="date"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              availableAt: Number(e.target.value),
            })
          }
          variant="filled"
        />
        <TextField
          name="transmission"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Transmission"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              transmission: e.target.value,
            })
          }
          variant="filled"
        />
        <Checkbox {...label} />
        <TextField
          name="copies_available"
          size="small"
          sx={{ width: "100%", mb: 3 }}
          label="Copies Available"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              copies_available: Number(e.target.value),
            })
          }
          variant="filled"
        />
        <LoadingButton
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
          loading={loadingCover}
        >
          Upload Book Cover
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleUploadCover}
          />
        </LoadingButton>
        {fileItem && fileItem.url && (
          <Box>
            <img
              src={fileItem.secure_url}
              alt="preview"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
        )}
        <Box>
          <Stack direction={"row"} alignItems={"center"}>
            <div>Publish</div>
            <Switch
              name="published"
              title="Published"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  published: e.target.checked,
                })
              }
            />
          </Stack>
        </Box>
      </Box>
    </CommonPage>
  );
}
