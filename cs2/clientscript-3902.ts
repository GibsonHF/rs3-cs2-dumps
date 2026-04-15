//
function script3902(int0: component, int1: int, int2: component, int3: int): void {
    if ((script6431() == true)) {
        IF_SETHIDE(true, comp(276, 18));
        ACTIVECLANCHANNEL_FIND_AFFINED(0);
    };
    script3843();
    switch (int0) {
        case 96534533:
        case 96600072:
        case 33882127:
        case 33882147:
        case 86048782: {
            break;
        }
        default: {
            return;
        }
    };
    if ((script7980(int2) != -1)) {
        script7002(int0, int1, int2);
        return;
    };
    if ((script8053(int2) == 1)) {
        return;
    };
    if (((int0 == comp(1313, 14)) && (int2 != comp(1313, 75)))) {
        return;
    };
    var int4 = 93 as inv;
    if (((varclient_6709 > 0) && (varbitplayer_45139 == 1))) {
        int4 = 530 as inv;
    };
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 1;
    switch (int2) {
        case 96534533:
        case 96600072: {
            if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int2, int3) == 1))) {
                [int5, int6] = [CC_GETINVOBJECT(), CC_GETINVCOUNT()];
                script9230(CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1]());
                if ((CC_FIND(int2, int3) == 1)) {
                    script9230(int5, int6);
                };
            };
            break;
        }
        case 43384837: {
            script11679(93 as inv, int0, int1, 530 as inv, int2, int3);
            break;
        }
        case 95944719:
        case 95813663:
        case 95944716:
        case 95813648:
        case 33882140:
        case 33882172: {
            if ((int0 == comp(517, 35))) {
                return;
            };
            if ((CC_FIND(int0, int1) == 1)) {
                if ((CC_GETINVOBJECT() != -1 as obj)) {
                    int7 = item_getparam(CC_GETINVOBJECT(), 5432);
                };
                if ((((int0 != comp(517, 15)) || (script5730(int7, CC_GETINVOBJECT(), int1) == 1)) && ((script10906() == 0) || ((item_getparam(CC_GETINVOBJECT(), 3845) == false) && (enum_getvalue(33, 1, 15589 as cs2enum, CC_GETINVOBJECT()) == false))))) {
                    script9214(CC_GETINVOBJECT(), 93 as inv, int1, 1);
                };
            };
            break;
        }
        case 120782850:
        case 120782859:
        case 120782868:
        case 120782877:
        case 120782886:
        case 120782895:
        case 120782904:
        case 120782913:
        case 120782922:
        case 120782931:
        case 120782940:
        case 120782949:
        case 120782958:
        case 120782967:
        case 120782976:
        case 120782985:
        case 120782994:
        case 120783003:
        case 120783012:
        case 120783021: {
            if ((CC_FIND(int0, int1) == 1)) {
                script13189(int2, 93 as inv, int1, CC_GETINVOBJECT(), CC_GETINVCOUNT());
            };
            break;
        }
        case 86048843: {
            script19481(int0, 964 as inv, int1, int2, int3);
            break;
        }
        default: {
            script8918(int0, int4, int1, int2, int3);
            break;
        }
    };
    return;
}