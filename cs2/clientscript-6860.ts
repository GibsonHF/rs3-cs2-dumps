//
function script6860(): void {
    if ((IF_GETHIDE(comp(176, 30)) == true)) {
        IF_SETHIDE(false, comp(176, 30));
        IF_SETHIDE(false, comp(176, 29));
        script13959(comp(176, 8), 28692 as struct, false);
    } else {
        IF_SETHIDE(true, comp(176, 30));
        IF_SETHIDE(true, comp(176, 29));
        script13959(comp(176, 8), 28691 as struct, false);
    };
    return;
}