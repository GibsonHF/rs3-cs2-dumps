//
function script1099(int0: number): number {
    CC_DELETEALL(5963782);
    var int1 = 120;
    if ((script13749() == 1)) {
        int1 = 160;
    };
    var int2 = ((int1 - 10) / 5);
    IF_SETSIZE(0, int1, 1, 0, 5963782);
    IF_SETPOSITION(0, int0, 0, 0, 5963782);
    IF_SETPOSITION(0, (2 + int2), 1, 0, 5963784);
    IF_SETPOSITION(0, (2 + (int2 * 2)), 1, 0, 5963785);
    IF_SETPOSITION(0, (2 + (int2 * 3)), 1, 0, 5963786);
    IF_SETPOSITION(0, (2 + (int2 * 4)), 1, 0, 5963787);
    var int3 = 6;
    var int4 = 5963795;
    var int5 = 0;
    while ((int5 < 5)) {
        switch (int5) {
            case 0: {
                int4 = 5963795;
                break;
            }
            case 1: {
                int4 = 5963796;
                break;
            }
            case 2: {
                int4 = 5963797;
                break;
            }
            case 3: {
                int4 = 5963798;
                break;
            }
            case 4: {
                int4 = 5963799;
                break;
            }
        };
        IF_SETPOSITION(30, (int3 - 3), 0, 0, int4);
        IF_SETSIZE(60, int2, 1, 0, int4);
        if ((script6431() == 1)) {
            IF_SETTEXTFONT(28, int4);
        } else {
            IF_SETTEXTFONT(26, int4);
        };
        int3 = (int3 + int2);
        int5 = (int5 + 1);
    };
    return (int0 + int1);
}