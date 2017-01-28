import Navigo from 'navigo'


const root = 'http://localhost:9002/';
const useHash = false;
// let router = new Navigo(root, useHash);

let router;
// if (window.location.href === root) {
    router = new Navigo(root, useHash);
// } else {
//     router = new Navigo(root, useHash);
//     console.log(router)
// }

export default router