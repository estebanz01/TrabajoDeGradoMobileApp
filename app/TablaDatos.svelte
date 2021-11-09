<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native'
  import { Template } from 'svelte-native/components';
  import CostosExplotacionTransis from './CostosExplotacionTransis.svelte';
  import Sqlite from 'nativescript-sqlite';

  const tablaVariablesDatos = require('~/tabla_datos.json');

  let variables = tablaVariablesDatos.transitorios;
  import { goBack } from 'svelte-native'

  // We need to copy the database to a special folder in the device
  if (!Sqlite.exists("database.sqlite")) {
    Sqlite.copyDatabase("database.sqlite");
  }

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
  let item22 = null;

  console.log(global.userNameId);

	const continuarResultado = () =>{

    if(item1 == null){
      item1 = 0;
    }
    if(item2 == null){
      item2 = 0;
    }
    if(item1 == null){
      item1 = 0;
    }
    if(item3 == null){
      item3 = 0;
    }
    if(item4 == null){
      item4 = 0;
    }
    if(item5 == null){
      item5 = 0;
    }
    if(item6 == null){
      item6 = 0;
    }
    if(item7 == null){
      item7 = 0;
    }
    if(item8 == null){
      item8 = 0;
    }
    if(item9 == null){
      item9 = 0;
    }
    if(item10 == null){
      item10 = 0;
    }
    if(item11 == null){
      item11 = 0;
    }
    if(item12 == null){
      item12 = 0;
    }
    if(item13 == null){
      item13 = 0;
    }
    if(item14 == null){
      item14 = 0;
    }
    if(item15 == null){
      item15 = 0;
    }
    if(item16 == null){
      item16 = 0;
    }
    if(item17 == null){
      item17 = 0;
    }
    if(item18 == null){
      item18 = 0;
    }
    if(item19 == null){
      item19 = 0;
    }
    if(item20 == null){
      item20 = 0;
    }
    if(item21 == null){
      item21 = 0;
    }
    if(item22 == null){
      item22 = 0;
    }
    
    // CALCULO DE DATOS
    let mod = (item3*item4)*item22;
    let salario_admin = item16*item22;
    let val_semillas = item19*item20;
    let total_costos_var = mod+parseFloat(item5)+parseFloat(item6)+parseFloat(item7)+parseFloat(item9)+parseFloat(item10)+parseFloat(item11)+parseFloat(item12)+parseFloat(item13)+parseFloat(item14)+parseFloat(item15)+salario_admin+parseFloat(item17)+parseFloat(item18)+val_semillas;
    console.log("mod "+mod);
    console.log("salario admin "+salario_admin);
    console.log("valor semillas "+val_semillas);
    console.log("total_costos_var "+total_costos_var);

    let val_depreciasiones = (parseFloat(item14)/12)*0;
    let total_costos_fijos = parseFloat(item8)+parseFloat(item10)+val_depreciasiones;
    console.log("total_costos_fijos "+total_costos_fijos);

    let total_gastos_var = parseFloat(item11)+parseFloat(item12)+parseFloat(item18);
    console.log("total_gastos_var "+total_gastos_var);

    let total_gastos_fijos = parseFloat(item13)+parseFloat(item17);
    console.log("total_gastos_fijos "+total_gastos_fijos);

    let cg_var = parseFloat(total_costos_var)+parseFloat(total_gastos_var);
    console.log("Costos y gastos var "+cg_var);

    let cg_fijo = total_costos_fijos+total_gastos_fijos;
    console.log("Costos y gastos fijos "+cg_fijo);

    let prod_limite_inf = parseFloat(item1)-parseFloat(item2);

    let prod_limite_sup = parseFloat(item1)+parseFloat(item2);

    let rel_tierra = parseFloat(item10);
    let rem_trabajo = mod+salario_admin;
    let medios_pn_consumida = parseFloat(item5)+parseFloat(item6)+parseFloat(item7)+val_semillas;
    let duraderos = val_depreciasiones;
    let serv_externos = parseFloat(item9)+parseFloat(item15);
    let gastos_operacionales = parseFloat(item11)+parseFloat(item12)+parseFloat(item13)+parseFloat(item17)+parseFloat(item18);
    let total_estado_nat = rel_tierra+rem_trabajo+medios_pn_consumida+duraderos+serv_externos+gastos_operacionales;

    let valor_kilogramo_inf = (prod_limite_inf*1000)/total_estado_nat;
    let valor_kilogramo_sup = (prod_limite_sup*1000)/total_estado_nat;
    console.log("Valor kilo inf: "+valor_kilogramo_inf);

    let val_cg_var_unitario_inf = (prod_limite_inf*1000)/cg_var;
    let val_cg_var_unitario_sup = (prod_limite_sup*1000)/cg_var;
    console.log("Límite inf "+val_cg_var_unitario_inf);

    let val_cg_fijo_unitario_inf = (prod_limite_inf*1000)/cg_fijo;
    let val_cg_fijo_unitario_sup = (prod_limite_sup*1000)/cg_fijo;

    let costo_total_prod_inf = total_estado_nat;
    let costo_total_prod_sup = total_estado_nat;

    console.log("ITEM1: "+item1+" ITEM2: "+item2+" ITEM3: "+item3+" ITEM4: "+item4+" ITEM5: "+item5+" ITEM6: "+item6+" ITEM7: "+item7+" ITEM8: "+item8+" ITEM9: "+item9+" ITEM10: "+item10+" ITEM11: "+item11+" ITEM12: "+item12+" ITEM13: "+item13+" ITEM14: "+item14+" ITEM15: "+item15+" ITEM16: "+item16+" ITEM17: "+item17+" ITEM18: "+item18+" ITEM19: "+item19+" ITEM20: "+item20+" ITEM21: "+item21+" ITEM22: "+item22);

    let valores = [
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
    ].map((el) => parseFloat(el));

    valores.push(parseInt(global.userNameId, 10), Date.now());

    //  -------------------------------------------------------------------

    new Sqlite("database.sqlite", function(err, db) {
      if (!err) {
        const ins = db.execSQL(
          "INSERT INTO c_transitorios (valor_kilogramo_inf, valor_kilogramo_sup, val_cg_var_unitario_inf, val_cg_var_unitario_sup, val_cg_fijo_unitario_inf, val_cg_fijo_unitario_sup, costo_total_prod_inf, costo_total_prod_sup, cg_var, cg_fijo, prod_limite_inf, prod_limite_sup, user_id, timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          valores
        ).then((id) => {
          db.all(
            "SELECT * FROM c_transitorios", function(err, resultSet) {
              console.log("Result set is:", resultSet);
              navigate({ page: CostosExplotacionTransis });
            }
          );
        }).catch((err) => console.log(err));
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

  };

</script>

<page class="body">
  <actionBar class="title" style="color: black;" title="Datos del cultivo" />
  <gridLayout>
    <scrollView class="mtop-32">
      <stackLayout>
        <label class="form-label" text="Ingrese el valor de la producción en toneladas" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item1}"/>
        <label class="form-label" text="Ingrese el valor de la la devisación estándar de producción" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item2}"/>
        <label class="form-label" text="Ingrese la cantidad de jornales" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item3}"/>
        <label class="form-label" text="Ingrese el valor de los jornales" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item4}"/>
        <label class="form-label" text="Ingrese el valor de los fertilizantes" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item5}"/>
        <label class="form-label" text="Ingrese el valor de los insecticidas" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item6}"/>
        <label class="form-label" text="Ingrese el valor de otros insumos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item7}"/>
        <label class="form-label" text="Ingrese el valor de la asistencia técnica si es prestación por servicios" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item8}"/>
        <label class="form-label" text="Ingrese el valor de asistencia técnica única vez" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item9}"/>
        <label class="form-label" text="Ingrese el valor del arrendamiento" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item10}"/>
        <label class="form-label" text="Ingrese el valor de los servicios públicos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item11}"/>
        <label class="form-label" text="Ingrese el valor de los imprevistos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item12}"/>
        <label class="form-label" text="Ingrese el valor de los impuestos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item13}"/>
        <label class="form-label" text="Ingrese el valor de las depreciaciones" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item14}"/>
        <label class="form-label" text="Ingrese el valor del transporte" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item15}"/>
        <label class="form-label" text="Ingrese el valor de salarios de administración" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item16}"/>
        <label class="form-label" text="Ingrese el valor de mantenimientos preventivos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item17}"/>
        <label class="form-label" text="Ingrese el valor de mantenimientos correctivos" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item18}"/>
        <label class="form-label" text="Ingrese la cantidad de semillas compradas" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item19}"/>
        <label class="form-label" text="Ingrese el valor de cada semilla" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item20}"/>
        <label class="form-label" text="Ingrese el valor del uso estimado de la tierra" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item21}"/>
        <label class="form-label" text="Prestaciones sociales" textWrap="true" fontSize="16em" marginLeft="4%"/>
        <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item22}"/>
        <button text="Continuar" class="-success  btn mtop-16" on:tap="{continuarResultado}" />
      </stackLayout>
    </scrollView>
  </gridLayout>
  
  
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
