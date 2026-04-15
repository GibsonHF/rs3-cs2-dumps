//
function script10602(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: cs2enum): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = (int4 - int3);
    if ((CC_FIND(int0, (int2 + 18)) == 1)) {
        int8 = CC_GETX();
        int7 = CC_GETWIDTH();
    };
    if (((CC_FIND(int0, (int2 + 14)) == 1) && (CC_FIND[1](int0, (int2 + 13)) == 1))) {
        if ((int1 == -1)) {
            if ((int11 != 0)) {
                int10 = SCALE(int5, int11, (int7 - (CC_GETWIDTH[1]() * 2)));
            } else {
                int10 = (int7 - (CC_GETWIDTH[1]() * 2));
            };
        } else {
            int10 = int1;
        };
        CC_SETSIZE(int10, CC_GETHEIGHT(), 0, 0);
    };
    if ((CC_FIND(int0, (int2 + 19)) == 1)) {
        if ((int11 == 0)) {
            CC_SETPOSITION((int8 + (int7 - CC_GETWIDTH())), CC_GETY(), 0, 0);
        } else {
            int10 = SCALE(int5, int11, (int7 - CC_GETWIDTH()));
            CC_SETPOSITION((int8 + int10), CC_GETY(), 0, 0);
        };
    };
    if ((int6 != -1 as cs2enum)) {
        if ((CC_FIND(int0, (int2 + 6)) == 1)) {
            switch (int6) {
                case 10398:
                case 10399: {
                    if (((CC_FIND(int0, (int2 + 6)) == 1) && (CC_FIND[1](int0, (int2 + 5)) == 1))) {
                        CC_SETSIZE(14, 13, 0, 0);
                        CC_SETPOSITION((CC_GETX[1]() + 6), ((CC_GETY[1]() + (CC_GETHEIGHT[1]() / 2)) - 7), 0, 0);
                        CC_SETGRAPHIC(enum_getvalue(0, 23, int6, int5));
                        if ((CC_FIND[1](int0, (int2 + 4)) == 1)) {
                            CC_SETTEXT[1](enum_getvalue(0, 36, 10400 as cs2enum, int5));
                            CC_SETPOSITION[1]((CC_GETX() + 16), CC_GETY[1](), 0, 0);
                            CC_SETTEXTALIGN[1](0, 1, 0);
                        };
                    };
                    break;
                }
            };
        };
    } else if ((CC_FIND(int0, (int2 + 4)) == 1)) {
        CC_SETTEXT(TOSTRING_LOCALISED((int3 + int5), 1));
        CC_SETTEXTALIGN(1, 1, 0);
    };
    return;
}