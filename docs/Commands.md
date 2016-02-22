
# Commands for `roc`

## General Information
All commands can be called with some additional options as can be seen below.

### General options

| Name            | Description                                                                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -c, --config    | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --debug     | Enable debug mode.                                                                                            | No       |
| -D, --directory | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help      | Output usage information.                                                                                     | No       |
| -v, --version   | Output version number.                                                                                        | No       |

## Commands
* [init](#init)
* [list-settings](#list-settings)
* [markdown-commands](#markdown-commands)
* [markdown-settings](#markdown-settings)
* [new](#new)

## init
__Init a new project.__

```
roc init [template] [version]
```
The __init__ command can be used to initiate a new Roc project and currently expects that it's run inside an empty directory. As can be seen above it takes two optional arguments, template and version. If no template is given a prompt will be shown with the possible alternatives that exists. Currently these alternatives are coded into Roc and matches `web` and `web-react`.

### Arguments

| Name        | Description                                                       | Required | Type       |
| ----------- | ----------------------------------------------------------------- | -------- | ---------- |
| template    | The template to use. Matches Github structure with Username/Repo. | No       | `Filepath` |
| version     | The version to use.                                               | No       | `String`   |

### Command options

| Name        | Description                                                       | Required | Type       |
| ----------- | ----------------------------------------------------------------- | -------- | ---------- |
| -f, --force | Ignore non empty directory warning.                               | No       | `Boolean`  |
| -l, --list  | List the available versions of a template.                        | No       | `Boolean`  |

## list-settings
__Prints all the available settings that can be changed.__

```
roc list-settings
```

## markdown-commands
__Create markdown documentation for the commands.__

```
roc markdown-commands [settings-link]
```

### Arguments

| Name          | Description                                                                  | Required | Type     |
| ------------- | ---------------------------------------------------------------------------- | -------- | -------- |
| settings-link | A link that should be used when generation to link to the settings location. | No       | `String` |

## markdown-settings
__Prints all the available settings that can be changed in a markdown format.__

```
roc markdown-settings
```

## new
__Create a new project.__

```
roc new <name>  [template] [version]
```
Alias for "init" that always will try to create a new directory.

### Arguments

| Name        | Description                                                       | Required | Type       |
| ----------- | ----------------------------------------------------------------- | -------- | ---------- |
| name        | Name for a new directory to create the project in.                | Yes      | `String`   |
| template    | The template to use. Matches Github structure with Username/Repo. | No       | `Filepath` |
| version     | The version to use.                                               | No       | `String`   |

### Command options

| Name        | Description                                                       | Required | Type       |
| ----------- | ----------------------------------------------------------------- | -------- | ---------- |
| -f, --force | Ignore non empty directory warning.                               | No       | `Boolean`  |
| -l, --list  | List the available versions of a template.                        | No       | `Boolean`  |

