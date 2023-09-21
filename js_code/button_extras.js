function edit_extras() {
    let element_section = document.getElementById("Extra_Section") // получение пропадающего элеменат по ID
    let element_style = getComputedStyle(element_section)
    if (element_style.display === "none") {
        element_section.style.display="block"
    }
    else if (element_style.display !== "none") {
        element_section.style.display="none"
    }
    
}