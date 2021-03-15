import * as vscode from 'vscode';
import { XMLHttpRequest } from 'xmlhttprequest-ts';



var path = require("path");

export function activate(context: vscode.ExtensionContext) {

    let convert = vscode.commands.registerCommand('datapp.convert', (uri:vscode.Uri) => {
      var p = String(uri.path);
      var newname = p.substr(0, p.lastIndexOf(".")) + "_converted.csar";
      var commandstring = "curl -F file=@"+p+" -o "+newname+"  0.0.0.0:8083/RadonDataPipeline/convert";
      var terminal = vscode.window.createTerminal({name:"RADON Data Pipeline plugin", shellPath:"bash", shellArgs:["-c", commandstring]});
      terminal.show();
	});


	context.subscriptions.push(convert);
}

export function deactivate() {}

