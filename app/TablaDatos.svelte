<script>
  import { Template } from 'svelte-native/components';

  const tablaVariablesDatos = require('~/tabla_datos.json');

  let variables = tablaVariablesDatos.transitorios;
</script>
<page class="body">
  <scrollView orientation="vertical">
    <stackLayout>
      <label
        class="info"
        text="Datos"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        fontSize="40em"
        marginTop="3%" />
      <listView items="{variables}">
        <Template let:item>
          <label text="Ingrese el valor de {item.text}" textWrap="true" />
          <textField keyboardType="number" hint="Valor" />
        </Template>
      </listView>
      <button text="Continuar" class="-success -outline btn" />
    </stackLayout>
  </scrollView>
</page>
