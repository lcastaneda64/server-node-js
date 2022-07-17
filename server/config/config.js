//Variables de entorno

//Configuración del puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Semilla de autenticación
process.env.AUTH_SEED = "*&%76345r$34F467¡?#23[]!°!";

//Configuración de la base de datos
if(process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/lcastaneda?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/lcastaneda?retryWrites=true&w=majority";
}
