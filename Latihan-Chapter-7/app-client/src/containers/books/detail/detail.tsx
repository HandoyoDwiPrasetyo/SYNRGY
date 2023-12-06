import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useDetail from "./detail.hooks";
import { Link, useParams } from "react-router-dom";
import CommonPage from "../../../components/common-page/common-page";
import { format, parseISO } from "date-fns";

export default function Detail() {
  const { id } = useParams();
  const { loading, book } = useDetail(id);

  const renderLoading = () => (
    <TableRow>
      <TableCell colSpan={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 0",
          }}
        >
          <CircularProgress />
        </div>
      </TableCell>
    </TableRow>
  );

  const renderContent = () => (
    <TableRow>
      <TableCell component="th">
        <Box sx={{ mb: 1 }}>{book?.title}</Box>
        <Box>
          <strong>Author:</strong> {book?.author}
        </Box>
      </TableCell>

      <TableCell>{book?.genre}</TableCell>
      <TableCell>{book?.published_year}</TableCell>
      <TableCell align="right">{book?.total_copies}</TableCell>
      <TableCell>
        {format(parseISO(`${book?.created_at}`), "dd/MM/yyyy HH:mm:ss")}
      </TableCell>
      <TableCell>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Link to={`/update/${id}`}>
            <Button type="button" variant="outlined">
              Edit
            </Button>
          </Link>
        </Stack>
      </TableCell>
    </TableRow>
  );

  return (
    <CommonPage title="Book Details">
      {loading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>{renderLoading()}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Genre</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Published Year
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Available
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Created At</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderContent()}</TableBody>
          </Table>
        </TableContainer>
      )}
    </CommonPage>
  );
}
