<script>
  import { alert } from '@nativescript/core/ui/dialogs';
  import { navigate } from 'svelte-native';
  import Inicio from './Inicio.svelte';
  import Sqlite from 'nativescript-sqlite';

  // We need to copy the database to a special folder in the device
  if (Sqlite.exists("database.sqlite")) {
    Sqlite.deleteDatabase("database.sqlite");
  }

  Sqlite.copyDatabase("database.sqlite");

  let user = null;
  let pass = null;

  const clickButton = () => {
    new Sqlite('database.sqlite').then((db) => {
      db.get(
        `select id from users where username = ? and password = ?`,
        [user.toLowerCase(), pass]
      ).then(row => {
        if (row != null && row.length == 1) {
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
<page class="page">
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
      <textField hint="Email" keyboardType="email" marginTop="3%" bind:text="{user}" />
      <textField
        hint="Password"
        secure="true"
        marginTop="3%"
        bind:text="{pass}"
        returnKeyType="done" />
      <button text="Ingresar" class="-success -outline btn" marginTop="20%" on:tap="{clickButton}" />
    </stackLayout>
</page>

<style>
    .info {
        font-size: 16;
    }
</style>
