//
function script17102(int0: int, int1: int, int2: int, int3: int): [string, int] {
    var string0 = "";
    if ((script12795() == 2)) {
        if ((TESTBIT(varplayer_10744, int0) == 1)) {
            if ((int1 < 5)) {
                var int1 = (int1 + 1);
                stack(PUSH_CONSTANT_INT[16]("<col=", int2));
                return [`${stack()}${inttostring()}> [ACTIVE]</col>`, int1];
            };
            stack(PUSH_CONSTANT_INT[16]("<col=", int3));
            return [`${stack()}${inttostring()}> [BACKUP]</col>`, int1];
        };
        if (((int0 == 1) && (varbitplayer_1675 == 1))) {
            stack(PUSH_CONSTANT_INT[16]("<col=", int2));
            return [`${stack()}${inttostring()}> [PREVIEW ACTIVE]</col>`, int1];
        };
        return ["", int1];
    };
    var int4 = 0;
    switch (int0) {
        case 1:
        case 2:
        case 3: {
            int4 = script9670(varbitplayer_52405, int0);
            break;
        }
        case 4: {
            if (((script10628() == 1) || (varbitplayer_52405 == int0))) {
                int4 = 1;
            };
            break;
        }
        case 10: {
            if ((varbitplayer_28108 == (0 + 1))) {
                int4 = 1;
            };
            break;
        }
        case 11: {
            if ((varbitplayer_28108 == (1 + 1))) {
                int4 = 1;
            };
            break;
        }
        case 12: {
            int4 = varbitplayer_20925;
            break;
        }
        case 13: {
            int4 = varbitplayer_30209;
            break;
        }
        case 17: {
            int4 = varbitplayer_28104;
            break;
        }
        case 14: {
            if (((varbitplayer_28103 > 0) && (INV_GETOBJ(94 as inv, 17) == 29287 as obj))) {
                int4 = 1;
            };
            break;
        }
        case 15: {
            if (((varbitplayer_28103 > 0) && ((varbitplayer_28103 > 1) || (INV_GETOBJ(94 as inv, 17) != 29287 as obj)))) {
                int4 = 1;
            };
            break;
        }
        case 16: {
            if ((((varbitplayer_28103 > 0) && (varbitplayer_28103 == 2)) && (INV_GETOBJ(94 as inv, 17) != 29287 as obj))) {
                int4 = 1;
            };
            break;
        }
        default: {
            return ["", int1];
        }
    };
    if ((int4 == 1)) {
        int1 = (int1 + 1);
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        return [`${stack()}${inttostring()}> [ACTIVE]</col>`, int1];
    };
    return ["", int1];
}