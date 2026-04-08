Preguntas 

1-¿Que significa status 201 creado y en donde aparecece?
 El status 201 Created es un código HTTP que indica que una solicitud fue exitosa y que el servidor creó un nuevo recurso; suele aparecer en APIs (especialmente en peticiones POST) y puede verse en herramientas como Postman o en la pestaña de red del navegador.

2-¿Como verificar la actualizacion de los datos por medio de la terminal?
 Para verificar la actualización de datos desde la terminal, se realiza una solicitud al servidor (por ejemplo con curl) y se revisa la respuesta obtenida; si los datos fueron actualizados correctamente, la información devuelta reflejará los cambios y además se puede confirmar el éxito de la operación mediante el código de estado HTTP, como 200 OK o 201 Created.

3-¿Cuales son los estatus existentes y comunes?
 Los códigos de estado HTTP más comunes se agrupan en cinco categorías: 1xx (informativos), que indican que la solicitud está en proceso; 2xx (éxito), como 200 OK y 201 Created, que señalan que la petición fue exitosa; 3xx (redirección), como 301 y 302, que indican que el recurso se ha movido; 4xx (errores del cliente), como 400 Bad Request, 401 Unauthorized y 404 Not Found, que ocurren por problemas en la solicitud; y 5xx (errores del servidor), como 500 Internal Server Error o 503 Service Unavailable, que indican fallos en el servidor.

4-¿Cuando hacer los estatus existentes y comunes?
 Los códigos de estado HTTP más comunes se agrupan en cinco categorías: 1xx (informativos), que indican que la solicitud está en proceso; 2xx (éxito), como 200 OK y 201 Created, que señalan que la petición fue exitosa; 3xx (redirección), como 301 y 302, que indican que el recurso se ha movido; 4xx (errores del cliente), como 400 Bad Request, 401 Unauthorized y 404 Not Found, que ocurren por problemas en la solicitud; y 5xx (errores del servidor), como 500 Internal Server Error o 503 Service Unavailable, que indican fallos en el servidor.

5-¿Que es SOAP? ¿Cuaes son las diferencias con el resto?
 SOAP (Simple Object Access Protocol) es un protocolo de comunicación que se usa en servicios web para intercambiar información entre sistemas mediante mensajes estructurados en XML.
 
 A diferencia de otras alternativas como REST, SOAP es más estricto y formal: utiliza un formato fijo (XML), incluye reglas definidas para la comunicación (como contratos WSDL) y suele ser más seguro y robusto, pero también más pesado y complejo. En cambio, REST es más simple, flexible, usa comúnmente JSON, consume menos recursos y es más fácil de implementar, por lo que es más utilizado en aplicaciones modernas.

6-¿Que es grapql? ¿Cuales son las diferencias con rest?
 GraphQL es un lenguaje de consultas para APIs que permite al cliente pedir exactamente los datos que necesita y nada más.

 La diferencia con REST es que en REST existen múltiples endpoints (URLs) para cada recurso y a veces se reciben datos de más o de menos, mientras que con GraphQL hay un solo endpoint y el cliente define qué información quiere obtener, lo que lo hace más flexible y eficiente; sin embargo, REST es más simple, fácil de implementar y ampliamente usado, mientras que GraphQL puede ser más complejo de configurar y manejar.