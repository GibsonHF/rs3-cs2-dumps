//
function script1231(): void {
    var int0 = -1 as obj;
    var int1 = -1 as model;
    var int2 = comp(-1, 65535);
    var int3 = 0;
    while ((int3 < 81)) {
        int0 = INV_GETOBJ(308 as inv, int3);
        switch (int0) {
            case 556:
            case 6422: {
                int1 = 8975 as model;
                break;
            }
            case 555:
            case 6424: {
                int1 = 8987 as model;
                break;
            }
            case 557:
            case 6426: {
                int1 = 8979 as model;
                break;
            }
            case 554:
            case 6428: {
                int1 = 8980 as model;
                break;
            }
            case 558:
            case 6436: {
                int1 = 8982 as model;
                break;
            }
            case 559:
            case 6438: {
                int1 = 8976 as model;
                break;
            }
            case 560:
            case 6432: {
                int1 = 8978 as model;
                break;
            }
            case 562:
            case 6430: {
                int1 = 8977 as model;
                break;
            }
            case 563:
            case 6434: {
                int1 = 8981 as model;
                break;
            }
            default: {
                int1 = -1 as model;
                break;
            }
        };
        int2 = enum_getvalue(0, 9, 2274 as cs2enum, int3);
        if ((IF_FIND(int2) == 1)) {
            CC_SETMODEL(int1);
        };
        if (((((((((((int0 == 6422 as obj) || (int0 == 6422 as obj)) || (int0 == 6424 as obj)) || (int0 == 6426 as obj)) || (int0 == 6428 as obj)) || (int0 == 6436 as obj)) || (int0 == 6438 as obj)) || (int0 == 6432 as obj)) || (int0 == 6430 as obj)) || (int0 == 6434 as obj))) {
            int2 = enum_getvalue(0, 9, 2275 as cs2enum, int3);
            if ((IF_FIND(int2) == 1)) {
                CC_SETCOLOUR(4456448);
            };
        };
        int3 = (int3 + 1);
    };
    return;
}