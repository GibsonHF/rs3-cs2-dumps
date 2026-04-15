//
function script15664(int0: component, int1: unknown_int, int2: component): void {
    IF_SETTEXT("", int0);
    varclient_1092 = 0;
    stack(-1);
    stack(int1);
    IF_SETGRAPHIC();
    if ((int2 != -1)) {
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