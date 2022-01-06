# Anova's node-typescript-jest-boilerplate

Boilerplate for a node server or library written in Typescript, using jest as
the test runner.

## Usage

Select "Use this template" above to create a new repo from this template.

## Build

Run `npm build`. Compiled TS will be in a new `dist/` directory`.

## Modifications

If this is for a library only, then chances are you don't need nodemon. You can
make the following changes to remove it:

- Delete `nodemon.json`
- Remove `watch` from `package.json` scripts
- Remove `nodemon` from `package.json` devDependencies
