function DatosUsuario() {


    let usuarios = [];
    let usuario = {
        nombre: "",
        edad: 0,
        ciudadUsuario: "",
        tipoEntradas: "",
        cantidadEntradas: 0,
        mail: "",
        fecha: "",
    
        obtenerNombre: function() {
            this.nombre = prompt("Ingresa tu nombre");
            alert("Hola " + this.nombre);
        },
    
        validarEdad: function() {
            let edadUsuario = parseInt(prompt("Ingresa tu edad"));
    
            while (isNaN(edadUsuario) || edadUsuario <= 0) {
                alert("Dato de edad inválido");
                edadUsuario = parseInt(prompt("Ingresa tu edad"));
            }
            this.edad = edadUsuario;
            
            if (this.edad >= 18) {
                alert("¡Bienvenida/o " + this.nombre + "!");
            } else {
                alert("Lo sentimos, no eres mayor de edad...");
            }
        },
    
        obtenerCiudad: function() {
            while (this.ciudadUsuario === "BARCELONA" && this.ciudadUsuario === "MADRID") {
                this.ciudadUsuario = prompt("Ingresa tu ciudad: BARCELONA o MADRID").toUpperCase();
                if (this.ciudadUsuario === "BARCELONA" || this.ciudadUsuario === "MADRID") {
                    break;
                } 
                else {
                    alert("Ciudad inválida, inténtalo de nuevo");
                }
            }
        },
    
        tipoDeEntrada: function() {
            this.tipoEntradas = prompt("Ingresa el tipo de entrada GENERAL o VIP").toUpperCase();
    
            while (this.tipoEntradas !== "GENERAL" && this.tipoEntradas !== "VIP") {
                alert("Entrada no disponible");
                this.tipoEntradas = prompt("Ingresa el tipo de entrada GENERAL o VIP").toUpperCase();
            }
        },
    
        cantidadDeEntradas: function() {
            let intentoEntradas = 0;
    
            while (intentoEntradas < 3) {
                this.cantidadEntradas = parseInt(prompt("Ingresa la cantidad de entradas (límite de 20 entradas por persona)"));
    
                if (!isNaN(this.cantidadEntradas) && this.cantidadEntradas > 0 && this.cantidadEntradas <= 20) {
                    return;
                } else {
                    alert("Número de entradas inválido");
                    intentoEntradas += 1;
                }
                if (intentoEntradas === 3) {
                    alert("Has alcanzado el máximo de intentos para ingresar el número de entradas");
                    return;
                }
            }
        },
    
        calcularEntradas: function() {
            let total = 0;
    
            if (this.tipoEntradas === "GENERAL") {
                total = 40 * this.cantidadEntradas;
            } 
            else if (this.tipoEntradas === "VIP") {
                total = 100 * this.cantidadEntradas;
            }
    
            alert("El total a pagar es de: " + total + "€");
        },
    
        confirmarPago: function() {
            let abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)").toUpperCase();
    
            if (abonar === "SI" || abonar === "S") {
                this.contIntentos((intentosDeFecha) => {
                    this.fecha = prompt("Ingresa la fecha de las funciones disponibles: 05/06/24 o 10/06/24");
    
                    if (this.fecha === "05/06/24" || this.fecha === "10/06/24") {
                        this.mail = prompt("Ingresa tu correo electrónico y se te enviará un enlace para realizar el pago");
                        alert("¡Gracias!");
                        return false;
                    } 
                    else {
                        alert("Fecha incorrecta");
                        return true;
                    }
                });
            } 
            else if (abonar === "NO" || abonar === "N") {
                alert("Vuelve pronto :(");
            } 
            else {
                alert("Respuesta no válida, vuelve a intentarlo más tarde...");
            }
        },
    
        contIntentos: function(procesoIntentos, maxIntentos = 3) {
            let intentos = 0;
            while (intentos < maxIntentos) {
                if (!procesoIntentos(intentos)) {
                    return;
                }
                intentos += 1;
                if (intentos === maxIntentos) {
                    alert("Has alcanzado el máximo de intentos.");
                }
            }
        }
    };
    
    usuario.obtenerNombre();
    usuario.validarEdad();
    
    if (usuario.edad < 18) {
        alert("Lo sentimos, no puedes continuar debido a tu edad.");
        return;
    }
    
    usuario.obtenerCiudad();
    usuario.tipoDeEntrada();
    usuario.cantidadDeEntradas();
    
    if (!isNaN(usuario.cantidadEntradas) && usuario.cantidadEntradas > 0 && usuario.cantidadEntradas <= 20) {
        usuario.calcularEntradas();
        usuario.confirmarPago();
    
        let usuarioCompleto = {
            nombre: usuario.nombre,
            edad: usuario.edad,
            ciudadUsuario: usuario.ciudadUsuario,
            tipoEntradas: usuario.tipoEntradas,
            cantidadEntradas: usuario.cantidadEntradas,
            mail: usuario.mail,
            fecha: usuario.fecha
        };
    
        usuarios.push(usuarioCompleto);
    }
    
    console.log("Usuarios:");
    
    usuarios.forEach(function(usuario) {
        console.log(usuario);
    });
    
}

DatosUsuario();
