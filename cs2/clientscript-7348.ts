//
function script7348(): void {
    if ((IF_GETHIDE(comp(944, 11)) == false)) {
        IF_SETHIDE(true, comp(944, 11));
        IF_SETHIDE(false, comp(944, 104));
    } else if ((IF_GETHIDE(comp(944, 10)) == false)) {
        IF_SETHIDE(true, comp(944, 10));
        IF_SETHIDE(false, comp(944, 11));
    } else if ((IF_GETHIDE(comp(944, 76)) == false)) {
        IF_SETHIDE(true, comp(944, 76));
        IF_SETHIDE(false, comp(944, 10));
    } else {
        IF_SETHIDE(true, comp(944, 104));
        IF_SETHIDE(false, comp(944, 76));
    };
    return;
}