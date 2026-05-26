//
function script5302(int0: number, int1: number): void {
    if ((IF_GETHIDE(int0) == 1)) {
        script5306();
        IF_SETHIDE(0, int0);
        IF_SETGRAPHIC(6169, int1);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETGRAPHIC(6168, int1);
        script8808();
    };
    return;
}