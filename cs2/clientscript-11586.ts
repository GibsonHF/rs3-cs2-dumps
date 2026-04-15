//
function script11586(): void {
    if ((IF_GETHIDE(comp(1635, 36)) == false)) {
        IF_SETHIDE(true, comp(1635, 36));
        IF_SETHIDE(false, comp(1635, 0));
        IF_SETHIDE(true, comp(1635, 31));
        IF_SETTEXT("Back", comp(1635, 120));
    } else {
        script11587(false);
    };
    return;
}