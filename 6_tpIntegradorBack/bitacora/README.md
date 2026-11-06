# TP Integrador Back Div 132

## Los 3 grandes dolores de cabeza
1. Falta un `return` y nos devuelve un 404 y luego un 200 o nos sigue procesando lo de abajo

2. Falta el `next()` en el middleware y por tanto nunca se procesa la respuesta y queda colgando. Una conexion HTTP no termina hasta que se retorna la respuesta http

3. Falta el `.js` en las importaciones de modulos locales