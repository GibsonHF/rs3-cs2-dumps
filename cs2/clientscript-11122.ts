//
function script11122(): void {
    if ((IF_GETHIDE(comp(1598, 17)) == false)) {
        IF_SETHIDE(true, comp(1598, 17));
        IF_SETHIDE(true, comp(1598, 50));
    } else {
        IF_SETHIDE(false, comp(1598, 17));
        IF_SETHIDE(false, comp(1598, 50));
    };
    return;
}