import { Command } from "@oclif/core";
import { readFileSync } from "fs";
import { IDesignTokenConfig } from "../types/design-token-config";
import configChecker from "./configChecker";

export default function getConfig(command: Command): IDesignTokenConfig {
  // Check if the "design-token.config.json" exist
  configChecker(command);

  command.log("Reading design-token.config.json ...");

  let configRaw = readFileSync("design-token.config.json", "utf8");
  let config = JSON.parse(configRaw) as IDesignTokenConfig;

  return config;
}
