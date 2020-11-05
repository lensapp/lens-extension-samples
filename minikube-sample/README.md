# Lens "Minikube" Extension

Simple Lens extension that automatically adds "minikube" workspace and cluster if minikube is installed.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/minikube-sample ~/.k8slens/extensions/minikube-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/minikube-sample
make build
```

OR

```sh
cd lens-extension-samples/minikube-sample
npm install
npm run build
```

## Test

Open Lens application and navigate to a cluster. You should see "Hello World" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/minikube-sample
```

Restart Lens application.
