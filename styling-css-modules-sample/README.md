# Lens "Styling with CSS Modules" Sample Extension

Simple Lens extension that modifies basic ["Hello World"](../helloworld-sample) sample by using [CSS Modules](https://github.com/css-modules/css-modules) styling method and assisting [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules) plugin to enable types.

CSS Modules is a technique which help to securely encapsulate extention styles and keep them scoped locally. It provides an easy way to access CSS rules and changes class names on build to unique ones.

## Styling documentation
Please follow the [instructions in the documentation](https://docs.k8slens.dev/latest/extensions/capabilities/styling/) for extension styling details.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/styling-css-modules-sample ~/.k8slens/extensions/styling-css-modules-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/styling-css-modules-sample
make build
```

OR

```sh
cd lens-extension-samples/styling-css-modules-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd lens-extension-samples/styling-css-modules-sample
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Styling with Emotion" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/styling-css-modules-sample
```

Restart Lens application.