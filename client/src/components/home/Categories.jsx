import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled
} from "@mui/material";
import { category } from "../../constants/Category";

const StyledTable= styled(Table)`
  border: 1px solid rgba(224,224,224,1);
`
const StyledButton= styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ED;
  color: #fff;

`

const Categories = () => {
  return (
    <>
      <StyledButton>Create Post</StyledButton>
      <StyledTable>
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
      </StyledTable>
    </>
  );
};

export default Categories;
