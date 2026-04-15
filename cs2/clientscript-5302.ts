//
function script5302(int0: component, int1: unknown_int): void {
    if ((IF_GETHIDE(int0) == true)) {
        script5306();
        IF_SETHIDE(false, int0);
        stack(6169);
        stack(int1);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, int0);
        stack(6168);
        stack(int1);
        IF_SETGRAPHIC();
        script8808();
    };
    return;
}