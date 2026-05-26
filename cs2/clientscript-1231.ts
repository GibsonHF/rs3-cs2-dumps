//
function script1231(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = 0;
    while ((int3 < 81)) {
        int0 = INV_GETOBJ(308, int3);
        switch (int0) {
            case 556:
            case 6422: {
                int1 = 8975;
                break;
            }
            case 555:
            case 6424: {
                int1 = 8987;
                break;
            }
            case 557:
            case 6426: {
                int1 = 8979;
                break;
            }
            case 554:
            case 6428: {
                int1 = 8980;
                break;
            }
            case 558:
            case 6436: {
                int1 = 8982;
                break;
            }
            case 559:
            case 6438: {
                int1 = 8976;
                break;
            }
            case 560:
            case 6432: {
                int1 = 8978;
                break;
            }
            case 562:
            case 6430: {
                int1 = 8977;
                break;
            }
            case 563:
            case 6434: {
                int1 = 8981;
                break;
            }
            default: {
                int1 = -1;
                break;
            }
        };
        int2 = enum_getvalue(0, 9, 2274 as cs2enum, int3);
        if ((IF_FIND(int2) == 1)) {
            CC_SETMODEL(int1);
        };
        if (((((((((((int0 == 6422) || (int0 == 6422)) || (int0 == 6424)) || (int0 == 6426)) || (int0 == 6428)) || (int0 == 6436)) || (int0 == 6438)) || (int0 == 6432)) || (int0 == 6430)) || (int0 == 6434))) {
            int2 = enum_getvalue(0, 9, 2275 as cs2enum, int3);
            if ((IF_FIND(int2) == 1)) {
                CC_SETCOLOUR(4456448);
            };
        };
        int3 = (int3 + 1);
    };
    return;
}