//
function script13088(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if ((script13085(675, OC_WEARPOS(int0)) == 0)) {
        return 0;
    };
    if ((item_getparam(int0, 4196) == 3)) {
        return 0;
    };
    if ((script13089(int0) == 1)) {
        return 0;
    };
    if ((((OC_WEARPOS(int0) == 3) && (enum_getvalue(73, 0, 7365 as cs2enum, script7608(int0)) == -1)) || ((OC_WEARPOS(int0) == 5) && (enum_getvalue(73, 0, 7366 as cs2enum, script7608(int0)) == -1)))) {
        return 0;
    };
    if ((item_getparam(int0, 226) == 1)) {
        return 0;
    };
    if ((OC_TRADEABLE(int0) == 1)) {
        return 1;
    };
    if ((item_getparam(int0, 4196) == 1)) {
        return 1;
    };
    if (((item_getparam(int0, 1047) == 1) && (item_getparam(int0, 1050) != 1))) {
        return 1;
    };
    if (((item_getparam(int0, 258) == 1) && (item_getparam(int0, 4244) == 1))) {
        return 1;
    };
    if ((item_getparam(int0, 258) == 1)) {
        return 1;
    };
    if ((item_getparam(int0, 259) == 1)) {
        return 1;
    };
    if ((item_getparam(int0, 277) != -1 as stat)) {
        return 1;
    };
    switch (OC_WEARPOS(int0)) {
        case 0: {
            return script13090(int0);
        }
        case 1: {
            return script13091(int0);
        }
        case 2: {
            return script13092(int0);
        }
        case 3: {
            return script13097(int0);
        }
        case 4: {
            return script13093(int0);
        }
        case 5: {
            return script13098(int0);
        }
        case 7: {
            return script13094(int0);
        }
        case 9: {
            return script13095(int0);
        }
        case 10: {
            return script13096(int0);
        }
    };
    return 0;
}