# Lens "Hello World" Sample Extension

Simple Lens extension that adds "Hello World" page to a cluster menu.

## Install

First you will need to clone the [Lens Extension samples](https://github.com/lensapp/lens-extension-samples) repository to your local machine:

```sh
git clone https://github.com/lensapp/lens-extension-samples.git
```

Next you need to create a symlink from the directory that Lens will monitor for user installed extensions to the sample extension, in this case **helloworld-sample**:

```sh
mkdir -p ~/.k8slens/extensions
cd ~/.k8slens/extensions
ln -s <lens-extension-samples directory>/helloworld-sample helloworld-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd <lens-extension-samples directory>/helloworld-sample
make build
```

OR

```sh
cd <lens-extension-samples directory>/helloworld-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd <lens-extension-samples directory>/helloworld-sample
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Hello World" in a menu.
