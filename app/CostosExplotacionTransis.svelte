<script>
  import { navigate } from 'svelte-native'
  import ExplotacionAgricola from './ExplotacionAgricola.svelte'
  import Tabla from './ExplotacionAgricola.svelte'
  import TablaDatos from './TablaDatos.svelte';


  const IngresarDatos = () => navigate({ page: TablaDatos });

  import { Template } from 'svelte-native/components';

  /* const tablaItems = require('~/tabla_items.json'); */

  /* let titulo = tablaItems.results; */



	let variables = ['200', '300', '400'];

</script>
<page class="body">
  <actionBar class="title" style="color: black;" title="Resumen" />


    <stackLayout>
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
