//
function script14019(int0: component, int1: int, int2: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 == 0)) {
            CC_SETTEXT("");
        } else {
            CC_SETTEXT(inttostring(int2, 10));
        };
        cc_setparam(5691, int2);
    };
    return;
}