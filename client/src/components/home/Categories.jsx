import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { category } from "../../constants/Category";
import { Link, useSearchParams } from "react-router-dom";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
`;

const Categories = () => {
  const [searchParam]= useSearchParams();
  const selectedCategory=searchParam.get('category')
  return (
    <>
      <Link to={`/create?category=${selectedCategory || ""}`}>
        <StyledButton>Create Post</StyledButton>
      </Link>
      <StyledTable>
        <TableHead>
          <TableRow>
            <Link to='/'>
              <TableCell>All Categories</TableCell>
            </Link>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((c) => (
            <TableRow key={c.id}>
              <Link to={`/?category=${c.type}`}>
                <TableCell>{c.type}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
