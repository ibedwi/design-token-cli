oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g design-token-cli
$ design-token COMMAND
running command...
$ design-token (--version)
design-token-cli/0.0.0 darwin-x64 node-v14.17.6
$ design-token --help [COMMAND]
USAGE
  $ design-token COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`design-token help [COMMAND]`](#design-token-help-command)
* [`design-token plugins`](#design-token-plugins)
* [`design-token plugins:inspect PLUGIN...`](#design-token-pluginsinspect-plugin)
* [`design-token plugins:install PLUGIN...`](#design-token-pluginsinstall-plugin)
* [`design-token plugins:link PLUGIN`](#design-token-pluginslink-plugin)
* [`design-token plugins:uninstall PLUGIN...`](#design-token-pluginsuninstall-plugin)
* [`design-token plugins update`](#design-token-plugins-update)

## `design-token help [COMMAND]`

Display help for design-token.

```
USAGE
  $ design-token help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for design-token.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.9/src/commands/help.ts)_

## `design-token plugins`

List installed plugins.

```
USAGE
  $ design-token plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ design-token plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `design-token plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ design-token plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ design-token plugins:inspect myplugin
```

## `design-token plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ design-token plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ design-token plugins add

EXAMPLES
  $ design-token plugins:install myplugin 

  $ design-token plugins:install https://github.com/someuser/someplugin

  $ design-token plugins:install someuser/someplugin
```

## `design-token plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ design-token plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ design-token plugins:link myplugin
```

## `design-token plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ design-token plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ design-token plugins unlink
  $ design-token plugins remove
```

## `design-token plugins update`

Update installed plugins.

```
USAGE
  $ design-token plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
