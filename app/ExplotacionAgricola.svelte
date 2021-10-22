<script>
  const transitorios = require('~/transitorios.json');
  const permanentes = require('~/permanentes.json');

  let tipoCosechas = ['', 'Permanente', 'Transitorio'];
  let tipoCultivos = [];
  let cultivos = [];

  let tipoCosecha = -1;
  let tipoCultivo = -1;
  let cultivo = -1;

  const cargarTipoCultivo = () => {
    switch (tipoCosecha) {
      case 1:
        tipoCultivos = Object.keys(permanentes);
        break;
      case 2:
        tipoCultivos = Object.keys(transitorios);
        break;
      default:
        tipoCultivos = [];
        console.log('No option selected');
    }
  };

  const cargarCultivos = () => {
    if (tipoCosecha == 1) {
      cultivos = permanentes[Object.keys(permanentes)[tipoCultivo]];
    } else if (tipoCosecha == 2) {
      cultivos = transitorios[Object.keys(transitorios)[tipoCultivo]];
    } else {
      cultivos = [];
    }

    console.log('cultivos');
  };
</script>
<page>
  <stackLayout>
    <label
      class="info"
      text="Explotaci&oacute;n Agr&iacute;cola"
      horizontalAlignment="center"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="40em"
      marginTop="3%" />
    <label
      class="info"
      text="Tipo de cosecha:"
      horizontalAlignment="center"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="20em"
      marginTop="10%" />
    <listPicker
      items="{tipoCosechas}"
      height="100"
      on:selectedIndexChange="{cargarTipoCultivo}"
      bind:selectedIndex="{tipoCosecha}" />
    <label
      class="info"
      text="Tipo de Cultivo:"
      horizontalAlignment="center"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="20em" />
    <listPicker
      items="{tipoCultivos}"
      height="100"
      on:selectedIndexChange="{cargarCultivos}"
      bind:selectedIndex="{tipoCultivo}" />
    <label
      class="info"
      text="Cultivo:"
      horizontalAlignment="center"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="20em" />
    <listPicker
      items="{cultivos}"
      bind:selectedIndex="{cultivo}"
      height="100" />
    <button text="Continuar" class="-primary -outline" />
  </stackLayout>
</page>
