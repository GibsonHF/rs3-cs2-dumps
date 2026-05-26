//
function script11121(): void {
    if ((IF_GETHIDE(comp(1598, 17)) == false)) {
        MES_TYPED(109, 0, "The notebook overlay is already open.");
    } else {
        IF_SETHIDE(false, comp(1598, 17));
        IF_SETHIDE(false, comp(1598, 50));
    };
    return;
}