//
function script12831(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = enum_getvalue(0, 26, 11779 as cs2enum, int1);
    var int6 = enum_getvalue(0, 26, int5, int3);
    var int7 = (int4 * int2);
    var int8 = enum_getvalue(0, 73, int6, int7);
    var int9 = ENUM_GETOUTPUTCOUNT(int6);
    var int10 = 50;
    var int11 = 1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    CC_DELETEALL(int0);
    CC_CREATE(int0, 4, int12);
    CC_SETSIZE(380, 50, 0, 0);
    CC_SETPOSITION(20, 8, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    switch (int1) {
        case 2: {
            switch (int3) {
                case 1: {
                    CC_SETTEXT("Birds of the Arc");
                    break;
                }
                case 2: {
                    CC_SETTEXT("Mushrooms of the Arc");
                    break;
                }
                case 3: {
                    CC_SETTEXT("Berries of the Arc");
                    break;
                }
                case 4: {
                    CC_SETTEXT("Kami Spirits of the Arc");
                    break;
                }
                case 5: {
                    CC_SETTEXT("Castaways of the Arc");
                    break;
                }
            };
            break;
        }
        case 3: {
            CC_SETTEXT("Miniquests");
            break;
        }
    };
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETCOLOUR(0);
    int12 = (int12 + 1);
    while (((int7 < int9) && (int13 == 0))) {
        CC_CREATE(int0, 5, int12);
        switch (int2) {
            case 5: {
                CC_SETSIZE(80, 80, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(20, (int10 + 10), 0, 0);
                } else {
                    CC_SETPOSITION(400, (int10 + 10), 0, 0);
                };
                break;
            }
            case 8: {
                CC_SETSIZE(55, 55, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(20, int10, 0, 0);
                } else {
                    CC_SETPOSITION(390, int10, 0, 0);
                };
                break;
            }
        };
        if ((script12822(int8) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int8, 6057));
        } else {
            CC_SETGRAPHIC(struct_getparam(int8, 6056));
        };
        int12 = (int12 + 1);
        CC_CREATE(int0, 4, int12);
        switch (int2) {
            case 5: {
                CC_SETSIZE(250, 20, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(110, (int10 + 10), 0, 0);
                } else {
                    CC_SETPOSITION(490, (int10 + 10), 0, 0);
                };
                break;
            }
            case 8: {
                CC_SETSIZE(250, 20, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(80, int10, 0, 0);
                } else {
                    CC_SETPOSITION(450, int10, 0, 0);
                };
                break;
            }
        };
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT(struct_getparam(int8, 6063));
        CC_SETTEXTFONT(29 as fontmetrics);
        CC_SETCOLOUR(0);
        int12 = (int12 + 1);
        CC_CREATE(int0, 4, int12);
        switch (int2) {
            case 5: {
                CC_SETSIZE(250, 60, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(110, (int10 + 30), 0, 0);
                } else {
                    CC_SETPOSITION(490, (int10 + 30), 0, 0);
                };
                break;
            }
            case 8: {
                CC_SETSIZE(250, 40, 0, 0);
                if ((int11 == 1)) {
                    CC_SETPOSITION(80, (int10 + 15), 0, 0);
                } else {
                    CC_SETPOSITION(450, (int10 + 15), 0, 0);
                };
                break;
            }
        };
        if ((script12822(int8) == 1)) {
            CC_SETTEXT(struct_getparam(int8, 6064));
            CC_SETCOLOUR(0);
        } else {
            CC_SETTEXT(struct_getparam(int8, 6065));
            CC_SETCOLOUR(4144959);
        };
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 0, 0);
        int12 = (int12 + 1);
        if (((MODULO(++int7, int2) == 0) && (MODULO(int7, (int2 * 2)) != 0))) {
            int10 = 50;
            int11 = 2;
            var int4 = (int4 + 1);
        } else if ((MODULO(int7, int2) == 0)) {
            int4 = (int4 + 1);
            int13 = 1;
        } else {
            switch (int2) {
                case 5: {
                    int10 = (int10 + 90);
                    break;
                }
                case 8: {
                    int10 = (int10 + 60);
                    break;
                }
            };
        };
        int8 = enum_getvalue(0, 73, int6, int7);
    };
    IF_SETHIDE(false, comp(1798, 86));
    return;
}