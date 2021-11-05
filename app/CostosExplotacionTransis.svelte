<script>
    import { navigate } from 'svelte-native'
    import { alert } from '@nativescript/core/ui/dialogs';
    import ExplotacionAgricola from './ExplotacionAgricola.svelte'
  
    const cultivoTransitorio = () => navigate({ page: ExplotacionAgricola });
    document.write(uno);

    alert({ title: 'Variable', message: {uno}, okButtonText: 'OK' })
  </script>
  <page class="body">
    <actionBar class="title" style="color: black;" title="Costos" />
    <stackLayout>
        
      <gridLayout columns="300, 300" rows="100">
      <label
        class="info"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        text="Inicio"
        fontSize="20em"
        marginTop="10%" />
      <button text="Estado del bien producido" class="-success  btn" marginTop="20%" />
      <button text="Estado de la naturaleza" class="-success  btn" marginTop="3%" on:tap="{cultivoTransitorio}" />
    </stackLayout>
  </page>