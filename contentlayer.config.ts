import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: "**/projects/**/*.md",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        slug: { type: "string", required: false },
        image: { type: "string", required: true },
        technologies: { type: "list", of: { type: "string" }, required: true },
        github: { type: "string", required: false },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "./projects",
    documentTypes: [Project],
});
