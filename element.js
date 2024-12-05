// Tailwind class style descriptions
const elementClassStyle = "bg-white rounded-xl flex justify-center items-center"
const elementClassStyleButton = "bg-gradient-to-b from-white to-zinc-300 shadow-black/50 shadow-md  font-bold select-none border-solid border-2 border-black" + " "
                              + "hover:from-zinc-100 hover:to-zinc-400" + " "
                              + "active:from-zinc-300 active:to-white active:shadow-black/50 active:shadow-inner";
const elementClassStyleOutput = "bg-gradient-to-b from-zinc-200 to-white shadow-inner shadow-black/50 border-black border-solid border-2" + " "
                              + "flex flex-col divide-y divide-black divide-y-1";

/** - Generates grid element with similar arguements to CSS grid-area
 *  - Allows for seperately generated parts (<div> and </div>) to allow to insert elements inside
 */

// Start part of element
const generateElementPrefix = (rowStart, colStart, rowEnd, colEnd, text = "", id = "") => {
    document.write(""
        + "<div class=\""
        + elementClassStyle + " "
        + (id == "output" ? elementClassStyleOutput : elementClassStyleButton) + " "
        + "row-start-[" + rowStart + "] "
        + "row-end-[" + rowEnd + "] "
        + "col-start-[" + colStart + "] "
        + "col-end-[" + colEnd + "]"
        + "\" "
        + (id != "" ? ("id=\"" + id + "\" ") : "") + " "
        + (id != "output" ? "onclick=\"processClick(this)\"" : "")
        + ">"
        + (text != "" ? text : "")
    );
}

// End part of element
const generateElementPostfix = () => {
    document.write(""
        + "</div>"
    );
}

const generateElement = (rowStart, colStart, rowEnd, colEnd, text = "", id = "") => {
    generateElementPrefix(rowStart, colStart, rowEnd, colEnd, text, id);
    generateElementPostfix();
}