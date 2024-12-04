const classStyle = "bg-slate-100"

const generateHeader = () => {
    document.write(""
    + "<div class=\""
    + classStyle
    + " row-span-2 col-span-5"
    + "\">"
    + "HEADER"
    + "</div>");
}

const generateButtonGeneric = (text, isTall = false) => {
    document.write(""
    + "<div class=\""
    + classStyle
    + (isTall ? " row-span-2" : "")
    +"\">"
    + text
    + "</div>");
}

/* SIMILAR PARAMETERS TO CSS grid-area */
const generateElement = (rowStart, colStart, rowEnd, colEnd, text = "", id = "") => {
    document.write(""
        + "<div class=\""
        + classStyle + " "
        + "row-start-[" + rowStart + "] "
        + "row-end-[" + rowEnd + "] "
        + "col-start-[" + colStart + "] "
        + "col-end-[" + colEnd + "]"
        + "\" "
        + (id != "" ? ("id=\"" + id + "\" ") : "")
        + ">"
        + (text != "" ? text : "")
        + "</div>"
    );
}