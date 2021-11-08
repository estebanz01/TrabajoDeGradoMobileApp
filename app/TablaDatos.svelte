<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native'
  import { Template } from 'svelte-native/components';
  import CostosExplotacionTransis from './CostosExplotacionTransis.svelte';
  import Sqlite from 'nativescript-sqlite';

  const tablaVariablesDatos = require('~/tabla_datos.json');

  let variables = tablaVariablesDatos.transitorios;
  import { goBack } from 'svelte-native'

  Sqlite.copyDatabase("database.sqlite");


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

  
  
	const continuarResultado = () =>{

    // CALCULO DE DATOS
    let mod = (item3*item4)*item22;
    let salario_admin = item16*item22;
    let val_semillas = item19*item20;
    let total_costos_var = mod+item5+item6+item7+item9+item10+item11+item12+item13+item14+item15+salario_admin+item17+item18+val_semillas;

    let val_depreciasiones = (item14/12)*0;
    let total_costos_fijos = item8+item10+val_depreciasiones;

    let total_gastos_var = item11+item12+item18;

    let total_gastos_fijos = item13+item17;

    let cg_var = total_costos_var+total_gastos_var;

    let cg_fijo = total_costos_fijos+total_gastos_fijos;

    let prod_limite_inf = item1-item2;

    let prod_limite_sup = item1+item2;

    let rel_tierra = item10;
    let rem_trabajo = mod+salario_admin;
    let medios_pn_consumida = item5+item6+item7+val_semillas;
    let duraderos = val_depreciasiones;
    let serv_externos = item9+item15;
    let gastos_operacionales = item11+item12+item13+item17+item18;
    let total_estado_nat = rel_tierra+rem_trabajo+medios_pn_consumida+duraderos+serv_externos+gastos_operacionales;

    let valor_kilogramo_inf = total_estado_nat/(prod_limite_inf*1000);
    let valor_kilogramo_sup = total_estado_nat/(prod_limite_sup*1000);

    let val_cg_var_unitario_inf = cg_var/(prod_limite_inf*1000);
    let val_cg_var_unitario_sup = cg_var/(prod_limite_sup*1000);

    let val_cg_fijo_unitario_inf = cg_fijo/(prod_limite_inf*1000);
    let val_cg_fijo_unitario_sup = cg_fijo/(prod_limite_sup*1000);

    let costo_total_prod_inf = total_estado_nat;
    let costo_total_prod_sup = total_estado_nat;

    //  -------------------------------------------------------------------

    new Sqlite("database.sqlite", function(err, db) {
      let conn = Sqlite.isSqlite(db) ? "Yes" : "No";
      if(conn == "Yes"){
        db.execSQL("CREATE TABLE IF NOT EXISTS c_transistorios (id INT(11), valor_kilogramo_inf VARCHAR(255), valor_kilogramo_sup VARCHAR(255), val_cg_var_unitario_inf VARCHAR(255), val_cg_var_unitario_sup VARCHAR(255), val_cg_fijo_unitario_inf VARCHAR(255), val_cg_fijo_unitario_sup VARCHAR(255), costo_total_prod_inf VARCHAR(255), costo_total_prod_sup VARCHAR(255), cg_var VARCHAR(255), cg_fijo VARCHAR(255), prod_limite_inf VARCHAR(255), prod_limite_sup VARCHAR(255))", function(err, table){
          console.log("Nueva tabla:", table);
        });
        const ins = db.execSQL("INSERT INTO c_transistorios (valor_kilogramo_inf, valor_kilogramo_sup, val_cg_var_unitario_inf, val_cg_var_unitario_sup, val_cg_fijo_unitario_inf, val_cg_fijo_unitario_sup, costo_total_prod_inf, costo_total_prod_sup, cg_var, cg_fijo, prod_limite_inf, prod_limite_sup) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", ["20000","30000","40000","50000","60000","70000","80000","90000","22000","33000", "44000", "55000"], function(err, id) {
          console.log("The new record id is:", id);
        });
        db.all(
          "SELECT * FROM c_transistorios", function(err, resultSet) {
            console.log("Result set is:", resultSet);
          }
        );
        // .then(row => {
        //   alert(
        //     { 
        //       title: 'Conexión', 
        //       message: 'Resultado: '+row, 
        //       okButtonText: 'OK' 
        //     }
        //   );
        // })
        navigate({ page: CostosExplotacionTransis })
      }else{
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
<page class="body" actionBarHidden="false">
  <actionBar class="title" style="color: black;" title="Datos del cultivo" />
  <scrollView orientation="vertical" scrollBarIndicatorVisible="true">
    <stackLayout style="margin: 4px">
      <label class="form-label mtop-16" text="Ingrese el valor de la producción en toneladas" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item1}"/>
      <label class="form-label mtop-16" text="Ingrese el valor de la la devisación estándar de producción" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item2}"/>
      <label class="form-label" text="Ingrese la cantidad de jornales" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item3}"/>
      <label class="form-label" text="Ingrese el valor de los jornales" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item4}"/>
      <label class="form-label" text="Ingrese el valor de los fertilizantes" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item5}"/>
      <label class="form-label" text="Ingrese el valor de los insecticidas" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item6}"/>
      <label class="form-label" text="Ingrese el valor de otros insumos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item7}"/>
      <label class="form-label" text="Ingrese el valor de la asistencia técnica si es prestación por servicios" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item8}"/>
      <label class="form-label" text="Ingrese el valor de asistencia técnica única vez" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item9}"/>
      <label class="form-label" text="Ingrese el valor del arrendamiento" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item10}"/>
      <label class="form-label" text="Ingrese el valor de los servicios públicos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item11}"/>
      <label class="form-label" text="Ingrese el valor de los imprevistos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item12}"/>
      <label class="form-label" text="Ingrese el valor de los impuestos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item13}"/>
      <label class="form-label" text="Ingrese el valor de las depreciaciones" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item14}"/>
      <label class="form-label" text="Ingrese el valor del transporte" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item15}"/>
      <label class="form-label" text="Ingrese el valor de salarios de administración" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item16}"/>
      <label class="form-label" text="Ingrese el valor de mantenimientos preventivos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item17}"/>
      <label class="form-label" text="Ingrese el valor de mantenimientos correctivos" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item18}"/>
      <label class="form-label" text="Ingrese la cantidad de semillas compradas" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item19}"/>
      <label class="form-label" text="Ingrese el valor de cada semilla" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item20}"/>
      <label class="form-label" text="Ingrese el valor del uso estimado de la tierra" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item21}"/>
      <label class="form-label" text="Prestaciones sociales" textWrap="true" fontSize="16em" marginTop="10%" marginLeft="4%"/>
      <textField keyboardType="number" style="color: black;" hint="Valor" bind:text="{item22}"/>
      <button text="Continuar" class="-success  btn" marginTop="10%" on:tap="{continuarResultado}" />
      
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
