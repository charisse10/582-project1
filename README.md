# Portfoly'all
#### This is a portfolio web app where projects are showcased for viewing and liking from viewers.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Testing
```
Created test decription for each of the components I am expecting to make.
```
### ProjectItem
```
1. renders props: project when passed
2. emits like event when like button is clicked
3. displays class when liked is emmited
4. emits add to favourites event when add to favourites button is clicked
5. emits remove from favourites event when remove from favourites button is clicked
6. emits unlike event when like button is clicked
7. renders comment correctly
8. adds a comment when submit comment button is clicked
9. not add a comment when comment is empty
10. clears textarea when submit comment button is clicked

```
### FavouritesList
```
1. emits liked event when action is made in ProjectItem
2. emits unliked event when action is made in ProjectItem
```
