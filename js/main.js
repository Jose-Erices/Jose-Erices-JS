//Primera Entrega Js"

let validarIngreso = true;

while (validarIngreso) {
  let Cliente = prompt(
    "!Bienvenidos al simulador de remuneraciones! por favor ingrese su nombre para continuar ➡️"
  );
  if (Cliente != "") {
    alert(
      "Un gusto poder ayudarte " +
        Cliente +
        " 😊, Por favor selecciona Aceptar ⬇️"
    );
    validarIngreso = false;
  } else {
    alert("Por favor rellenar los campos solicitados 🙌");
  }
}

function calcularSueldo(
  LiquidoRecibir,
  AFP = 0.11,
  impuesto = 0.04,
  isapre = 0.045
) {
  let montoDescontado =
    LiquidoRecibir * AFP + LiquidoRecibir * impuesto + LiquidoRecibir * isapre;
  alert("El descuento es de: $" + montoDescontado.toLocaleString("es-CL"));
  return LiquidoRecibir - montoDescontado;
}

let ingresoCliente = true;

while (ingresoCliente) {
  let remuneracion;

  while (isNaN(remuneracion) || remuneracion === null) {
    remuneracion = parseFloat(
      prompt("Ingrese por favor la remuneración que deseas calcular").replace(",", "")
    );
  }
  let liquidoPorRecibir = calcularSueldo(remuneracion);
  alert(
    "El líquido a recibir es de: $" + liquidoPorRecibir.toLocaleString("es-CL")
  );
  let respuestaingresoCliente = prompt(
    "¿Desea realizar otra operación de cálculo de remuneración? Ingrese SI o NO"
  );
  if (validarRta(respuestaingresoCliente, "no") == true) {
    alert("¡Muchas Gracias por preferirnos!");
    ingresoCliente = false;
  }
}

function validarRta(respuesta, textoValidar) {
  if (respuesta.toLowerCase() == textoValidar) {
    return true;
  }
  return false;
}

