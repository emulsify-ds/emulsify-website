---
title: Emulsify Starter
pageTitle: Emulsify Starter
description: Learn more about the Emulsify Starter
---

Emulsify Starter is a scaffolding repository for the Emulsify CLI. It creates a standalone, platform-agnostic design system scaffold that runs outside of a CMS or application platform. Generated projects use Emulsify Core 4 and run Storybook plus asset builds through Vite, with configuration overrides in `config/emulsify-core/`.

## Installation

```bash
emulsify init "My Project" ./ --platform none
cd my-project
emulsify system install
```

The `[path]` argument is the parent directory. The CLI creates the project inside it using the machine name (for example, `My Project` becomes `my-project`). Use `--machineName` to set the folder name exactly. After init, run `emulsify system install` to choose a component system.

### Requirements

1. [Node v24.13.0 or newer (we recommend NVM)](https://github.com/nvm-sh/nvm)
2. [Emulsify CLI](/docs/supporting-projects/emulsify-cli) (required to create the project with `emulsify init` and to install components from an external library.)

## Repository

[https://github.com/emulsify-ds/emulsify-starter](https://github.com/emulsify-ds/emulsify-starter)