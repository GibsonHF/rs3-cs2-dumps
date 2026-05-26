//
function script13458(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var string0 = "null";
    var int9 = script13432(int0);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int2 = 122880032;
                break;
            }
            case 2: {
                int2 = 122880028;
                break;
            }
            case 3: {
                int2 = 122880031;
                break;
            }
            case 4: {
                int2 = 122880029;
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int2 = 122880036;
                break;
            }
            case 2: {
                int2 = 122880033;
                break;
            }
            case 3: {
                int2 = 122880035;
                break;
            }
            case 4: {
                int2 = 122880034;
                break;
            }
        };
    };
    switch (int9) {
        case 1: {
            int5 = 30912;
            break;
        }
        case 2: {
            int5 = 30913;
            break;
        }
        case 3: {
            int5 = 30914;
            break;
        }
        case 4: {
            int5 = 30915;
            break;
        }
        case 5: {
            int5 = 30916;
            break;
        }
        case 6: {
            int5 = 30917;
            break;
        }
        case 7: {
            int5 = 30918;
            break;
        }
        case 8: {
            int5 = 30919;
            break;
        }
        case 9: {
            int5 = 30920;
            break;
        }
        case 10: {
            int5 = 30921;
            break;
        }
    };
    if ((int2 == -1)) {
        return;
    };
    CC_CREATE(int2, 5, 0);
    CC_SETSIZE(160, 160, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int3 = 122880007;
                int7 = 122880017;
                break;
            }
            case 2: {
                int3 = 122880006;
                int7 = 122880012;
                break;
            }
            case 3: {
                int3 = 122880009;
                int7 = 122880019;
                break;
            }
            case 4: {
                int3 = 122880010;
                int7 = 122880014;
                break;
            }
        };
        IF_SETONMOUSEREPEAT(callback(script13490, int3, 0, int0, 1), int7);
        IF_SETONMOUSELEAVE(callback(script13490, int3, 0, int0, 0), int7);
    } else {
        switch (int0) {
            case 1: {
                int3 = 122880139;
                break;
            }
            case 2: {
                int3 = 122880142;
                break;
            }
            case 3: {
                int3 = 122880148;
                break;
            }
            case 4: {
                int3 = 122880145;
                break;
            }
        };
    };
    CC_CREATE(int3, 5, 0);
    CC_SETSIZE(160, 200, 0, 0);
    CC_SETPOSITION(0, -20, 1, 1);
    if ((varbitplayer_35973 == int0)) {
        int6 = 31185;
    } else {
        int6 = 30865;
    };
    CC_SETGRAPHIC(int6);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int4 = 122880008;
                string0 = "Worker";
                break;
            }
            case 2: {
                int4 = 122880011;
                string0 = "Imperial";
                break;
            }
            case 3: {
                int4 = 122880020;
                string0 = "Merchant";
                break;
            }
            case 4: {
                int4 = 122880015;
                string0 = "Port";
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int4 = 122880140;
                break;
            }
            case 2: {
                int4 = 122880143;
                break;
            }
            case 3: {
                int4 = 122880149;
                break;
            }
            case 4: {
                int4 = 122880146;
                break;
            }
        };
        string0 = "";
    };
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, -105, 1, 1);
    CC_SETTEXTFONT(56);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int4 = 122880008;
                break;
            }
            case 2: {
                int4 = 122880011;
                break;
            }
            case 3: {
                int4 = 122880020;
                break;
            }
            case 4: {
                int4 = 122880015;
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int4 = 122880140;
                break;
            }
            case 2: {
                int4 = 122880143;
                break;
            }
            case 3: {
                int4 = 122880149;
                break;
            }
            case 4: {
                int4 = 122880146;
                break;
            }
        };
    };
    CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
    string0 = inttostring(int9, 10);
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, 20, 1, 1);
    CC_SETTEXTFONT(60);
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