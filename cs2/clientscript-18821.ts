//
function script18821(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETMODELANIM(-1);
        CC_SETMODELANIM(int2);
    };
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETMODELANIM(-1);
        CC_SETMODELANIM(int3);
    };
    return;
}