//
function script2541(): void {
    if ((IF_GETHIDE(comp(38, 11)) == true)) {
        IF_SETTEXT("About Mining", comp(38, 21));
        IF_SETHIDE(true, comp(38, 10));
        IF_SETHIDE(true, comp(38, 1));
        IF_SETHIDE(false, comp(38, 11));
        IF_SETHIDE(false, comp(38, 3));
    } else {
        IF_SETTEXT("About Smithing", comp(38, 21));
        IF_SETHIDE(false, comp(38, 10));
        IF_SETHIDE(false, comp(38, 1));
        IF_SETHIDE(true, comp(38, 11));
        IF_SETHIDE(true, comp(38, 3));
    };
    return;
}