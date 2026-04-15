//
function script15343(int0: int, int1: int): void {
    var int2 = comp(1851, 40);
    var int3 = 0;
    var int4 = IF_GETNEXTSUBID(int2);
    var int5 = 0;
    var int6 = varbitplayer_37059;
    var string0 = "";
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 60;
    if ((int6 == 1)) {
        int11 = 35;
    };
    while ((int3 < int4)) {
        int8 = 0;
        string0 = "";
        int7 = 0;
        int9 = 0;
        int10 = 0;
        if ((CC_FIND(int2, int3) == 1)) {
            int5 = cc_getparam(8167);
            if ((int3 > int0)) {
                int5 = (int5 + int1);
            };
            CC_SETPOSITION(CC_GETX(), int5, 0, 0);
        };
        if (((int6 == 0) && (CC_FIND(int2, (int3 + 1)) == 1))) {
            CC_SETPOSITION(CC_GETX(), (int5 + 2), 0, 0);
            int8 = (CC_GETX() + CC_GETWIDTH());
        };
        if (((int6 == 0) && (CC_FIND(int2, (int3 + 2)) == 1))) {
            CC_SETPOSITION(CC_GETX(), (int5 + 2), 0, 0);
        };
        if (((int6 == 0) && (CC_FIND(int2, (int3 + 3)) == 1))) {
            CC_SETPOSITION(CC_GETX(), (int5 + 2), 0, 0);
        };
        if ((CC_FIND(int2, (int3 + 10)) == 1)) {
            string0 = CC_GETTEXT();
            if ((strcmp(string0, "") != 0)) {
                if ((int6 == 1)) {
                    CC_SETPOSITION(CC_GETX(), ((int5 + 14) + (2 * 2)), 0, 0);
                } else {
                    CC_SETPOSITION(CC_GETX(), ((int5 + int8) - 12), 0, 0);
                };
            };
        };
        if (((int6 == 0) && (CC_FIND(int2, (int3 + 9)) == 1))) {
            CC_SETPOSITION(CC_GETX(), (((int5 + 2) + 28) - 12), 0, 0);
        };
        if ((CC_FIND(int2, (int3 + 4)) == 1)) {
            if ((int6 == 1)) {
                if ((strcmp(string0, "") != 0)) {
                    CC_SETPOSITION(CC_GETX(), (int5 + 2), 0, 0);
                } else {
                    CC_SETPOSITION(CC_GETX(), (int5 + ((int11 / 2) - (CC_GETHEIGHT() / 2))), 0, 0);
                };
            } else {
                CC_SETPOSITION(CC_GETX(), int5, 0, 0);
            };
        };
        if (((int6 == 0) && (CC_FIND(int2, (int3 + 5)) == 1))) {
            CC_SETPOSITION(CC_GETX(), int5, 0, 0);
        };
        if ((CC_FIND(int2, (int3 + 6)) == 1)) {
            if ((int6 == 1)) {
                CC_SETPOSITION(CC_GETX(), int5, 0, 0);
            } else {
                CC_SETPOSITION(CC_GETX(), (int5 + 15), 0, 0);
            };
            int9 = CC_GETY();
            int10 = (CC_GETHEIGHT() / 2);
        };
        if (((CC_FIND(int2, (int3 + 8)) == 1) && (CC_GETGRAPHIC() != -1 as graphic))) {
            CC_SETPOSITION(CC_GETX(), (int5 + 2), 0, 0);
            int7 = 1;
        };
        if (((CC_FIND(int2, (int3 + 7)) == 1) && (CC_GETGRAPHIC() != -1 as graphic))) {
            if ((int6 == 1)) {
                if ((int7 == 0)) {
                    CC_SETPOSITION(CC_GETX(), (int5 + ((int11 / 2) - (CC_GETHEIGHT() / 2))), 0, 0);
                } else {
                    CC_SETPOSITION(CC_GETX(), (int5 + (int11 - CC_GETHEIGHT())), 0, 0);
                };
            } else {
                CC_SETPOSITION(CC_GETX(), (int9 + (int10 - (CC_GETHEIGHT() / 2))), 0, 0);
            };
        };
        int3 = (int3 + 11);
    };
    return;
}