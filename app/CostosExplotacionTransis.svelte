<script>
  import { navigate } from 'svelte-native'
  import { Template } from 'svelte-native/components';
  import { Utils } from '@nativescript/core';
  import Sqlite from 'nativescript-sqlite';

  import ExplotacionAgricola from './ExplotacionAgricola.svelte'
  import Tabla from './ExplotacionAgricola.svelte'
  import VisualizadorPDF from './VisualizadorPDF.svelte';
  import Inicio from './Inicio.svelte';

  const IngresarDatos = () => navigate({ page: ExplotacionAgricola });
  const visualizarPDF = () => navigate({ page: VisualizadorPDF });
  const inicioApp = () => navigate({ page: Inicio });

  // We need to copy the database to a special folder in the device
  if (!Sqlite.exists("database.sqlite")) {
    Sqlite.copyDatabase("database.sqlite");
  }

  let id = null,
    valor_kilogramo_inf = null,
    valor_kilogramo_sup = null,
    val_cg_var_unitario_inf = null,
    val_cg_var_unitario_sup = null,
    val_cg_fijo_unitario_inf = null,
    val_cg_fijo_unitario_sup = null,
    costo_total_prod_inf = null,
    costo_total_prod_sup = null,
    cg_var = null,
    cg_fijo = null,
    prod_limite_inf = null,
    prod_limite_sup = null,
    user_id = null,
    timestamp = null,
    tipo_cosecha = null,
    nombre_cultivo = null;

  new Sqlite("database.sqlite", function(err, db) {
    if (!err) {
      db.all("SELECT * FROM c_transitorios ORDER BY timestamp DESC LIMIT 1")
        .then((resultSet) => {
          console.log(resultSet);
          [
            id,
            valor_kilogramo_inf,
            valor_kilogramo_sup,
            val_cg_var_unitario_inf,
            val_cg_var_unitario_sup,
            val_cg_fijo_unitario_inf,
            val_cg_fijo_unitario_sup,
            costo_total_prod_inf,
            costo_total_prod_sup,
            cg_var,
            cg_fijo,
            prod_limite_inf,
            prod_limite_sup,
            user_id,
            timestamp] = resultSet[0].map((el) => {
              return parseInt(el * 1000 + 0.5, 10) / 1000.0;
            });
            timestamp = (new Date(timestamp)).toLocaleDateString('es-ES'); // Transform to date.
            nombre_cultivo = resultSet[0].pop();
            tipo_cosecha = resultSet[0].pop();
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
</script>
<page class="body">
  <actionBar class="title" style="color: black;" title="Resultado" />
  <scrollView>
    <stackLayout>
      <absoluteLayout>
        <label textWrap="true" left="10" top="10" width="180" height="60">
          <formattedString>
            <span text="Límite inferior: " fontWeight="bold" />
            <span text="{prod_limite_inf}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="10" width="180" height="60" >
          <formattedString>
            <span text="Límite superior: " fontWeight="bold" />
            <span text="{prod_limite_sup}" />
          </formattedString>
        </label>
        <label textWrap="true" left="10" top="80" width="180" height="60">
          <formattedString>
            <span text="Valor kilogramo: " fontWeight="bold" />
            <span text="$ {valor_kilogramo_inf}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="80" width="180" height="60">
          <formattedString>
            <span text="Valor kilogramo: " fontWeight="bold" />
            <span text="$ {valor_kilogramo_sup}" />
          </formattedString>
        </label>
        <label textWrap="true" left="10" top="160" width="180" height="60">
          <formattedString>
            <span text="Valor C y G variable uni: " fontWeight="bold" />
            <span text="$ {val_cg_var_unitario_inf}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="160" width="180" height="60">
          <formattedString>
            <span text="Valor C y G variable uni: " fontWeight="bold" />
            <span text="$ {val_cg_var_unitario_sup}" />
          </formattedString>
        </label>
        <label textWrap="true" left="10" top="240" width="180" height="60">
          <formattedString>
            <span text="Valor C y G fijo uni: " fontWeight="bold" />
            <span text="$ {val_cg_fijo_unitario_inf}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="240" width="180" height="60">
          <formattedString>
            <span text="Valor C y G fijo uni: " fontWeight="bold" />
            <span text="$ {val_cg_fijo_unitario_sup}" />
          </formattedString>
        </label>
        <label textWrap="true" left="10" top="320" width="180" height="60">
          <formattedString>
            <span text="Costo total producción: " fontWeight="bold" />
            <span text="$ {costo_total_prod_inf}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="320" width="180" height="60">
          <formattedString>
            <span text="Costo total producción: " fontWeight="bold" />
            <span text="$ {costo_total_prod_sup}" />
          </formattedString>
        </label>
        <label textWrap="true" left="10" top="400" width="180" height="60">
          <formattedString>
            <span text="C y G variables: " fontWeight="bold" />
            <span text="{cg_var}" />
          </formattedString>
        </label>
        <label textWrap="true" left="210" top="400" width="180" height="60">
          <formattedString>
            <span text="C y G fijo: " fontWeight="bold" />
            <span text="{cg_fijo}" />
          </formattedString>
        </label>

      </absoluteLayout>
      <button text="Descargar resumen PDF" class="-success  btn" marginTop="10%" on:tap="{visualizarPDF}" />
      <button text="Ingresar nuevos datos" class="-success  btn" marginTop="2%" on:tap="{IngresarDatos}" />
      <button text="Finalizar" class="-success  btn" marginTop="2%" on:tap="{inicioApp}" />
    </stackLayout>
  </scrollView>
</page>
