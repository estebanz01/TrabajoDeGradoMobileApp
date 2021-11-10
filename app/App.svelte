<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native';
  import Inicio from './Inicio.svelte';
  import Sqlite from 'nativescript-sqlite';

  // We need to copy the database to a special folder in the device
  if (!Sqlite.exists("database.sqlite")) {
    Sqlite.copyDatabase("database.sqlite");
  }

  let user = null;
  let pass = null;

  const clickButton = () => {
    new Sqlite('database.sqlite').then((db) => {
      db.get(
        `select id, role from users where username = ? and password = ?`,
        [user.toLowerCase(), pass]
      ).then(row => {
        if (row != null && row.length == 2) {
            global.userNameId = row[0];
            global.isAdmin = (row[1] === 'admin');
            alert(
              { title: 'Inicio de sesión', message: 'Bienvenido.', okButtonText: 'OK' }
            ).then(() => {
              db.close();
              navigate({ page: Inicio });
            });
        } else {
          alert(
            {
              title: 'Inicio de sesión',
              message: 'Usuario o contraseña incorrecta. Intente nuevamente',
              okButtonText: 'OK'
            }
          );
        }
      }).catch((err) => {
        console.log('Error searching in the DB', err);
      });
    });

//    navigate({ page: Inicio });
  };
</script>
<page class="page body" actionBarHidden="true">
    <stackLayout>
      <image class="" src="~/images/planta.png" height="150" marginTop="14%"/>
      <label
        class="info form-label"
        horizontalAlignment="center"
        verticalAlignment="middle"
        textWrap="true"
        text="Iniciar sesi&oacute;n"
        fontSize="20em"
        height="80"
        marginTop="10%" />
      <textField class="form-input" style="color: black;" hint="Email" keyboardType="email" marginTop="3%" bind:text="{user}" />
      <textField
        style="color: black;"
        hint="Password"
        secure="true"
        marginTop="3%"
        bind:text="{pass}"
        returnKeyType="done" />
      <button text="Ingresar" class="-success btn" marginTop="10%" on:tap="{clickButton}" />
    </stackLayout>
</page>

<style>
    .info {
        font-size: 16;
    }
</style>
