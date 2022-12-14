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
        let contenedor2_section_tres = document.getElementById(
                "contenedor2_sectionTres"
        );
        let array = [];
        formulario.addEventListener("submit", calcular);

        //la funcion de los eventlistener
        function calcular(e) {
                let nombre = document.getElementById("nombre");
                let apellido = document.getElementById("apellido");
                let email = document.getElementById("email");
                let monto_prestamo = document.getElementById("monto_prestamo");
                let interes_mensual =
                        document.getElementById("interes_mensual");
                let meses = document.getElementById("meses");

                //aqui calculo el pago mensual
                let pago_mensual =
                        (interes_mensual.value * monto_prestamo.value) /
                        (1 - (1 + interes_mensual.value) ** -meses.value);

                contenedor2_section_tres.innerHTML = `<p class="resultado">${nombre.value} el monto a pagar este mes es de:  ${pago_mensual}</p>`;

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
                //console.log("La base de datos tiene hasta ahora es: ", array);

                //llamamos la funcion convertir_JSON

                convertir_JSON(array);

                e.preventDefault();
                formulario.reset();

                //codigo de toastify js

                Toastify({
                        text: "Calculando su prestamo...",
                        duration: 1500,
                        style: {
                                background: " #008bff;",
                        },
                }).showToast();
        }

        //Usare una api para ver el valor de un peso a dolares
        let contenedor_ip = document.getElementById("ip");
        fetch(
                "https://v6.exchangerate-api.com/v6/bcde7ba544cd43e86a17649e/latest/COP"
        )
                .then((response) => response.json())
                .then((data) => {
                        contenedor_ip.innerHTML = `<span class="mensaje_ip">Un peso Colombiano equivale a : ${data.conversion_rates.USD} d??lares estadounidenses</span>`;
                });
}

calcular_prestamo();

//haremos una funcion paraconvertir a JSON

function convertir_JSON(array) {
        let arreglo_json = JSON.stringify(array);
        localStorage.setItem("arreglos_usuarios", arreglo_json);
        //ahora vamos a traer del localStorage lo que tenemos guardado por medio de la funcion desconvertir_JSON
        desconvertir_JSON(arreglo_json);
}

//haremos una funcion que me sirva para desconvertir el Json

function desconvertir_JSON(arreglo_json) {
        let desconvertir = JSON.parse(arreglo_json);
}
