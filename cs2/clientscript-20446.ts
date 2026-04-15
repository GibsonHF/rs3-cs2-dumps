//
function script20446(int0: unknown_int): void {
    stack(-1);
    stack(int0);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(), int0);
    IF_SETONMOUSELEAVE(callback(), int0);
    return;
}