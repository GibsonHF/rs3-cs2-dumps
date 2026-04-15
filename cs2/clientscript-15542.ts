//
function script15542(int0: fontmetrics, int1: fontmetrics, int2: fontmetrics): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = int2;
    var int6 = 0;
    while ((int6 < 3)) {
        switch (int6) {
            case 0: {
                int5 = int0;
                break;
            }
            case 1: {
                int5 = int1;
                break;
            }
            case 2: {
                int5 = int2;
                break;
            }
        };
        int3 = script7593(CC_GETTEXT(), CC_GETWIDTH(), int5, 0);
        int4 = PARAWIDTH(CC_GETTEXT(), 9999, int5);
        if (((int3 < CC_GETHEIGHT()) && (int4 < CC_GETWIDTH()))) {
            CC_SETTEXTFONT(int5);
            return;
        };
        int6 = (int6 + 1);
    };
    CC_SETTEXTFONT(int2);
    return;
}