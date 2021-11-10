<script>
  import { WebView } from '@nativescript/core';
  import { alert } from '@nativescript/core/ui/dialogs';
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-native'
  import { Template } from 'svelte-native/components';
  import { GeneratePdf } from '@knotes/nativescript-generate-pdf';
  import Sqlite from 'nativescript-sqlite';

  import HTMLTableWithValues from './html_table_pdf.js';

  let webDoc = null;
  let page = null;
  let content = null;

  onMount(() => {
    content = page.nativeElement.getViewById('web');
  });

  const generarPDF = () => {
    let filePath = new GeneratePdf().createPdf(content.nativeView, 'reporte-costos-transitorios');
    content.reload();
    console.log(filePath);

    if (global.isIOS) {
      alert(`Reporte generado correctamente.\nAlmacenado en ${filePath}`);
    }
  };

  let dbPromise = new Sqlite("database.sqlite", { readOnly: true });
  dbPromise.then((db) => {
    db.get('SELECT * FROM c_transitorios WHERE id = ?', global.LastInsertedCostId)
      .then((row) => {
        console.log(row);
        webDoc = HTMLTableWithValues(row);
      })
      .catch((err) => console.log('No se pudo realizar la consulta:', err));
  })
  .catch((err) => console.log('No se pudo realizar conexión a BD:', err));

  // This function is need to enable hot reload of HTML content.
  // Content itself is not reflected in terminal / logs.
  const loaded = () => {
    if (webDoc != null) {
      console.log('null');
    } else {
      console.log('not null');
    }
  };
</script>
<page class="body" bind:this="{page}" actionBarHidden="true">
  <scrollView class="mtop-32">
    <stackLayout>
      <webView src="{webDoc}" id="web" loadFinished="{loaded}" width="auto" height="600" />
      <button text="Guardar en PDF" class="-success  btn mtop-32" on:tap="{generarPDF}" />
    </stackLayout>
  </scrollView>
</page>
