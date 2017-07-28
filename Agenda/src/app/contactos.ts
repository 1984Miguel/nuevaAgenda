export class Contacto {

    constructor(
        public id : number,
        public nombre: string,
        public apellido?: string,
        public telefono?: string,
        public correo?: string)
    {}

// creamos instancia de tipo "Contacto a partir de un objeto JSON"
    static nuevodesdeJson(json: any): Contacto{
        return new Contacto(
            json.id,
            json.nombre,
            json.apellido,
            json.telefono,
            json.correo
        );
    }


// creamos array de instancias
    static nuevaColeccionDesdeJson(json: any[]): Contacto[]{
        return json.map((contactoJson: any) : Contacto =>{
            return Contacto.nuevodesdeJson(contactoJson);
        });
    }


}
