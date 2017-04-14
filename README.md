# Blockly Workspace Factory (Bootstrap)

The official blockly repository comes with a demo called `blockfactory` that
contains the `workspacefactory`. This demo does not work well with Bootstrap, it
comes with a lot of other things that was not needed (e.g. blocks creations),
so I created this standalone version working with Bootstrap.

## Usage

### Initialize the factory

In `js/blocklyfactory.js`, you can modify `toolbox` and `workspaceBlocks` to
start with an already defined

```javascript
var toolbox = '<xml></xml>';
var workspaceBlocks = '<xml></xml>';
```

The initial blocks for the toolbox and workspace editors are given by
`Toolbox.FULL` (the full toolbox XML), a complete description can be found in
`src/toolbox.js`

### Get the XML created after modification

You can get the result of your modification as XML text by calling

```javascript
var toolboxGeneratedXml = factoryController.getToolboxXml();
var workspaceGeneratedXml = factoryController.getWorkspaceXml();
```
