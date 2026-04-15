//
function script14015(int0: component, int1: int, int2: unknown_int): void {
    CC_DELETEALL(int0);
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = (int1 * int1);
    var int5 = (IF_GETWIDTH(int0) / int1);
    while ((int3 < int4)) {
        if ((int2 == 2)) {
            CC_CREATE(int0, 4, int3);
        } else {
            CC_CREATE(int0, 3, int3);
        };
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETSIZE(int5, int5, 0, 0);
            CC_SETPOSITION((MODULO(int3, int1) * int5), ((int3 / int1) * int5), 0, 0);
            switch (int2) {
                case 0: {
                    CC_SETFILL(0);
                    CC_SETCOLOUR(16777215);
                    break;
                }
                case 1: {
                    CC_SETOP(1, "Increment");
                    CC_SETOP(2, "1");
                    CC_SETOP(3, "2");
                    CC_SETOP(4, "3");
                    CC_SETOP(5, "4");
                    CC_SETOP(6, "5");
                    CC_SETOP(7, "Clear");
                    CC_SETONOP(callback(script14017, -2147483643, -2147483644));
                    break;
                }
                case 2: {
                    CC_SETCOLOUR(16777215);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETTEXTFONT(28 as fontmetrics);
                    cc_setparam(5691, 0);
                    CC_SETTEXTSHADOW(true);
                    break;
                }
            };
        };
        int3 = (int3 + 1);
    };
    return;
}