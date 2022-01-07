import { IFigmaExportSetting, TBlendMode } from "./IFigmaProperty";

export interface IFigmaVectorNode {
  // If true, layer is locked and cannot be edited
  // default: false
  locked: boolean;

  // An array of export settings representing images to export from the node
  // default: []
  exportSettings: IFigmaExportSetting;

  // How this node blends with nodes behind it in the scene
  // (see blend mode section for more details)
  blendMode: TBlendMode;

  // Keep height and width constrained to same ratio
  // default: false
  preserveRatio: boolean;
}
