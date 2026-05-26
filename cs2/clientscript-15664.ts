//
function script15664(int0: number, int1: number, int2: number): void {
    IF_SETTEXT("", int0);
    varclient_1092 = 0;
    IF_SETGRAPHIC(-1, int1);
    if ((int2 != -1)) {
        if (((CC_FIND(int2, 0) == 1) && (CC_GETGRAPHIC() == 18964))) {
            CC_SETHIDE(1);
        };
        if (((CC_FIND(int2, 1) == 1) && (CC_GETGRAPHIC() == 18963))) {
            CC_SETHIDE(1);
            CC_SET2DANGLE(0);
        };
    };
    IF_SETONTIMER(callback(), int2);
    return;
}