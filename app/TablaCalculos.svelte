<script>
  import { action, alert, confirm } from '@nativescript/core/ui/dialogs';
  import { navigate, goBack } from 'svelte-native';
  import { Template } from 'svelte-native/components';
  import Sqlite from 'nativescript-sqlite';

  import VisualizadorPDF from './VisualizadorPDF.svelte';

  let calculosRealizados = [];

  let dbPromise = new Sqlite("database.sqlite", { readOnly: true });
  dbPromise.then((db) => {
    db.all('SELECT id, nombre_cultivo, timestamp FROM c_transitorios WHERE user_id = ? ORDER BY timestamp DESC LIMIT 4', global.userNameId)
      .then((rows) => { calculosRealizados = rows; })
      .catch((err) => console.log('Error realizando consulta SQL', err));
    }).catch((err) => console.log('Error conectandose a DB', err));

  const onItemTap = (args) => {
    action('Seleccione una de las siguientes opciones', 'Cancelar', ['Generar reporte', 'Eliminar'])
      .then(result => {
        if (result === 'Generar reporte') {
          global.LastInsertedCostId = calculosRealizados[args.index][0]; // Grab calculation ID.
          navigate({ page: VisualizadorPDF });
        } else {
          confirm({
            title: 'Eliminar costeo',
            message: `¿Está seguro que desea eliminar el costeo con ID: ${calculosRealizados[args.index][0]}?`,
            okButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          })
          .then(remove => {
            if (remove) {
              alert('Funcionalidad no disponible de momento.')
            }
          }).catch((err) => console.log('Ocurrió un error', err));
        }
      }).catch((err) => console.log('Ocurrió un error', err));
  };
</script>
<page class="body">
  <actionBar class="title" style="color: black;" title="Costeos realizados" />
  <scrollView>
    <stackLayout>
      <listView items="{calculosRealizados}" height="500" on:itemTap="{onItemTap}">
        <Template let:item>
          <label text="ID: {item[0]}" />
          <label text="Cultivo: {item[1]}" />
          <label text="Creado: {new Date(item[2]).toLocaleString('es-CO')}" />
        </Template>
      </listView>
      <button text="Atras" class="-success  btn" on:tap="{goBack}" />
    </stackLayout>
  </scrollView>
</page>
