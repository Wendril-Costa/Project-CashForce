import React, { useState, useEffect } from 'react';
import { requestData } from "../services/request";
import { v4 as uuidv4 } from 'uuid';
import '../styles/components/invoiceTable.css'
import Header from './Header'

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
      <main>
        <section className="table-section">
          <div className='faixa-content'>
            <div className='faixa'></div>
          </div>
          <Header />
          <table className="invoice-table">
            <thead className='invoice-thead'>
              <tr className='table-header'>
                <th className='fiscaisth' data-testid="notas_fiscais">NOTA FISCAL</th>
                <th className='sacadoth' data-testid="sacado_data_testid">SACADO</th>
                <th className='cedenteth' data-testid="cedente_data_testid">CEDENTE</th>
                <th className='emissaoth' data-testid="emissao_data_testid">EMISSÂO</th>
                <th className='valorth' data-testid="valor_data_testid">VALOR</th>
                <th className='statusth' data-testid="status_data_testid">STATUS</th>
              </tr>
            </thead>
            <tbody className='tbody-table'>
              {
                invoices.map(({ notaFiscal, sacado, cedente, emissao, value, status}, index) => (
                  <tr key={ uuidv4() } > 
                      <div className='row-second'>
                        <td className="notas-fiscais" data-testid={`notas_fiscais_data_testid${index + 1}`}>
                          {notaFiscal}
                        </td>
                        <td className="sacado" data-testid={`sacado_data_testid${index + 1}`}>
                          {sacado}
                        </td>
                        <td className="cedente" data-testid={`cedente_data_testid${index + 1}`}>
                          {cedente}
                        </td>
                        <td className="emissao" data-testid={`emissao_data_testid${index + 1}`} >
                          {emissao.substr(0,10)}
                        </td>
                        <td className="value" data-testid={`value_data_testid${index + 1}`}>
                          {`R$ ${value}`}
                        </td>
                        <td className="status" data-testid={`status_data_testid${index + 1}`}>
                          {status}
                        </td>
                        <button>
                          <p>Dados do cedente</p>
                        </button>
                      </div>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </main>
    );
};

export default InvoiceTable;
