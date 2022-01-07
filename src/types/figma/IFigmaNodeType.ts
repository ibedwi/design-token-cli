export type TFigmaChildrenNode =
  | IFigmaNodeDocument
  | IFigmaNodeCanvas
  | IFigmaNodeFrame
  | IFigmaNodeGroup
  | IFigmaNodeVector
  | IFIgmaNodeBooleanOperation
  | IFigmaNodeStar
  | IFigmaNodeLine
  | IFigmaNodeEllipse
  | IFigmaNodeRegularPolygon
  | IFigmaNodeRectangle
  | IFigmaNodeText
  | IFigmaNodeSlice
  | IFigmaNodeComponent
  | IFigmaNodeComponentSet
  | IFigmaNodeInstance
  | IFigmaNodeSticky
  | IFigmaNodeShapeWithText
  | IFigmaNodeConnector;

export interface IFigmaNode {
  // A string uniquely identifying this node within the document.
  id: string;
  // The name given to the node by the user in the tool.
  name: string;

  // Whether or not the node is visible on the canvas.
  // default: true
  visible?: boolean;

  // The type of the node
  type: string;

  // Data written by plugins that is visible only to the
  // plugin that wrote it. Requires the `pluginData`
  // to include the ID of the plugin.
  pluginData?: any;

  // Data written by plugins that is visible to all plugins.
  // Requires the `pluginData` parameter to include
  // the string "shared".
  sharedPluginData?: any;
}

export interface IFigmaNodeDocument extends IFigmaNode {
  children?: TFigmaChildrenNode[];
}

export interface IFigmaNodeFrame {
  // An array of nodes that are direct children of this node
  children: [];

  locked: "";
  background: "";
  backgroundColor: "";
  fills: "";
  strokes: "";
  strokeWeight: "";
  strokeAlign: "";
  cornerRadius: number;
  rectangleCornerRadii: number[];
  exportSetting: [];
  blendMode: "";
  preserveRatio: boolean;
  constraints: "";
  layoutAlign: string;
  transitionNodeID: "";
  transitionDuration: "";
  transitionEasing: "";
  opacity: number;
  absoluteBoundingBox: "";
  size: "";
  relativeTransform: "";
  clipsContent: boolean;
  layoutMode: string;
}

export interface IFigmaNodeCanvas {}

export interface IFigmaNodeGroup {}

export interface IFigmaNodeVector {}

export interface IFIgmaNodeBooleanOperation
  extends IFigmaNode,
    IFigmaNodeVector {}

export interface IFigmaNodeStar extends IFigmaNode, IFigmaNodeVector {}

export interface IFigmaNodeLine extends IFigmaNode, IFigmaNodeVector {}

export interface IFigmaNodeEllipse extends IFigmaNode, IFigmaNodeVector {
  // Start and end angles of the ellipse measured
  // clockwise from the x axis, plus the
  // inner radius for donuts
  arcData: ""; // ArcData
}

export interface IFigmaNodeRegularPolygon
  extends IFigmaNode,
    IFigmaNodeVector {}

export interface IFigmaNodeRectangle extends IFigmaNode, IFigmaNodeVector {
  // Radius of each corner of the rectangle
  // if a single radius is set for all corners
  cornerRadius: number;

  // Array of length 4 of the radius of each corner of the rectangle,
  // starting in the top left and proceeding clockwise
  rectangleCornerRadii: number[];
}

export interface IFigmaNodeText extends IFigmaNode, IFigmaNodeVector {
  // Text contained within a text box
  characters: string;

  // Style of text including font family and
  // weight (see type style section for
  // more information)
  style: ""; // TypeStyle

  // Array with same number of elements as
  // characeters in text box, each element is a
  // reference to the styleOverrideTable defined below
  // and maps to the corresponding character in the characters field.
  // Elements with value 0 have the default type style
  characterStyleOverrides: number[];

  // Map from ID to TypeStyle for looking up style overrides
  styleOverrideTable: {
    [key: number]: ""; // TypeStyle
  };
}

export interface IFigmaNodeSlice extends IFigmaNode {
  // An array of export settings representing
  // images to export from this node
  exportSettings: ""; // ExportSetting[]

  // Bounding box of the node in absolute space coordinates
  absoluteBoundingBox: ""; // Rectangle

  // Width and height of element. This is different from the
  // width and height of the bounding box in that the
  // absolute bounding box represents the element after
  // scaling and rotation. Only present if geometry=paths is passed
  size: ""; // Vector

  // The top two rows of a matrix that represents the 2D
  // transform of this node relative to its parent.
  // The bottom row of the matrix is implicitly always (0, 0, 1).
  // Use to transform coordinates in geometry.
  // Only present if geometry=paths is passed
  relativeTransform: ""; // Transform
}

export interface IFigmaNodeComponent extends IFigmaNode, IFigmaNodeFrame {}

export interface IFigmaNodeComponentSet extends IFigmaNode, IFigmaNodeFrame {}

export interface IFigmaNodeInstance extends IFigmaNode, IFigmaNodeFrame {
  // ID of component that this instance came from,
  // refers to components table (see endpoints section below)
  componentId: string;
}

export interface IFigmaNodeSticky {}

export interface IFigmaNodeShapeWithText {}

export interface IFigmaNodeConnector {}
