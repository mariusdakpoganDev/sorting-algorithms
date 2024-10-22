import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGrid, GridColDef    } from '@mui/x-data-grid';
import bookRows from "./bookDatabase";
import { Button } from '@mui/material';
export default function Home() {

 const updatedBookRows = bookRows.map((book)=>{ return{
    ...book, // Keep the existing Book properties
    dateAdded :new Date(book.dateAdded), //Format date to use in mui data-Grid
    nextDelivery: book.nextDelivery != null? new Date(book.nextDelivery):null  //Format next delivery if needed
  } })

  const columns: GridColDef[] = [
  { field: 'name', headerName: 'Book Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'price', headerName: 'Price', type: 'number', width: 130 },
  { field: 'libraryRating', headerName: 'Library Rating', type: 'number', width: 150 },
  { field: 'readersRating', headerName: 'Readers Rating', type: 'number', width: 150 },
  { field: 'stock', headerName: 'Stock', type: 'number', width: 100 },
  { field: 'dateAdded',
     headerName: 'Date Added',
      type: 'date',
       width: 150,
  },
  { field: 'nextDelivery', headerName: 'Next Delivery', type: 'date', width: 150 },
];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <div>
        <ButtonGroup>
          <Button>Quick sort</Button>
        </ButtonGroup>
         </div>
       <div  style={{ height: '60%', width: '100%' }}>
        <DataGrid rows={updatedBookRows} columns={columns}  />
       </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
