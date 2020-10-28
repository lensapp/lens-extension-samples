# Lens Extension API Samples

This repository contains sample code illustrating the Lens Extension API. You can read, play with or adapt from these samples to create your own extensions.

You can expect from each sample:

* An explanation of its functionality
* A gif or screenshot demonstrating its usage
* Link to a guide on Lens Documentation website, if it has one
* Code of the same style, enforced using ESLint

## Prerequisites

You need to have [node](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) installed on your system to run the examples. It is recommended to use the node version used for Lens development itself which is documented [here](https://github.com/lensapp/lens#development).

## Usage

To install one of the samples follow the below instructions:

### Linux

```sh
git clone https://github.com/lensapp/lens-extension-samples
mkdir -p ~/.k8slens/extensions
cp -pr ./lens-extensions-samples/<sample folder> ~/.k8slens/extensions/
cd ~/.k8slens/extensions/<sample folder>
npm install
npm run build
```

The extension will now be built. If Lens is already open then you can reload it to pick up the newly installed extension.

## Getting Started

* [Hello World Sample](helloworld-sample): The Hello World sample for Lens. See [Extension Anatomy](https://docs.k8slens.dev/extensions/get-started/anatomy/) documentation.

## Samples

<!-- SAMPLES_BEGIN -->
| Sample | Guide on Lens Documentation Website |
| ------ | ----- |
| [Hello World Sample](helloworld-sample) | [LensRendererExtension](https://docs.k8slens.dev/extensions/guides/renderer-extension/)  
