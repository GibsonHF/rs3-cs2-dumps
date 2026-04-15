//
function script13125(int0: component, int1: component, int2: component): void {
    if ((IF_FIND(int0) == 1)) {
        if ((STRING_LENGTH(REMOVETAGS(varclient_5944)) == 0)) {
            IF_SETHIDE(false, int2);
        } else {
            IF_SETHIDE(true, int2);
        };
        IF_SETTEXT(cc_getparam(6307), int1);
        IF_SETCOLOUR(script10495(3), int1);
    };
    return;
}