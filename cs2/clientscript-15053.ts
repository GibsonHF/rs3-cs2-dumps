//
function script15053(): void {
    CC_DELETEALL(comp(105, 229));  // stockmarket:box2 ?
    CC_DELETEALL(comp(105, 230));  // stockmarket:quantity_info ?
    IF_SETTEXT("", comp(105, 225));  // stockmarket:offertype_icon ?
    script15054();
    return;
}