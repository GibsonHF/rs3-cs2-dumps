//
function script19713(): void {
    if ((IF_GETHIDE(comp(1495, 29)) == true)) {
        IF_SETHIDE(false, comp(1495, 29));
        IF_SETOP(1, "Minimise", comp(1495, 27));
    } else {
        IF_SETHIDE(true, comp(1495, 29));
        IF_SETOP(1, "Maximise", comp(1495, 27));
    };
    return;
}