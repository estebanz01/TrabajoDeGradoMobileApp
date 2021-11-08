<script>
  import { navigate } from 'svelte-native'
  import ExplotacionAgricola from './ExplotacionAgricola.svelte'
  import Tabla from './ExplotacionAgricola.svelte'
  import TablaDatos from './TablaDatos.svelte';
  import Sqlite from 'nativescript-sqlite';
  import { Template } from 'svelte-native/components';

  const IngresarDatos = () => navigate({ page: TablaDatos });

  // We need to copy the database to a special folder in the device
  if (!Sqlite.exists("database.sqlite")) {
    Sqlite.copyDatabase("database.sqlite");
  }

  let firstValueHere = null;
  new Sqlite("database.sqlite", function(err, db) {
    if (!err) {
      db.all("SELECT * FROM c_transitorios ORDER BY timestamp DESC LIMIT 1")
        .then((resultSet) => {
          console.log(resultSet);
          firstValueHere = resultSet[0][0];
        })
        .catch((err) => console.log(err))
    } else {
      alert(
        {
          title: 'Conexión',
          message: 'Tenemos problemas para conectarnos con la base de datos :c',
          okButtonText: 'OK'
        }
      );
    }
    });

	let variables = ['200', '300', '400'];
</script>
<page class="body">
  <actionBar class="title" style="color: black;" title="Resumen" />
    <stackLayout>
      <label
        class="info"
        text="{firstValueHere}"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        fontSize="20em"
        marginTop="3%" />
      <label
        class="info"
        text="Resultado"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        fontSize="20em"
        marginTop="3%" />
      <listView items="{variables}" title>
        <Template let:item let:title>
          <label text="{item.text}: {item}" marginTop="10%"/>
        </Template>
        <Template let:item>
          <label text="Costos y gastos fijos {item}" marginTop="10%"/>
        </Template>
      </listView>
      <button text="Descargar resumen PDF" class="-success  btn" marginTop="20%" />
      <button text="Ingresar nuevos datos" class="-success  btn" marginTop="3%" on:tap="{IngresarDatos}" />
    </stackLayout>


  <!-- <stackLayout marginTop="4%">

    <gridLayout columns="300, 300" rows="100">

      <listView items={items} itemTemplateSelector={selectTemplate}>
        <Template let:item key="cg_variables">
            <label class="info" text="Costos y gastos variables: {item}" fontSize="14em" marginTop="10%" marginLeft="4%" />
        </Template>
        <Template let:item key="cg_fijos">
            <label class="info" text="Costos y gastos fijos: {item}" fontSize="14em" marginTop="10%" marginLeft="4%" />
        </Template>
        <Template let:item key="lim_inf">
          <label class="info" text="Costos y gastos fijos: {item}" fontSize="14em" marginTop="10%" marginLeft="4%" />
        </Template>
        <Template let:item key="cg_fijos">
          <label class="info" text="Costos y gastos fijos: {item}" fontSize="14em" marginTop="10%" marginLeft="4%" />
        </Template>
      </listView>

    </gridLayout>


  </stackLayout> -->
</page>
