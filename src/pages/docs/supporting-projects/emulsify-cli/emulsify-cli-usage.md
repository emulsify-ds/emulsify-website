---
title: Emulsify CLI Usage
pageTitle: Emulsify CLI Usage
description: ''
---

This project is a command line interface for working with Emulsify. It has a few primary responsibilities:

- Make initializing Emulsify projects very simple.
- Allow developers to select an Emulsify system (such as the [Emulsify UI Kit](/docs/systems/ui-kit)).
- Give developers the ability to pull in components from the system they're using, when/if they need them.

## Projects, Systems and Variants

You will see the terms "Projects", "Systems" and "Variants" used throughout this documentation, so it's important for you to understand what they mean.

- **Project**: an implementation of an Emulsify starter, such as [emulsify-drupal-starter](https://github.com/emulsify-ds/emulsify-drupal-starter).
- **System**: a design system that defines components, and assets. Emulsify projects opt into using systems using cli commands. Once a system has been selected for a project, the system will mandate how components are organized and how required components/assets are installed. It also gives developers the ability to find and install non-required components.
- **Variant**: a system might have a Drupal variant, a WordPress variant, and a platform-neutral variant. The system is the same (imagine Material-UI is a system), but each variant may define different types of components, or have different organization patterns that are compatible with different platforms. Systems may have as many variants as they want. Supported platform values are `drupal`, `wordpress`, and `none`.

### Using the CLI

#### Init

The cli exposes an init command that allows developers to easily create an Emulsify project.

When the init command is run, it will attempt to detect the platform you're using, and use that to choose a starter (such as [emulsify-drupal-starter](https://github.com/emulsify-ds/emulsify-drupal-starter)). However, you can use the command options to specify any platform, starter, and starter version/branch/tag. If the cli cannot determine the platform you're using, it will instruct you to provide those details yourself.

```
emulsify init --help
Usage: emulsify init [options] [name] [path]

Create a new Emulsify project from a starter repository

Options:
  -m, --machineName <machineName>         Machine-friendly project folder and config name. If omitted, this is generated from the project name.
  -s, --starter <repository>              Starter Git repository to clone.
  -c, --checkout <commit/branch/tag>      Starter commit, branch, or tag to check out after clone.
  -p, --platform <none|drupal|wordpress>  Project platform to use when auto-detection is unavailable or should be overridden.
  -y, --yes                               Accept default init values for any missing options without prompting.
  -h, --help                              display help for command
```

The `[path]` argument is the parent directory: the project is created inside it using the machine name. If the target already exists, init stops without overwriting it.

Example usage:

```
cd ~/projects/my-drupal-codebase
emulsify init "Theme Name"

# If you are not relying on the cli to detect the platform, and use a starter
# (creates ./web/themes/custom/theme_name):
emulsify init "Theme Name" ./web/themes/custom --starter https://github.com/emulsify-ds/emulsify-drupal-starter --checkout main --platform drupal
```

#### System

Once you have initialized a project, you can use system commands available within the cli to list the out-of-the-box systems, and install a system into your current project.

```
emulsify system --help
Usage: emulsify system [options] [command]

List, create, install, or detach component systems

Options:
  -h, --help                display help for command

Commands:
  list|ls                   List built-in systems available for installation
  create [options] [name]   Scaffold a standalone component-system repository
  install [options] [name]  Install a component system or open the guided
                            installer
  detach [options]          Detach the configured system and keep project
                            components
  help [command]            display help for command
```

The `emulsify system list|ls` command lists all of the out-of-the-box systems Emulsify supports at the moment.

Example usage:

```
emulsify system list
compound - https://github.com/emulsify-ds/compound.git
emulsify-ui-kit - https://github.com/emulsify-ds/emulsify-ui-kit.git
```

The `emulsify system install` command, when run within an Emulsify project, will install a system within the given project. You can pass the name of an out-of-the-box system, like `emulsify-ui-kit`, or you can pass a repository, and commit/branch/tag of any system you'd like to use. If you run it with no arguments in an interactive terminal, it opens a guided installer.

```
emulsify system install --help
Usage: emulsify system install [options] [name]

Install a component system or open the guided installer

Options:
  -r, --repository <repository>       Git repository containing the system to
                                      install. Remote URLs must end in .git;
                                      local paths are accepted.
  -c, --checkout <commit/branch/tag>  Commit, branch, or tag to check out.
                                      Required when --repository is used.
  --variant <platform-expression>     Exact system variant platform expression
                                      to install.
  -a, --all                           Install every component in the selected
                                      variant. Without this flag, only required
                                      components are installed.
  -y, --yes                           Accept the final guided-install review
                                      without prompting.
  -h, --help                          display help for command
```

Example usage:

```
cd ~/projects/my-drupal-codebase/web/themes/custom/my_theme
emulsify system install emulsify-ui-kit
 > Successfully installed the emulsify-ui-kit system using the drupal variant.


# If you are passing in your own repo/checkout
emulsify system install --repository https://github.com/your-org/your-custom-system.git --checkout v1.0.0
```

In CI or other non-interactive shells, pass a built-in system name, or both `--repository` and `--checkout`.

#### Components

In your project, once you have selected a system, you may use the `components` commands within the cli to find, and install components that are available within your system.

```
emulsify component --help
Usage: emulsify component|components [options] [command]

List, install, create, or customize components

Options:
  -h, --help                        display help for command

Commands:
  list|ls [options]                 List components available from the installed
                                    system and variant
  install|i [options] [name]        Install one component from the installed
                                    system and variant
  create|c [options] [name]         Generate a new local component in the
                                    current project
  eject-templates [options] [type]  Write editable copies of the built-in
                                    component templates
  help [command]                    display help for command
```

**Listing components**

The `emulsify component list|ls` will return a list of components available within the system you selected for your project.

Example usage:

```
cd ~/projects/my-drupal-codebase/web/themes/custom/my_theme
emulsify component list

components -> accordion
components -> announcement
components -> audio-player
components -> blockquote
components -> button
components -> card
...
```

**Installing components**

Once you've found a component you want to install, you can use the `emulsify component install` command to fetch it into your project.

Example usage:

```
cd ~/projects/my-drupal-codebase/web/themes/custom/my_theme
emulsify component install card
 > Success! The card component has been added to your project.
```

If the component declares dependencies in the system, those components are installed too.

**Force installing components**

If you attempt to install a component that already exists within your project, the cli asks whether you want to replace it. In a non-interactive shell it stops with an error instead. To overwrite the existing component without a prompt, pass the `--force` flag.

Example usage:

```
emulsify component install card
 > The component "card" already exists. Would you like to replace it? (y/N)

emulsify component install card --force
 > Success! The card component has been added to your project.
```

**Installing all available components**

If you would like to simply install all components available within the system you've selected, use the `--all` flag. This replaces any components that already exist in your project.

Example usage:

```
emulsify component install --all
 > Success! The accordion component has been added to your project.
 > ...
```

To preview what an install would do without changing any files, add `--dry-run`:

```
emulsify component install card --dry-run
emulsify component install --all --dry-run
```

For every command and option, run `emulsify <command> --help`. That's pretty much it. Have fun, and please feel free to open issues if you discover a bug, or have an improvement to suggest!
