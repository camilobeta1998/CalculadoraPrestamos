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
  let x = 1;
  let array = [];
  while (x == 1) {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let correo = prompt("Ingrese su correo electronico: ");
    let monto_prestamo = parseInt(prompt("Ingrese el monto del prestamo:"));
    let interes_mensual = parseFloat(
      prompt("Ingrese el porcentaje de interes mensual en cifras decimales: ")
    );
    let meses = parseInt(
      prompt(
        "Ingrese la cantidad de meses en los que desea pagar el prestamo: "
      )
    );

    let pago_mensual =
      (interes_mensual * monto_prestamo) /
      (1 - (1 + interes_mensual) ** -meses);

    console.log(
      "El/la señor@  ",
      nombre,
      " ",
      apellido,
      "pagar mensualmente:",
      pago_mensual,
      " pesos"
    );

    let usuario = new Usuario(
      nombre,
      apellido,
      correo,
      monto_prestamo,
      interes_mensual,
      meses,
      pago_mensual
    );

    array.push(usuario);

    x = parseInt(
      prompt(
        "Ingrese 1 si quieres volver a realizar otra analisis de prestamo: "
      )
    );
  }
  console.log(array);
}

calcular_prestamo();
