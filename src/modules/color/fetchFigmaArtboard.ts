import { Command } from "@oclif/core";
import getConfig from "../../utils/getConfig";
import * as qs from "query-string";
import axios, { AxiosRequestConfig } from "axios";

interface ArtboardQuery {
  "node-id"?: string;
}
export default async function fetchFigmaArtboard(command: Command) {
  let config = getConfig(command);

  command.log("config: ", config);

  const colorArtboardParsed = qs.parseUrl(config.artboard.color);
  const query = colorArtboardParsed.query as ArtboardQuery;

  if (!query["node-id"]) {
    command.error("artboard color has no node-id");
  }

  const colorArtboardId = query["node-id"];

  command.log("node-id:", query["node-id"]);

  const requestConfig: AxiosRequestConfig = {
    method: "GET",
    baseURL: "https://api.figma.com",
    url: `/v1/files/${config.figmaFilesId}/nodes`,
    params: {
      ids: `${colorArtboardId}`,
    },
    headers: {
      "X-Figma-Token": config.figmaToken,
    },
  };

  axios(requestConfig)
    .then((res) => {
      command.log(res.data);
    })
    .catch((err) => {
      // console.log(err);
      console.log("Error: ", err.message);
    });
}
