import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import CheckList from "@editorjs/checklist";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
  },
  table: Table,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: List,
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+e",
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  code: {
    class: CodeTool,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+h",
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
