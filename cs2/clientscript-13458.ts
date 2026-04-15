//
function script13458(int0: int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = -1 as graphic;
    var int6 = -1 as graphic;
    var int7 = -1;
    var int8 = -1;
    var string0 = "null";
    var int9 = script13432(int0);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int2 = comp(1875, 32);
                break;
            }
            case 2: {
                int2 = comp(1875, 28);
                break;
            }
            case 3: {
                int2 = comp(1875, 31);
                break;
            }
            case 4: {
                int2 = comp(1875, 29);
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int2 = comp(1875, 36);
                break;
            }
            case 2: {
                int2 = comp(1875, 33);
                break;
            }
            case 3: {
                int2 = comp(1875, 35);
                break;
            }
            case 4: {
                int2 = comp(1875, 34);
                break;
            }
        };
    };
    switch (int9) {
        case 1: {
            int5 = 30912 as graphic;
            break;
        }
        case 2: {
            int5 = 30913 as graphic;
            break;
        }
        case 3: {
            int5 = 30914 as graphic;
            break;
        }
        case 4: {
            int5 = 30915 as graphic;
            break;
        }
        case 5: {
            int5 = 30916 as graphic;
            break;
        }
        case 6: {
            int5 = 30917 as graphic;
            break;
        }
        case 7: {
            int5 = 30918 as graphic;
            break;
        }
        case 8: {
            int5 = 30919 as graphic;
            break;
        }
        case 9: {
            int5 = 30920 as graphic;
            break;
        }
        case 10: {
            int5 = 30921 as graphic;
            break;
        }
    };
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    CC_CREATE(int2, 5, 0);
    CC_SETSIZE(160, 160, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int3 = comp(1875, 7);
                int7 = 122880017;
                break;
            }
            case 2: {
                int3 = comp(1875, 6);
                int7 = 122880012;
                break;
            }
            case 3: {
                int3 = comp(1875, 9);
                int7 = 122880019;
                break;
            }
            case 4: {
                int3 = comp(1875, 10);
                int7 = 122880014;
                break;
            }
        };
        IF_SETONMOUSEREPEAT(callback(script13490, int3, 0, int0, 1), int7);
        IF_SETONMOUSELEAVE(callback(script13490, int3, 0, int0, 0), int7);
    } else {
        switch (int0) {
            case 1: {
                int3 = comp(1875, 139);
                break;
            }
            case 2: {
                int3 = comp(1875, 142);
                break;
            }
            case 3: {
                int3 = comp(1875, 148);
                break;
            }
            case 4: {
                int3 = comp(1875, 145);
                break;
            }
        };
    };
    CC_CREATE(int3, 5, 0);
    CC_SETSIZE(160, 200, 0, 0);
    CC_SETPOSITION(0, -20, 1, 1);
    if ((varbitplayer_35973 == int0)) {
        int6 = 31185 as graphic;
    } else {
        int6 = 30865 as graphic;
    };
    CC_SETGRAPHIC(int6);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int4 = comp(1875, 8);
                string0 = "Worker";
                break;
            }
            case 2: {
                int4 = comp(1875, 11);
                string0 = "Imperial";
                break;
            }
            case 3: {
                int4 = comp(1875, 20);
                string0 = "Merchant";
                break;
            }
            case 4: {
                int4 = comp(1875, 15);
                string0 = "Port";
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int4 = comp(1875, 140);
                break;
            }
            case 2: {
                int4 = comp(1875, 143);
                break;
            }
            case 3: {
                int4 = comp(1875, 149);
                break;
            }
            case 4: {
                int4 = comp(1875, 146);
                break;
            }
        };
        string0 = "";
    };
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, -105, 1, 1);
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int4 = comp(1875, 8);
                break;
            }
            case 2: {
                int4 = comp(1875, 11);
                break;
            }
            case 3: {
                int4 = comp(1875, 20);
                break;
            }
            case 4: {
                int4 = comp(1875, 15);
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int4 = comp(1875, 140);
                break;
            }
            case 2: {
                int4 = comp(1875, 143);
                break;
            }
            case 3: {
                int4 = comp(1875, 149);
                break;
            }
            case 4: {
                int4 = comp(1875, 146);
                break;
            }
        };
    };
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    string0 = inttostring(int9, 10);
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, 20, 1, 1);
    CC_SETTEXTFONT(60 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    switch (int0) {
        case 1: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 6998, 1));
            break;
        }
        case 2: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 6999, 1));
            break;
        }
        case 3: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 7000, 1));
            break;
        }
        case 4: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 7001, 1));
            break;
        }
    };
    return;
}