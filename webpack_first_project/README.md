### Webpack First Project

Trying to get up and running with Webpack.
Following [SurviveJS](http://survivejs.com/).



### Setting up

In the project root

```sh
npm init -y # -y gives you default *package.json*
```

Add to the `.gitignore`:

```sh
node_modules
```

Install webpack locally

```sh
npm i webpack --save-dev
```


Create the following assets,

```sh
app/component.js
app/index.js
build/index.html
```

where in the `index.html` we load the script `bundle.js`.


Now, create the **webpack** config file.
Check the `webpack.config.js` for details and inspiration.

If you run `node_modules/.bin/webpack` it should build the first files and by going to `build/index.html` you should see the app running.




