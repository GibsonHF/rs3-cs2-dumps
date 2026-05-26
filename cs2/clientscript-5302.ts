//
function script5302(int0: number, int1: number): void {
    if ((IF_GETHIDE(int0) == true)) {
        script5306();
        IF_SETHIDE(false, int0);
        IF_SETGRAPHIC(6169 as graphic, int1);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETGRAPHIC(6168 as graphic, int1);
        script8808();
    };
    return;
}