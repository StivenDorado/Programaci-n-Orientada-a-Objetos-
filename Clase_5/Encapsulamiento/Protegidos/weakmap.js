//son usados exclusivamente para objetos, sin embargo contienen los mismos metodos que el map (set, get, has, size)

let weak = new WeakMap(); // instancias 

let obj = {}; // objeto vacio 
weak.set(obj, 'valor tru');
console.log(weak.get(obj));

