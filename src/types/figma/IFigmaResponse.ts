// every nodes contain:
// - document contains a Node of Type DOCUMENT
interface TNodes {
  [key: string]: {
    document: {};
    components: {};
    componentSets: {};
    schemaVersion: number;
    styles: {};
  };
}

// GET file nodes
interface IFigmaResponse {
  name: string;
  lastModified: string; // date string
  thumbnailUrl: string;
  version: string;
  role: string; // owner || ...
  editorType: string;
  linkAccess: "inherit" | "view" | "edit" | "org_view" | "org_edit";
  nodes: TNodes;
}
