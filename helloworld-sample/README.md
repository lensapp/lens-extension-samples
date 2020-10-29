# Lens "Hello World" Extension

Simple Lens extension that adds "Hello World" page to a cluster menu.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
cp -pr lens-extension-samples/helloworld-sample ~/.k8slens/extensions
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd ~/.k8slens/extensions/helloworld-sample
make build
```

OR

```sh
cd ~/.k8slens/extensions/helloworld-sample
npm install
npm run build
```

## Test

Open Lens application and navigate to a cluster. You should see "Hello World" in a menu.
