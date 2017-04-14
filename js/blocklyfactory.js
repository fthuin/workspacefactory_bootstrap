var basicToolbox = Toolbox.FULL;

var toolbox = '<xml></xml>';
var workspaceBlocks = '<xml></xml>';

var factoryController = new FactoryController(toolbox, workspaceBlocks);
var preview = new Preview(factoryController);
factoryController.setPreview(preview);
factoryController.injectWorkspaces();
