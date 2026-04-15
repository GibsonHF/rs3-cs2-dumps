//
function script9223(int0: component, int1: int, int2: component, int3: int): void {
    script3843();
    if ((((int0 != comp(1464, 15)) && (int0 != comp(1462, 31))) && (int0 != comp(517, 28)))) {
        return;
    };
    if ((script7980(int2) != -1)) {
        script7002(int0, int1, int2);
        return;
    };
    if ((script8053(int2) == 1)) {
        return;
    };
    var int4 = -1 as inv;
    switch (int2) {
        case 96534533:
        case 96600072:
        case 33882127: {
            int4 = 93 as inv;
            break;
        }
        case 33882147: {
            return;
        }
        default: {
            script8918(int0, 94 as inv, int1, int2, int3);
            return;
        }
    };
    var int5 = -1 as obj;
    var int6 = -1 as obj;
    if (((int4 != -1 as inv) && (CC_FIND(int0, int1) == 1))) {
        if ((int3 == -1)) {
            script9217(int4, 0, CC_GETINVOBJECT(), int1);
        } else if ((CC_FIND[1](int2, int3) == 1)) {
            int6 = CC_GETINVOBJECT();
            int5 = CC_GETINVOBJECT[1]();
            if ((int5 == -1 as obj)) {
                script9218(int4, 0, int6, int1, int3);
            } else if ((OC_WEARPOS(int6) == OC_WEARPOS(int5))) {
                script9214(int5, int4, int3, 1);
            } else if (((OC_WEARPOS(int5) != -1) && (((OC_WEARPOS(int6) == 5) && (OC_WEARPOS2(int5) == 5)) || (((OC_WEARPOS(int6) == 3) && (OC_WEARPOS2(int5) == 3)) || (((OC_WEARPOS2(int6) == 5) && (OC_WEARPOS(int5) == 5)) || ((OC_WEARPOS2(int6) == 3) && (OC_WEARPOS(int5) == 3))))))) {
                script9214(int5, int4, int3, 1);
            } else {
                script9217(int4, 0, CC_GETINVOBJECT(), int1);
            };
        };
    };
    return;
}