import React, { useState, useEffect } from 'react';
import { requestData } from "../services/request";
import { v4 as uuidv4 } from 'uuid';

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
        <section className="table-section">
          <table className="invoice-table">
            <thead>
              <tr>
                <th data-testid="notas_fiscais">NOTAS FISCAIS</th>
                <th data-testid="sacado_data_testid">SACADO</th>
                <th data-testid="cedente_data_testid">CEDENTE</th>
                <th data-testid="emissao_data_testid">EMISSÂO</th>
                <th data-testid="valor_data_testid">VALOR</th>
                <th data-testid="status_data_testid">STATUS</th>
              </tr>
            </thead>
              <tbody>
                {
                  invoices.map(({ notaFiscal, sacado, cedente, emissao, value, status}, index) => (
                    <tr key={ uuidv4() }>
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
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </>
    );
};

export default InvoiceTable;
