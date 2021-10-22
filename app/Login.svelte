<page>
    <stackLayout>
      <image src="~/images/planta.png" height="150"/>
      <label
        class="info"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        text="Iniciar sesi&oacute;n"
        height="80"
        marginTop="3%" />
      <textField hint="Email" keyboardType="email" marginTop="3%" />
      <textField hint="Password" secure="true" marginTop="3%" />
      <button text="Ingresar" class="-primary -outline" marginTop="20%" />
    </stackLayout>
</page>

<style>
    .info {
        font-size: 16;
    }
</style>
