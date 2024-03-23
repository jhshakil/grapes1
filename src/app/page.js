"use client";

import grapesjs from "grapesjs";
import GjsEditor from "@grapesjs/react";

export default function Home() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
  };
  return (
    <main>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={{
          height: "100vh",
          storageManager: false,
        }}
        plugins={[
          {
            id: "gjs-blocks-basic",
            src: "https://unpkg.com/grapesjs-blocks-basic",
          },
          {
            id: "grapesjs-navbar",
            src: "https://unpkg.com/grapesjs-navbar",
          },
          {
            id: "grapesjs-plugin-forms",
            src: "https://unpkg.com/grapesjs-plugin-forms",
          },
        ]}
        onEditor={onEditor}
      ></GjsEditor>
    </main>
  );
}
