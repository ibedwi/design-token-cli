import { Command } from "@oclif/core";
import { existsSync } from "fs";
import MESSAGE from "../message";
import SYSTEMCODE from "../systemCode";

/**
 * Check if the "design-token.config.json" exist
 * in the current working directory.
 */
export default function configChecker(command: Command) {
  if (!existsSync("./design-token.config.json")) {
    command.error(MESSAGE.ERROR_CONFIG_NOT_FOUND, {
      code: SYSTEMCODE.ERROR_CONFIG_NOT_FOUND,
    });
  }
}
