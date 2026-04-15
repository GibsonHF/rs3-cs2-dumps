//
function script4009(int0: obj, int1: inv, int2: int): [unknown_int, string] {
    switch (int0) {
        case 30920: {
            return [0, `${OC_NAME(int0)} will lose all of its charges. Do you wish to continue?`];
        }
        case 30921:
        case 30922:
        case 30923:
        case 30924: {
            return [0, `${OC_NAME(int0)} will lose all of its charges and costs ${TOSTRING_LOCALISED(item_getparam(int0, 3322), 1)} to reclaim from Diango. Do you wish to continue?`];
        }
    };
    if ((script6552(int0) == 1)) {
        if ((item_getparam(int0, 3322) > 0)) {
            return [0, `${OC_NAME(int0)} costs ${TOSTRING_LOCALISED(item_getparam(int0, 3322), 1)} to reclaim from Diango. Do you wish to continue?`];
        };
        if ((item_getparam(int0, 1081) != -1 as obj)) {
            return [0, `${OC_NAME(int0)} will be returned in a broken state from Diango and will cost up to ${TOSTRING_LOCALISED(item_getparam(int0, 1079), 1)} coins to repair. Do you wish to continue?`];
        };
        if (((item_getparam(int0, 1327) != -1 as obj) && (item_getparam(int0, 3793) == 0))) {
            return [0, `${OC_NAME(int0)} will be returned in a broken state from Diango and will cost up to ${TOSTRING_LOCALISED(item_getparam(int0, 1328), 1)} coins to repair. Do you wish to continue?`];
        };
        if (((item_getparam(int0, 3382) != -1 as obj) && (enum_getvalue(33, 1, 15589 as cs2enum, int0) == false))) {
            return [0, `${OC_NAME(int0)} will be returned in a broken state from Diango and will cost up to ${TOSTRING_LOCALISED(item_getparam(int0, 3383), 1)} coins to repair. Do you wish to continue?`];
        };
        return [1, `${OC_NAME(int0)} (x${inttostring(INV_GETNUM(int1, int2), 10)}) will be <col=ffcb05>destroyed</col> and can be reclaimed at Diango.<br><br>Do you wish to continue?`];
    };
    return [1, `${OC_NAME(int0)} (x${inttostring(INV_GETNUM(int1, int2), 10)}) will be <col=ffcb05>destroyed</col> and will need to be re-obtained if you want another in future.<br><br>Do you wish to continue?`];
}