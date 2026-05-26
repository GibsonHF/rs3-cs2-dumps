//
function script17079(int0: number, int1: number, int2: number): void {
    if ((varclient_7108 == true)) {
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int2);
        IF_SETSIZE((IF_GETWIDTH(int0) - 80), IF_GETHEIGHT(int0), 0, 0, int0);
        CC_DELETEALL(int0);
        script2649();
        script2601();
        IF_SETPOSITION(((IF_GETX(int0) - 5) - IF_GETWIDTH(59375755)), IF_GETY(59375755), 0, 0, 59375755);
    };
    return;
}