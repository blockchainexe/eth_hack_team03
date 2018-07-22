import $ from 'jquery';
import Koppy from '@/module/Koppy';

export default () => {
  function loadUser() {
    Koppy.getUsers.call((err, users) => {
      for (const i in users) {
        Koppy.getUportAddress.call(users[i], (err, uAdd) => {
          console.log(uAdd);
        });
      }
    });
  }

  loadUser();
}
