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
  //declaro x para saber si quiero volver a realizar el ciclo
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

    //aqui calculo el pago mensual
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

    /**Aqui utilizare DOM para mostrar en pantalla los usuarios registrados**/

    let section_cuatro = document.getElementById("sectionCuatro");

    //Aqui se mostrara en el DOM el nombre de los usuarios
    let nombre_en_html = document.createElement("p");
    nombre_en_html.innerText = "El nombre del usuario es: " + nombre;
    section_cuatro.append(nombre_en_html);

    //Aqui se mostrara en el DOM el apellido de los usuarios
    let apellido_en_html = document.createElement("p");
    apellido_en_html.innerText = "El apellido del usuario es: " + apellido;
    section_cuatro.append(apellido_en_html);

    //aqui se mostrara en el DOM el correo electronico de los usuarios:
    let correo_en_html = document.createElement("p");
    correo_en_html.innerText =
      "El correo electronico  del usuario es: " + correo;
    section_cuatro.append(correo_en_html);

    // aqui se mostrara el valor a pagar en el DOM:
    let pago_mensual_en_html = document.createElement("p");
    pago_mensual_en_html.innerText =
      "El valor del pago mensual es: " + pago_mensual;
    section_cuatro.append(pago_mensual_en_html);

    //Separador
    let separador_en_html = document.createElement("p");
    separador_en_html.innerText =
      "--------------------------------------------------------------------------------------------------";
    section_cuatro.append(separador_en_html);

    //creo el objeto usuario usando la clase Usuario
    let usuario = new Usuario(
      nombre,
      apellido,
      correo,
      monto_prestamo,
      interes_mensual,
      meses,
      pago_mensual
    );

    //estoy pusheando los objetos al array
    array.push(usuario);
    x = parseInt(
      prompt(
        "Ingrese 1 si quieres volver a realizar otro analisis de prestamo o ingrese un numero diferente si quiero salir: "
      )
    );
  }
  console.log(
    "---------------------------------------------------------------------------------"
  );

  // y es la variable para saber si el ciclo se continua repitiendo
  y = parseInt(
    prompt(
      "Ingrese el numero 1 si  quire  buscar a alguien en la base de datos, ingrese otro numero si quiere salir: "
    )
  );
  while (y == 1) {
    let nombre_busqueda = prompt(
      "Ingrese el nombre que quiere buscar dentro de la base de datos: "
    );
    let busqueda = array.filter(function (usuario) {
      if (usuario.nombre == nombre_busqueda) {
        return true;
      } else {
        console.log("Este usuario NO esta en la base de datos");
      }
    });
    console.log(
      "Los valores obtenidos para:  ",
      nombre_busqueda,
      " son: ",
      busqueda
    );
    y = parseInt(
      prompt(
        "Ingrese el numero 1 si  quiere volver a buscar a alguien en la base de datos, ingrese otro numero si quiere salir: "
      )
    );
  }
  return array;
}

calcular_prestamo();
