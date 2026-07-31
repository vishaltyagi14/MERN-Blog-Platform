import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { category } from "../../constants/Category";

const Categories = () => {
  return (
    <>
      <Button>Create Post</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
