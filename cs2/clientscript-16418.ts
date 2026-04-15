//
function script16418(int0: int, int1: obj, int2: component): void {
    if ((MODULO(CLIENTCLOCK(), 15) != 0)) {
        return;
    };
    var int3 = -1;
    if ((CC_FIND(int2, int0) == 1)) {
        switch (int1) {
            case 526: {
                var int1 = 532 as obj;
                break;
            }
            case 532: {
                int1 = 534 as obj;
                break;
            }
            case 534: {
                int1 = 536 as obj;
                break;
            }
            case 536: {
                int1 = 526 as obj;
                break;
            }
            case 1436: {
                int1 = 7936 as obj;
                break;
            }
            case 7936: {
                int1 = 1436 as obj;
                break;
            }
            case 1438: {
                int1 = 1444 as obj;
                break;
            }
            case 1444: {
                int1 = 1442 as obj;
                break;
            }
            case 1442: {
                int1 = 1440 as obj;
                break;
            }
            case 1440: {
                int1 = 1448 as obj;
                break;
            }
            case 1448: {
                int1 = 1438 as obj;
                break;
            }
            case 960: {
                int1 = 4819 as obj;
                break;
            }
            case 4819: {
                int1 = 960 as obj;
                break;
            }
            case 249: {
                int1 = 251 as obj;
                break;
            }
            case 251: {
                int1 = 253 as obj;
                break;
            }
            case 253: {
                int1 = 255 as obj;
                break;
            }
            case 255: {
                int1 = 257 as obj;
                break;
            }
            case 257: {
                int1 = 259 as obj;
                break;
            }
            case 259: {
                int1 = 261 as obj;
                break;
            }
            case 261: {
                int1 = 263 as obj;
                break;
            }
            case 263: {
                int1 = 265 as obj;
                break;
            }
            case 265: {
                int1 = 267 as obj;
                break;
            }
            case 267: {
                int1 = 269 as obj;
                break;
            }
            case 269: {
                int1 = 249 as obj;
                break;
            }
            case 221: {
                int1 = 1951 as obj;
                break;
            }
            case 1951: {
                int1 = 1474 as obj;
                break;
            }
            case 1474: {
                int1 = 948 as obj;
                break;
            }
            case 948: {
                int1 = 225 as obj;
                break;
            }
            case 225: {
                int1 = 235 as obj;
                break;
            }
            case 235: {
                int1 = 221 as obj;
                break;
            }
            case 1739: {
                int1 = 1741 as obj;
                break;
            }
            case 1741: {
                int1 = 1743 as obj;
                break;
            }
            case 1743: {
                int1 = 1739 as obj;
                break;
            }
            case 434: {
                int1 = 1761 as obj;
                break;
            }
            case 1761: {
                int1 = 434 as obj;
                break;
            }
            case 1777: {
                int1 = 39 as obj;
                break;
            }
            case 39: {
                int1 = 1777 as obj;
                break;
            }
            case 5318: {
                int1 = 5319 as obj;
                break;
            }
            case 5319: {
                int1 = 5324 as obj;
                break;
            }
            case 5324: {
                int1 = 5322 as obj;
                break;
            }
            case 5322: {
                int1 = 5320 as obj;
                break;
            }
            case 5320: {
                int1 = 5323 as obj;
                break;
            }
            case 5323: {
                int1 = 5321 as obj;
                break;
            }
            case 5321: {
                int1 = 5318 as obj;
                break;
            }
            case 12158: {
                int1 = 12160 as obj;
                break;
            }
            case 12160: {
                int1 = 12159 as obj;
                break;
            }
            case 12159: {
                int1 = 12163 as obj;
                break;
            }
            case 12163: {
                int1 = 12158 as obj;
                break;
            }
            case 2859: {
                int1 = 2138 as obj;
                break;
            }
            case 2138: {
                int1 = 440 as obj;
                break;
            }
            case 440: {
                int1 = 1783 as obj;
                break;
            }
            case 1783: {
                int1 = 3095 as obj;
                break;
            }
            case 3095: {
                int1 = 2134 as obj;
                break;
            }
            case 2134: {
                int1 = 2859 as obj;
                break;
            }
            case 12183: {
                int1 = 12155 as obj;
                break;
            }
            case 12155: {
                int1 = 12183 as obj;
                break;
            }
            case 12047: {
                int1 = 12043 as obj;
                break;
            }
            case 12043: {
                int1 = 12059 as obj;
                break;
            }
            case 12059: {
                int1 = 12019 as obj;
                break;
            }
            case 12019: {
                int1 = 12009 as obj;
                break;
            }
            case 12009: {
                int1 = 12047 as obj;
                break;
            }
            default: {
                if ((enum_hasoutput(33, 6397 as cs2enum, int1) == 1)) {
                    int3 = enum_getreverseindex(33, 0, 6397 as cs2enum, int1, 0);
                    int3 = MODULO((int3 + 1), ENUM_GETOUTPUTCOUNT(6397 as cs2enum));
                    int1 = enum_getvalue(0, 33, 6397 as cs2enum, int3);
                } else {
                    CC_SETONTIMER(callback());
                    return;
                };
                break;
            }
        };
        CC_SETOBJECT(int1, -1);
        CC_SETONTIMER(callback(script16418, int0, int1, int2));
    };
    return;
}