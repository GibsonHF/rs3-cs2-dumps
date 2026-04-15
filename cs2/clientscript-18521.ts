//
function script18521(int0: component, int1: component): void {
    script16924(int0, int1);
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    var int5 = comp(1775, 2);
    if ((IF_FIND(int5) == 1)) {
        int3 = CC_GETWIDTH();
        int4 = CC_GETHEIGHT();
        CC_SETPOSITION(0, 0, 0, 0);
    };
    while ((int2 < 9)) {
        switch (int2) {
            case 1: {
                int5 = comp(1775, 3);
                break;
            }
            case 2: {
                int5 = comp(1775, 4);
                break;
            }
            case 3: {
                int5 = comp(1775, 5);
                break;
            }
            case 4: {
                int5 = comp(1775, 6);
                break;
            }
            case 5: {
                int5 = comp(1775, 7);
                break;
            }
            case 6: {
                int5 = comp(1775, 8);
                break;
            }
            case 7: {
                int5 = comp(1775, 9);
                break;
            }
            case 8: {
                int5 = comp(1775, 10);
                break;
            }
        };
        if ((IF_FIND(int5) == 1)) {
            CC_SETPOSITION((int3 * MODULO(int2, 3)), (int4 * (int2 / 3)), 0, 0);
        };
        int2 = (int2 + 1);
    };
    return;
}