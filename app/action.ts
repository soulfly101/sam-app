'use server'

import { Invoice } from '@/types/invoice'

export async function getInvoices(): Promise<Invoice[]> {
  // This is a sample implementation - replace with your actual data fetching logic
  const invoices: Invoice[] = [
    {
      id: '1',
      customerName: 'John Doe',
      date: '2024-01-14',
      items: [
        {
          description: 'Web Development',
          quantity: 1,
          price: 1000.00,
        },
        {
          description: 'UI Design',
          quantity: 2,
          price: 500.00,
        }
      ],
      total: 2000.00
    },
    // Add more sample invoices as needed
  ]

  return invoices
}