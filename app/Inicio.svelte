<script>
  import { navigate } from 'svelte-native';
  import ExplotacionAgricola from './ExplotacionAgricola.svelte';
  import TablaCalculos from './TablaCalculos.svelte';
  import administrarUsuarios from './administrarUsuarios.svelte';

  const cultivoTransitorio = () => navigate({ page: ExplotacionAgricola });
  const calculosRealizados = () => navigate({ page: TablaCalculos });
  const adminUsers = () => navigate({ page: administrarUsuarios });
</script>
<page class="body" actionBarHidden="true">
  <stackLayout>
    <gridLayout columns="300, 300" rows="100" marginTop="10%">
      <label
        class="info"
        text="AMCA"
        horizontalAlignment="left"
        textWrap="true"
        fontSize="40em"
        marginLeft="25%"
        marginTop="3%" />
      <image
          src="~/images/planta.png"
          height="80"
          horizontalAlignment="right" />
    </gridLayout>
    <label
      class="info"
      horizontalAlignment="center"
      verticalAlignment="middle"
      textWrap="true"
      text="Inicio"
      fontSize="30em"
      marginTop="8%" />
    <button text="Estado del bien producido" class="-success  btn" marginTop="4%" />
    <button text="Estado de la naturaleza" class="-success  btn" marginTop="3%" on:tap="{cultivoTransitorio}" />
    <button text="Costeos realizados" class="-success  btn" marginTop="3%" on:tap="{calculosRealizados}" />
    {#if global.isAdmin }
      <button text="Administrar usuarios" class="-success  btn" marginTop="3%" on:tap="{adminUsers}" />
    {/if}
  </stackLayout>
</page>
