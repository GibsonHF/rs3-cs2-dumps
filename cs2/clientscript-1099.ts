//
function script1099(int0: int): int {
    CC_DELETEALL(comp(91, 6));
    var int1 = 120;
    if ((script13749() == true)) {
        int1 = 160;
    };
    var int2 = ((int1 - 10) / 5);
    IF_SETSIZE(0, int1, 1, 0, comp(91, 6));
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 6));
    IF_SETPOSITION(0, (2 + int2), 1, 0, comp(91, 8));
    IF_SETPOSITION(0, (2 + (int2 * 2)), 1, 0, comp(91, 9));
    IF_SETPOSITION(0, (2 + (int2 * 3)), 1, 0, comp(91, 10));
    IF_SETPOSITION(0, (2 + (int2 * 4)), 1, 0, comp(91, 11));
    var int3 = 6;
    var int4 = comp(91, 19);
    var int5 = 0;
    while ((int5 < 5)) {
        switch (int5) {
            case 0: {
                int4 = comp(91, 19);
                break;
            }
            case 1: {
                int4 = comp(91, 20);
                break;
            }
            case 2: {
                int4 = comp(91, 21);
                break;
            }
            case 3: {
                int4 = comp(91, 22);
                break;
            }
            case 4: {
                int4 = comp(91, 23);
                break;
            }
        };
        IF_SETPOSITION(30, (int3 - 3), 0, 0, int4);
        IF_SETSIZE(60, int2, 1, 0, int4);
        if ((script6431() == true)) {
            IF_SETTEXTFONT(28 as fontmetrics, int4);
        } else {
            IF_SETTEXTFONT(26 as fontmetrics, int4);
        };
        int3 = (int3 + int2);
        int5 = (int5 + 1);
    };
    return (int0 + int1);
}