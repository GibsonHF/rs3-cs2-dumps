//
function script11121(): void {
    if ((IF_GETHIDE(104726545) == 0)) {
        MES_TYPED(109, 0, "The notebook overlay is already open.");
    } else {
        IF_SETHIDE(0, 104726545);
        IF_SETHIDE(0, 104726578);
    };
    return;
}