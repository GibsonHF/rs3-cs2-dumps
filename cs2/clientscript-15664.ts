//
function script15664(int0: number, int1: number, int2: number): void {
    IF_SETTEXT("", int0);
    varclient_1092 = 0;
    IF_SETGRAPHIC(-1 as graphic, int1);
    if ((int2 != comp(-1, 65535))) {
        if (((CC_FIND(int2, 0) == 1) && (CC_GETGRAPHIC() == 18964 as graphic))) {
            CC_SETHIDE(true);
        };
        if (((CC_FIND(int2, 1) == 1) && (CC_GETGRAPHIC() == 18963 as graphic))) {
            CC_SETHIDE(true);
            CC_SET2DANGLE(0);
        };
    };
    IF_SETONTIMER(callback(), int2);
    return;
}