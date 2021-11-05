<script>
  import { navigate } from 'svelte-native'
  import ExplotacionAgricola from './ExplotacionAgricola.svelte'

  const cultivoTransitorio = () => navigate({ page: ExplotacionAgricola });
</script>
<page class="body">
  <stackLayout>
    <gridLayout columns="300, 300" rows="100">
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
      fontSize="20em"
      marginTop="10%" />
    <button text="Estado del bien producido" class="-success  btn" marginTop="20%" />
    <button text="Estado de la naturaleza" class="-success  btn" marginTop="3%" on:tap="{cultivoTransitorio}" />
  </stackLayout>
</page>
