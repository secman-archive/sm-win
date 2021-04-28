const { Command, flags } = require("@oclif/command");
const PowerShell = require("powershell");

class UninstallCommand extends Command {
  async run() {
    const d = flags["delete-data"] | "";

    let ps = new PowerShell(`& $HOME/sm/uninstall.ps1 ${d}`);

    ps.on("output", (out) => {
      console.log(out);
    });
  }
}

UninstallCommand.description = `Uninstall your secman`;

UninstallCommand.flags = {
  "delete-data": flags.boolean({ char: "d", description: "delete data (~/.secman)" }),
};

module.exports = UninstallCommand;
