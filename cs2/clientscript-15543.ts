//
function script15543(int0: fontmetrics, int1: fontmetrics, int2: fontmetrics): void {
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
        int3 = script7593(CC_GETTEXT[1](), CC_GETWIDTH[1](), int5, 0);
        int4 = PARAWIDTH(CC_GETTEXT[1](), 9999, int5);
        if (((int3 < CC_GETHEIGHT[1]()) && (int4 < CC_GETWIDTH[1]()))) {
            CC_SETTEXTFONT[1](int5);
            return;
        };
        int6 = (int6 + 1);
    };
    CC_SETTEXTFONT[1](int2);
    return;
}