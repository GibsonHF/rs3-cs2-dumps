//
function script5272(int0: component, int1: int, int2: int): int {
    var int3 = 0;
    var int2 = (int2 / 2);
    var int4 = int2;
    var int5 = IF_GETHEIGHT(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((IF_GETWIDTH(int0) < 260)) {
            if ((int2 == 4)) {
                CC_SETTEXTFONT(66 as fontmetrics);
            } else if ((int2 == 1)) {
                CC_SETTEXTFONT(69 as fontmetrics);
            } else {
                CC_SETTEXTFONT(67 as fontmetrics);
            };
        } else if ((int2 >= 7)) {
            CC_SETTEXTFONT(66 as fontmetrics);
        } else if ((int2 <= 4)) {
            CC_SETTEXTFONT(69 as fontmetrics);
        } else {
            CC_SETTEXTFONT(67 as fontmetrics);
        };
        if ((int2 > 4)) {
            int4 = script5276(int2, 2);
            int3 = (((int1 / 4) * int5) / int4);
            if ((MODULO((int1 / 2), 2) == 0)) {
                CC_SETPOSITION(2, int3, 0, 0);
            } else {
                CC_SETPOSITION(2, int3, 2, 0);
            };
            CC_SETSIZE(((IF_GETWIDTH(int0) / 2) - 4), (int5 / int4), 0, 0);
        } else {
            int3 = (((int1 / 2) * int5) / int2);
            CC_SETPOSITION(2, int3, 0, 0);
            CC_SETSIZE(6, (int5 / int2), 1, 0);
        };
    };
    var int1 = (int1 + 1);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 > 4)) {
            if ((MODULO((int1 / 2), 2) == 0)) {
                CC_SETPOSITION(2, (int3 + 1), 0, 0);
            } else {
                CC_SETPOSITION(2, (int3 + 1), 2, 0);
            };
            CC_SETSIZE(((IF_GETWIDTH(int0) / 2) - 4), ((int5 / int4) - 2), 0, 0);
        } else {
            CC_SETPOSITION(2, (int3 + 1), 0, 0);
            CC_SETSIZE(4, ((int5 / int2) - 2), 1, 0);
        };
    };
    return (int1 + 1);
}