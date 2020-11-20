# Lens "Styling with Sass" Sample Extension

Simple Lens extension that modifies basic ["Hello World"](../helloworld-sample) sample by using Sass styles.

[Sass](https://github.com/sass/sass) is an superset of CSS with ability to add nesting rules, variables, mixins, conditions and much more. It is one of the ways for styling your Lens extensions.

## Styling documentation
Please follow the [instructions in the documentation](https://docs.k8slens.dev/latest/extensions/capabilities/styling/) for component styling rules, such as always select unique class names in order to prevent overwriting of parental Lens styles.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/styling-sass-sample ~/.k8slens/extensions/styling-sass-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/styling-sass-sample
make build
```

OR

```sh
cd lens-extension-samples/styling-sass-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd lens-extension-samples/styling-sass-sample
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Styling with Sass" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/styling-sass-sample
```

Restart Lens application.