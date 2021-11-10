<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native';
  import TablaDatos from './TablaDatos.svelte';

  const transitoriosJSON = require('~/transitorios.json');
  const permanentesJSON = require('~/permanentes.json');

  const tiposPermanentes = Object.keys(permanentesJSON);
  const tiposTransitorios = Object.keys(transitoriosJSON);

  let tipoCosechas = ['', 'Permanente', 'Transitorio'];
  let tipoCultivos = [];
  let cultivos = [];

  let tipoCosecha = -1;
  let tipoCultivo = -1;
  let cultivo = -1;

  const cargarTipoCultivo = () => {
    switch (tipoCosecha) {
      case 1:
        tipoCultivos = tiposPermanentes;
        break;
      case 2:
        tipoCultivos = tiposTransitorios;
        break;
      default:
        tipoCultivos = [];
        console.log('No option selected');
    }

    cultivos = []; // Forzar la selección del tipo de cultivo.
  };

  const cargarCultivos = () => {
    if (tipoCosecha == 1) {
      cultivos = permanentesJSON[tiposPermanentes[tipoCultivo]];
    } else if (tipoCosecha == 2) {
      cultivos = transitoriosJSON[tiposTransitorios[tipoCultivo]];
    } else {
      cultivos = [];
    }

    console.log('cultivos');
  };

  const infoBtn = (evt) => {
    const classes = evt.object.className.split(' ');

    if (classes.includes('js-cosecha')) {
      alert('La cosecha puede ser permanente (de largo plazo) o transitoria (corto plazo).');
    } else if (classes.includes('js-tipo-cultivo')) {
      alert('Seleccione una categoría de cultivo para ver las diferentes opciones de cultivo presentes.\nOpción vacía si no se ha seleccionado un tipo de cosecha.');
    } else if (classes.includes('js-cultivo')) {
      alert('Seleccione una de las opciones a continuación que representa a su producto cosechado final.');
    }
  };

  const continuarBtn = () => {
    if (tipoCosecha == 1) {
      alert('Estamos trabajando fuertemente para implementar el cálculo de costos para cultivos permanentes. Pronto estará disponible.');
    } else if (tipoCosecha == 2) {
      global.tipoCosecha = 'transitorio';
      global.nombreCultivo = cultivos[cultivo];
      navigate({ page: TablaDatos });
    } else {
      alert('Por favor, seleccione el tipo de cosecha.');
    }
  };
</script>
<page class="body" actionBarHidden="true">
  <scrollView class="mtop-32">
    <stackLayout>
      <label
        class="info"
        text="Explotaci&oacute;n Agr&iacute;cola"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        fontSize="28em"
        marginTop="3%" />
      <absoluteLayout marginTop="18%" horizontalAlignment="center" verticalAlignment="middle">
        <label
          class="info"
          text="Tipo de Cosecha:"
          left="10"
          top="10"
          textWrap="true"
          fontSize="20em" />
        <button
          left="160"
          top="0"
          text="&#xf05a;"
          class="fas js-cosecha"
          paddingTop="-10%"
          strech="none"
          on:tap="{infoBtn}" />
      </absoluteLayout>
      <listPicker
        items="{tipoCosechas}"
        height="100"
        on:selectedIndexChange="{cargarTipoCultivo}"
        bind:selectedIndex="{tipoCosecha}" />
      <absoluteLayout marginTop="5%" horizontalAlignment="center" verticalAlignment="middle">
        <label
          class="info"
          text="Tipo de Cultivo:"
          left="10"
          top="10"
          textWrap="true"
          fontSize="20em" />
        <button
          left="160"
          top="0"
          text="&#xf05a;"
          class="fas js-tipo-cultivo"
          paddingTop="-10%"
          strech="none"
          on:tap="{infoBtn}" />
      </absoluteLayout>
      <listPicker
        items="{tipoCultivos}"
        height="100"
        on:selectedIndexChange="{cargarCultivos}"
        bind:selectedIndex="{tipoCultivo}" />
      <absoluteLayout marginTop="5%" horizontalAlignment="center" verticalAlignment="middle">
        <label
          class="info"
          text="Cultivo:"
          left="10"
          top="10"
          textWrap="true"
          fontSize="20em" />
        <button
          left="160"
          top="0"
          text="&#xf05a;"
          class="fas js-cultivo"
          paddingTop="-10%"
          strech="none"
          on:tap="{infoBtn}" />
      </absoluteLayout>
      <listPicker
        items="{cultivos}"
        bind:selectedIndex="{cultivo}"
        height="100" />
      <button text="Continuar" class="-success btn" on:tap={continuarBtn} />
    </stackLayout>
  </scrollView>
</page>
