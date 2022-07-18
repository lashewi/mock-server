# mock-server

## Documentaion of server : [json-server](https://github.com/typicode/json-server)

### Plural routes

```
GET http://localhost:3000/users
GET http://localhost:3000/users/1
GET http://localhost:3000/products
GET http://localhost:3000/products/GGOEAFKA087499
```
### Paginate
```
http://localhost:3000/products?_page=1&_limit=5
```

### Sort
```
http://localhost:3000/products?_sort=name&_order=asc
```

### Filter
```
http://localhost:3000/products?category=apparel&subcategory=headgear
```