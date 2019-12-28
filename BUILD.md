# BUILD

To build the YouTube Notes Extension a couple of dependencies need to be
installed. The extension is built with `nodejs` and `webpack` is used as the
primary build tool. The section below takes you though the required steps to
install the prerequisites.

## Prerequisites

The links below help you get started on installing `nodejs` and `npm` the
package manager for node. Follow the instructions in the links for your specific
patform below:

- [Node.js MacOS Install](https://treehouse.github.io/installation-guides/mac/node-mac.html "Node.js MacOS Install")
- [Node.js Windows Install](https://treehouse.github.io/installation-guides/windows/node-windows.html "Node.js Windows Install")
- [Node.js Linux Install](https://treehouse.github.io/installation-guides/linux/node-linux.html "Node.js Linux Install")

## Installing Packages

Now that you have `nodejs` and `npm` setup, install the required dependencies
using the command below.

```bash
npm install
```

## Packaging

Now that we have the requisite dependencies for building the chrome extension.
Let's build and package the extension using the command below:

```bash
npm run-script build
```

This creates a new build folder in the root directory and this folder is the
built representation of the chrome extension that can be uploaded in the
extensions tab in chrome.

