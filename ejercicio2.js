let contrasena;
        
do {
    contrasena = prompt("Ingresa la contraseña:");
    
    if (contrasena !== "1234") {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
} while (contrasena !== "1234");
        
alert("¡Contraseña correcta! Acceso concedido.");