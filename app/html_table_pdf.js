const HTMLTableWithValues = (values) => {
  if (values == null || values.length < 1) {
    return '<html></html>';
  }

  let concepts = [
    'Límite inferior',
    'Límite superior',
    'Valor kilogramo (Mínimo)',
    'Valor kilogramo (Máximo)',
    'Valor costos y gastos variables (Mínimo por unidad)',
    'Valor costos y gastos variables (Máximo por unidad)',
    'Valor costos y gastos fijos (Mínimo por unidad)',
    'Valor costos y gastos fijos (Máximo por unidad)',
    'Costo mínimo total de producción',
    'Costo máximo total de producción',
    'Gastos y costos variables totales',
    'Gastos y costos fijos totales'
  ];

  let baseHTML = `<!doctype HTML>
  <html>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      <h1>C&aacute;lculo de costos de producci&oacute;n.</h1>
      <p>
        A continuaci&oacute;n, su &uacute;ltimo reporte de c&aacute;lculo de costos para el cultivo transitorio.
      </p>
      <table>
        <thead>
          <th>Componente</th>
          <th>Valor</th>
        </thead>
        <tbody>
          REPLACEBODY
        </tbody>
      </table>
    </body>
  </html>`;

  let tbody = concepts.reduce((previous, current, index) => {
    let currency = parseFloat(values[(index + 1)])
      .toFixed(3)
      .toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    return previous + `<tr><td><strong>${current}</strong></td><td>$ ${currency}</td></tr>`;
  }, '');

  tbody += `<tr><td colspan="2"><small><em>Reporte generado el ${(new Date(values[14])).toLocaleString('es-CO')}</em></small></td></tr>`;

  return baseHTML.replace('REPLACEBODY', tbody);
}

export default HTMLTableWithValues;
