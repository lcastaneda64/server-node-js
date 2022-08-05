const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');
const hogan = require('hogan.js');

class Email{

    constructor() {
        this.transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "examplenodemailer2022@gmail.com",
                pass: "ddrbiyxfsxhjrxwp"
            }
        });
    }

    sendEmail(email, data){

        return new Promise((resolve, reject) => {
            const template = fs.readFileSync(path.resolve(__dirname, "../assets/templates/template.html"), "utf-8" );  
            const compileTemplate = hogan.compile(template);
            
            const {strNombre, strPrimerApellido, strSegundoApellido, nmbEdad} = data;

            this.transport.sendMail({
                from: '"Luis Castañeda - UTM000000" <examplenodemailer2022@gmail.com>',
                to: email,
                subject: "Correo electrónico de prueba",
                html: compileTemplate.render({strNombre, strPrimerApellido, strSegundoApellido, nmbEdad})
            }).then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });

    }
}

module.exports = new Email();