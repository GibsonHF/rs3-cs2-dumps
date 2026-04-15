//
function script1025(int0: component, int1: int, int2: fontmetrics, int3: fontmetrics, int4: fontmetrics): void {
    if ((int1 == -1)) {
        if ((IF_FIND(int0) == 1)) {
            CC_SETTEXTFONT(script12028(int2, int3, int4, CC_GETTEXT(), CC_GETWIDTH(), CC_GETHEIGHT()));
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXTFONT(script12028(int2, int3, int4, CC_GETTEXT(), CC_GETWIDTH(), CC_GETHEIGHT()));
    };
    return;
}