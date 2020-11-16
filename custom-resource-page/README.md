# Lens Custom Resource Page Extension

Simple Lens extension that shows custom page and details for Certificates CRD.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/custom-resource-page ~/.k8slens/extensions/custom-resource-page
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/custom-resource-page
make build
```

OR

```sh
cd lens-extension-samples/custom-resource-page
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd lens-extension-samples/custom-resource-page
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Certificates" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/custom-resource-page
```

Restart Lens application.