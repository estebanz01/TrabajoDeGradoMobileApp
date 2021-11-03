<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native'
  import { Template } from 'svelte-native/components';
  import CostosExplotacionTransis from './CostosExplotacionTransis.svelte';

  const tablaVariablesDatos = require('~/tabla_datos.json');

  let variables = tablaVariablesDatos.transitorios;
  import { goBack } from 'svelte-native'


  let item1 = null;
  let item2 = null;
  let item3 = null;
  let item4 = null;
  let item5 = null;
  let item6 = null;
  let item7 = null;
  let item8 = null;
  let item9 = null;
  let item10 = null;
  let item11 = null;
  let item12 = null;
  let item13 = null;
  let item14 = null;
  let item15 = null;
  let item16 = null;
  let item17 = null;
  let item18 = null;
  let item19 = null;
  let item20 = null;
  let item21 = null;
  
	const continuarResultado = () =>{
    
    alert(
            {
              title: 'Valor',
              message: item1+" "+item2+" "+item3+" "+item4+" "+item5+" "+item6+" "+item7+" "+item8+" "+item9+" "+item10+" "+item11+" "+item12,
              okButtonText: 'OK'
            }
          );
    // navigate({ page: CostosExplotacionTransis }, {uno : "1"});
  };

</script>
<page class="body" actionBarHidden="false">
  <actionBar class="title" style="color: black;" title="Datos del cultivo" />
  <scrollView orientation="vertical" scrollBarIndicatorVisible="true">
    <stackLayout style="margin: 4px">
      <label class="form-label mtop-16" height="30" width="240" text="Ingrese el valor de la producción en toneladas" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item1}"/>
      <label class="form-label mtop-16" text="Ingrese el valor de la la devisación estándar de producción" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item2}"/>
      <label class="form-label" text="Ingrese la cantidad de jornales" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item3}"/>
      <label class="form-label" text="Ingrese el valor de los jornales" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item4}"/>
      <label class="form-label" text="Ingrese el valor de los fertilizantes" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item5}"/>
      <label class="form-label" text="Ingrese el valor de los insecticidas" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item6}"/>
      <label class="form-label" text="Ingrese el valor de otros insumos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item7}"/>
      <label class="form-label" text="Ingrese el valor de la asistencia técnica si es prestación por servicios" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item8}"/>
      <label class="form-label" text="Ingrese el valor de asistencia técnica única vez" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item9}"/>
      <label class="form-label" text="Ingrese el valor del arrendamiento" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item10}"/>
      <label class="form-label" text="Ingrese el valor de los servicios públicos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item11}"/>
      <label class="form-label" text="Ingrese el valor de los imprevistos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item12}"/>
      <label class="form-label" text="Ingrese el valor de los impuestos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item13}"/>
      <label class="form-label" text="Ingrese el valor de las depreciaciones" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item14}"/>
      <label class="form-label" text="Ingrese el valor del transporte" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item15}"/>
      <label class="form-label" text="Ingrese el valor de salarios de administración" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item16}"/>
      <label class="form-label" text="Ingrese el valor de mantenimientos preventivos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item17}"/>
      <label class="form-label" text="Ingrese el valor de mantenimientos correctivos" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item18}"/>
      <label class="form-label" text="Ingrese la cantidad de semillas compradas" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item19}"/>
      <label class="form-label" text="Ingrese el valor de cada semilla" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item20}"/>
      <label class="form-label" text="Ingrese el valor del uso estimado de la tierra" textWrap="true" />
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item21}"/>
      <button text="Continuar" class="-success  btn" marginTop="20%" on:tap="{continuarResultado}" />
    </stackLayout>
  </scrollView>
  <!-- <gridLayout>
      <label
        class="info"
        text=""
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        height="80"
        fontSize="40em"
        marginTop="3%" />
      <listView items="{variables}">
        <Template let:item>
          <label class="form-label" text="Ingrese el valor de {item.text}" textWrap="true" />
          <textField keyboardType="number" style="color: black;" hint="Valor {item.id}" bind:text="{item1}"/>
        </Template>
      </listView>
      <button text="Continuar" class="-success  btn" marginTop="80%" on:tap="{continuarResultado}" />
  </gridLayout> -->
</page>