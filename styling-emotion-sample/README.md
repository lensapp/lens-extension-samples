# Lens "Styling with Emotion" Sample Extension

Simple Lens extension that modifies basic ["Hello World"](../helloworld-sample) sample by using CSS-in-JS styling method with [Emotion](https://emotion.sh/docs/introduction) library.

Emotion is a library designed for writing css styles with JavaScript. It is one of the ways for styling your Lens extensions.

## Styling documentation
Please follow the [instructions in the documentation](https://docs.k8slens.dev/latest/extensions/capabilities/styling/) for extension styling details.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/styling-emotion-sample ~/.k8slens/extensions/styling-emotion-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/styling-emotion-sample
make build
```

OR

```sh
cd lens-extension-samples/styling-emotion-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd lens-extension-samples/styling-emotion-sample
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Styling with Emotion" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/styling-emotion-sample
```

Restart Lens application.