//
function script16417(int0: number, int1: number): void {
    if ((MODULO(CLIENTCLOCK(), 15) != 0)) {
        return;
    };
    if ((dbrow_getfield(varplayer_8746, 295248, 0) == true)) {
        return;
    };
    if ((CC_FIND(int1, int0) == 1)) {
        switch (CC_GETGRAPHIC()) {
            case 18902: {
                CC_SETGRAPHIC(18903);
                break;
            }
            case 18903: {
                CC_SETGRAPHIC(18904);
                break;
            }
            case 18904: {
                CC_SETGRAPHIC(18902);
                break;
            }
            case 18905: {
                CC_SETGRAPHIC(18906);
                break;
            }
            case 18906: {
                CC_SETGRAPHIC(18907);
                break;
            }
            case 18907: {
                CC_SETGRAPHIC(18905);
                break;
            }
            case 1425: {
                CC_SETGRAPHIC(1426);
                break;
            }
            case 1426: {
                CC_SETGRAPHIC(1425);
                break;
            }
            case 1729: {
                CC_SETGRAPHIC(1730);
                break;
            }
            case 1730: {
                CC_SETGRAPHIC(1731);
                break;
            }
            case 1731: {
                CC_SETGRAPHIC(9133);
                break;
            }
            case 9133: {
                CC_SETGRAPHIC(1729);
                break;
            }
            case 8758: {
                CC_SETGRAPHIC(8759);
                break;
            }
            case 8759: {
                CC_SETGRAPHIC(8760);
                break;
            }
            case 8760: {
                CC_SETGRAPHIC(8761);
                break;
            }
            case 8761: {
                CC_SETGRAPHIC(8758);
                break;
            }
            case 8944: {
                CC_SETGRAPHIC(8941);
                break;
            }
            case 8941: {
                CC_SETGRAPHIC(8944);
                break;
            }
            case 21427: {
                CC_SETGRAPHIC(21428);
                break;
            }
            case 21428: {
                CC_SETGRAPHIC(21427);
                break;
            }
            case 21429: {
                CC_SETGRAPHIC(21430);
                break;
            }
            case 21430: {
                CC_SETGRAPHIC(21429);
                break;
            }
            case 18952: {
                if ((varbitplayer_22875 == 1)) {
                    CC_SETGRAPHIC(1288);
                };
                break;
            }
            case 1288: {
                if ((varbitplayer_22875 != 1)) {
                    CC_SETGRAPHIC(18952);
                };
                break;
            }
            case 14903: {
                CC_SETGRAPHIC(14904);
                break;
            }
            case 14904: {
                CC_SETGRAPHIC(14903);
                break;
            }
            case 14905: {
                CC_SETGRAPHIC(14906);
                break;
            }
            case 14906: {
                CC_SETGRAPHIC(14905);
                break;
            }
            case 14924: {
                CC_SETGRAPHIC(14925);
                break;
            }
            case 14925: {
                CC_SETGRAPHIC(14924);
                break;
            }
            case 1478: {
                CC_SETGRAPHIC(1479);
                break;
            }
            case 1479: {
                CC_SETGRAPHIC(1481);
                break;
            }
            case 1481: {
                CC_SETGRAPHIC(1483);
                break;
            }
            case 1483: {
                CC_SETGRAPHIC(1480);
                break;
            }
            case 1480: {
                CC_SETGRAPHIC(1484);
                break;
            }
            case 1484: {
                CC_SETGRAPHIC(1482);
                break;
            }
            case 1482: {
                CC_SETGRAPHIC(1485);
                break;
            }
            case 1485: {
                CC_SETGRAPHIC(1486);
                break;
            }
            case 1486: {
                CC_SETGRAPHIC(1487);
                break;
            }
            case 1487: {
                CC_SETGRAPHIC(1488);
                break;
            }
            case 1488: {
                CC_SETGRAPHIC(1496);
                break;
            }
            case 1496: {
                CC_SETGRAPHIC(1490);
                break;
            }
            case 1490: {
                CC_SETGRAPHIC(1491);
                break;
            }
            case 1491: {
                CC_SETGRAPHIC(1492);
                break;
            }
            case 1492: {
                CC_SETGRAPHIC(1493);
                break;
            }
            case 1493: {
                CC_SETGRAPHIC(1494);
                break;
            }
            case 1494: {
                CC_SETGRAPHIC(1495);
                break;
            }
            case 1495: {
                CC_SETGRAPHIC(1489);
                break;
            }
            case 1489: {
                CC_SETGRAPHIC(1497);
                break;
            }
            case 1497: {
                CC_SETGRAPHIC(1498);
                break;
            }
            case 1498: {
                CC_SETGRAPHIC(1502);
                break;
            }
            case 1502: {
                CC_SETGRAPHIC(1501);
                break;
            }
            case 1501: {
                CC_SETGRAPHIC(1503);
                break;
            }
            case 1503: {
                CC_SETGRAPHIC(3032);
                break;
            }
            case 3032: {
                CC_SETGRAPHIC(9204);
                break;
            }
            case 9204: {
                CC_SETGRAPHIC(26544);
                break;
            }
            case 26544: {
                CC_SETGRAPHIC(10785);
                break;
            }
            case 10785: {
                CC_SETGRAPHIC(30937);
                break;
            }
            case 30937: {
                CC_SETGRAPHIC(1478);
                break;
            }
            case 35246: {
                CC_SETGRAPHIC(35247);
                break;
            }
            case 35247: {
                CC_SETGRAPHIC(35248);
                break;
            }
            case 35248: {
                CC_SETGRAPHIC(35249);
                break;
            }
            case 35249: {
                CC_SETGRAPHIC(35250);
                break;
            }
            case 35250: {
                CC_SETGRAPHIC(35246);
                break;
            }
            default: {
                CC_SETONTIMER(callback());
                break;
            }
        };
    };
    return;
}