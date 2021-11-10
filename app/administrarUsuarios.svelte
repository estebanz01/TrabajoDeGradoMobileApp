<script>
  import { action, alert, confirm } from '@nativescript/core/ui/dialogs';
  import { navigate, goBack } from 'svelte-native';
  import { Template } from 'svelte-native/components';
  import Sqlite from 'nativescript-sqlite';

  let usuarios = [];

  let dbPromise = new Sqlite("database.sqlite");
  dbPromise.then((db) => {
    db.all('SELECT id, username, role FROM users')
      .then((rows) => { usuarios = rows; })
      .catch((err) => console.log('Error realizando consulta SQL', err));
    }).catch((err) => console.log('Error conectandose a DB', err));

  const onItemTap = (args) => {
    action('Seleccione un rol', 'Cancelar', ['Normal', 'Administrador'])
      .then(result => {
        let userId = usuarios[args.index][0]; // Grab calculation ID.
        let oldRole = usuarios[args.index][2];
        let role = 'basic';

        if (userId == global.userNameId) {
          return;
        }

        if (result === 'Administrador') {
          role = 'admin';
        }

        if (oldRole == role) {
          return;
        }

        new Sqlite("database.sqlite").then((db) => {
          db.execSQL('UPDATE users SET role = ? WHERE id = ?', [role, userId])
            .then((rowsUpdated) => {
              global.isAdmin = (role === 'admin');
              usuarios[args.index][2] = role;
                alert(`${rowsUpdated} usuario(s) actualizado(s).`);
            }).catch((err) => console.log('Error on update', err));
        }).catch((err) => console.log('Error on connect', err));
      }).catch((err) => console.log('Ocurrió un error', err));
  };
</script>
<page>
  <actionBar class="title" style="color: black;" title="Administrar usuarios" />
  <stackLayout>
    <listView items="{usuarios}" height="500" on:itemTap="{onItemTap}">
      <Template let:item>
        <label text="ID: {item[0]}" />
        <label text="Username: {item[1]}" />
        <label text="Role: {item[2] === 'admin' ? 'Administrador' : 'Normal'}" />
      </Template>
    </listView>
    <button text="Atras" class="-success  btn" on:tap="{goBack}" />
  </stackLayout>
</page>
