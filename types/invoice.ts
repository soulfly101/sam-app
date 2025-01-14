export interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
  }
  
  export interface Invoice {
    id: string;
    customerName: string;
    date: string;
    items: InvoiceItem[];
    total: number;
  }
  
  