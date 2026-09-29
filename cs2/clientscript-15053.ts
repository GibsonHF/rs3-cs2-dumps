//
function script15053(): void {
    CC_DELETEALL(comp(105, 229));  // stockmarket:search_build ?
    CC_DELETEALL(comp(105, 230));  // stockmarket:search_obj ?
    IF_SETTEXT("", comp(105, 225));  // stockmarket:search_input ?
    script15054();
    return;
}