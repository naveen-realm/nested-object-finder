# nested-object-finder


## About The Project

To find the value of nested objects


## Prerequisites

The project use lodash function to get the nested object value. Hence it is required to add the below line in scripts section,
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

Note: The default value is what is returned if the key / path cannot be found. If you don't supply a default value undefined is returned instead. The lodash docs have some good info on this function as well: https://lodash.com/docs/4.17.15#get%20!


## Sample Data

Deeply nested object: 

```txt
const object = {
                  user: {
                           posts: {
                                     comments : 'Your article is inspiring'
                                  }
                        }
               }
```

Output:

```txt
// key
user.posts.comments
```

The result would be as shown below

```txt
//value
'Your article is inspiring'
```


## License

Distributed under the MIT License. See `LICENSE` for more information.

