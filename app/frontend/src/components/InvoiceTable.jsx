import React, { useState, useEffect } from 'react';
import { requestData } from "../services/request";

const InvoiceTable = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
      const getInvoice = async () => {
        const getInvoices = await requestData('/invoice')
        setInvoices(getInvoices);
      }
      getInvoice();
    }, []);
  
    return (
        <>
            {invoices.map((invoice, key) => {
                return (
                    <h1>1</h1>
                )
            })}
        </>
    );
};

export default InvoiceTable;
