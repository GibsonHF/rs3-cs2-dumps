//
function script5302(int0: number, int1: number): void {
    if ((IF_GETHIDE(int0) == 1)) {
        script5306();
        IF_SETHIDE(0, int0);
        stack(6169);
        stack(int1);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(1, int0);
        stack(6168);
        stack(int1);
        IF_SETGRAPHIC();
        script8808();
    };
    return;
}