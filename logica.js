class Usuario {
  constructor(
    nombre,
    apellido,
    correo,
    monto_prestamo,
    interes_mensual,
    meses,
    pago_mensual
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.monto_prestamo = monto_prestamo;
    this.interes_mensual = interes_mensual;
    this.meses = meses;
    this.pago_mensual = pago_mensual;
  }
}

function calcular_prestamo() {
  let formulario = document.getElementById("formulario");
  let section_tres = document.getElementById("sectionTres");
  let array = [];
  formulario.addEventListener("submit", calcular);

  //la funcion de los eventlistener
  function calcular(e) {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let monto_prestamo = document.getElementById("monto_prestamo");
    let interes_mensual = document.getElementById("interes_mensual");
    let meses = document.getElementById("meses");

    //aqui calculo el pago mensual
    let pago_mensual =
      (interes_mensual.value * monto_prestamo.value) /
      (1 - (1 + interes_mensual.value) ** -meses.value);

    console.log(
      "El/la señor@  ",
      nombre.value,
      " ",
      apellido.value,
      "pagar mensualmente:",
      pago_mensual,
      " pesos"
    );
    //creo el objeto usuario usando la clase Usuario
    let usuario = new Usuario(
      nombre.value,
      apellido.value,
      email.value,
      monto_prestamo.value,
      interes_mensual.value,
      meses.value,
      pago_mensual
    );
    //estoy pusheando los objetos al array
    array.push(usuario);
    console.log("La base de datos tiene hasta ahora es: ", array);
    e.preventDefault();
    formulario.reset();
  }
}

calcular_prestamo();
