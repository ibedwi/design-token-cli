import { Command, Flags } from "@oclif/core";
import fetchFigmaArtboard from "../../modules/color/fetchFigmaArtboard";

export default class Color extends Command {
  static description = "Say hello";

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Color);

    fetchFigmaArtboard(this);
  }
}
