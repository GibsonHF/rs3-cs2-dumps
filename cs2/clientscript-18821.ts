//
function script18821(int0: component, int1: int, int2: seq, int3: seq): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETMODELANIM(-1 as seq);
        CC_SETMODELANIM(int2);
    };
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETMODELANIM(-1 as seq);
        CC_SETMODELANIM(int3);
    };
    return;
}