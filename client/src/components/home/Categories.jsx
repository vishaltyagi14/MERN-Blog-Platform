import React from 'react'
import { Button,Table , TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Categories = () => {
  return (
    <>
    <Button>
        Create Post
        
    </Button>
    <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Music
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </>
  )
}

export default Categories