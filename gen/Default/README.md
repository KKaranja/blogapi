# themer - Default

## VS Code

Copy (or symlink) the generated package directory into the VS Code extensions directory:

```
cp -R 'VS Code/themer-default' ~/.vscode/extensions/
```

Then reload or restart VS Code. The generated theme package should be in the list of installed extensions, and "Themer Default Dark" / "Themer Default Light" will be available in the list of themes.

## Alacritty

1. Paste the contents of `Alacritty/Themer Default.yml` into your Alacritty config file.
2. Select the desired theme by setting the `colors` config key to reference the scheme's anchor (i.e., `colors: *light` or `colors: *dark`).

## Diamonds wallpaper

Files generated:

* `Diamonds wallpaper/themer-default-dark-2880x1800.svg`
* `Diamonds wallpaper/themer-default-light-2880x1800.svg`

## Hyper

First, copy (or symlink) the outputted package directories to the Hyper local plugins directory:

```
cp -R 'Hyper/hyper-themer-default-dark' ~/.hyper_plugins/local/
cp -R 'Hyper/hyper-themer-default-light' ~/.hyper_plugins/local/
```

Then edit `~/.hyper.js` and ad the package to the `localPlugins` array:

```
...
localPlugins: [
  'hyper-themer-default-dark' // or 'hyper-themer-default-light'
],
...
```

## Block Wave wallpaper

Files generated:

* `Block Wave wallpaper/themer-default-dark-2880x1800.svg`
* `Block Wave wallpaper/themer-default-light-2880x1800.svg`