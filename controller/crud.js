//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO// Exporta una función llamada 'save', que se puede usar en otros archivos al importar este módulo.
exports.save = (req, res) => {

    // Extrae el valor del campo 'user' del cuerpo de la solicitud HTTP.
    const user = req.body.user;

    // Extrae el valor del campo 'rol' del cuerpo de la solicitud HTTP.
    const rol = req.body.rol;

    // Realiza una consulta SQL para insertar un nuevo registro en la tabla 'users'.
    // 'conexion.query' ejecuta una instrucción SQL. Aquí usamos 'INSERT INTO' para añadir datos.
    // 'SET ?' permite pasar un objeto con los valores a insertar. Esto ayuda a prevenir inyecciones SQL.
    conexion.query('INSERT INTO users SET ?', { user: user, rol: rol }, (error, results) => {

        // Si ocurre un error durante la consulta SQL, este bloque se ejecutará.
        if (error) {
            console.log(error); // Imprime el error en la consola para depuración.
        } else {
            // Si no hay errores, redirige al usuario a la página principal.
            res.redirect('/'); // La redirección indica éxito y devuelve al usuario a la ruta raíz.
        }
    });
};
//ACTUALIZAR un REGISTRO// Exporta una función llamada 'update', que puede ser utilizada en otros archivos al importar este módulo.
exports.update = (req, res) => {

    // Extrae el valor del campo 'id' del cuerpo de la solicitud HTTP.
    const id = req.body.id;

    // Extrae el valor del campo 'user' del cuerpo de la solicitud HTTP.
    const user = req.body.user;

    // Extrae el valor del campo 'rol' del cuerpo de la solicitud HTTP.
    const rol = req.body.rol;

    // Realiza una consulta SQL para actualizar un registro existente en la tabla 'users'.
    // 'UPDATE users SET ? WHERE id = ?' especifica que se deben actualizar los campos indicados en 'SET ?'
    // para el registro que coincide con el 'id' especificado.
    conexion.query(
        'UPDATE users SET ? WHERE id = ?', // Consulta SQL
        [{ user: user, rol: rol }, id],    // Valores a actualizar y el ID del registro
        (error, results) => {              // Callback que se ejecuta cuando finaliza la consulta
            if (error) {
                // Si ocurre un error durante la ejecución de la consulta, imprime el error en la consola.
                console.log(error);
            } else {
                // Si no hay errores, redirige al cliente a la página principal ('/').
                res.redirect('/');
            }
        }
    );
};
