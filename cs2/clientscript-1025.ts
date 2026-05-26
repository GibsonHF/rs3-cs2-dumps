//
function script1025(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int1 == -1)) {
        if ((IF_FIND(int0) == 1)) {
            CC_SETTEXTFONT(script12028(int2, int3, int4, CC_GETTEXT(), CC_GETWIDTH(), CC_GETHEIGHT()));
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXTFONT(script12028(int2, int3, int4, CC_GETTEXT(), CC_GETWIDTH(), CC_GETHEIGHT()));
    };
    return;
}