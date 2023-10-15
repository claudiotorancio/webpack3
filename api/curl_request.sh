curl -X POST "https://webpack3.vercel.app/api/createBook" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Ejemplo de Título",
    "author": "Ejemplo de Autor",
    "isbn": "Ejemplo de ISBN"
  }'
