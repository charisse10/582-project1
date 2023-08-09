# PORTFOLIO APP
#### This is a portfolio web app where projects are showcased for viewing and liking users's projects.

## Project Features

### I. DISPLAY
```
1. Project title
2. Description of the project
3. Featured image of the project

```
### II. CUSTOMIZATION
```
1. Liking and undoing the like
2. Sending the liked project/projects to a separate component called Favourites
3. Removing the liked project/projects from the Favourites component
```

### III. PUBLISH
```

```


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
3. displays class when like button is clicked
4. emits add to favourites event when like button is clicked
5. emits unlike event when dislike button is clicked
6. emits remove from favourites event when dislike button is clicked

```
### FavouritesList
```
1. renders props: courses correctly
2. emits unliked event when action is made in ProjectItem
3.adds the project to favourites when action is made
4. emits disliked event when action is made in ProjectItem
5. removes the project from favourites when action is made

```
