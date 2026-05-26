//
function script9223(int0: number, int1: number, int2: number, int3: number): void {
    script3843();
    if ((((int0 != 95944719) && (int0 != 95813663)) && (int0 != 33882140))) {
        return;
    };
    if ((script7980(int2) != -1)) {
        script7002(int0, int1, int2);
        return;
    };
    if ((script8053(int2) == 1)) {
        return;
    };
    var int4 = -1;
    switch (int2) {
        case 96534533:
        case 96600072:
        case 33882127: {
            int4 = 93;
            break;
        }
        case 33882147: {
            return;
        }
        default: {
            script8918(int0, 94, int1, int2, int3);
            return;
        }
    };
    var int5 = -1;
    var int6 = -1;
    if (((int4 != -1) && (CC_FIND(int0, int1) == 1))) {
        if ((int3 == -1)) {
            script9217(int4, 0, CC_GETINVOBJECT(), int1);
        } else if ((CC_FIND[1](int2, int3) == 1)) {
            int6 = CC_GETINVOBJECT();
            int5 = CC_GETINVOBJECT[1]();
            if ((int5 == -1)) {
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