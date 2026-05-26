//
function script13235(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    switch (int0) {
        case 0: {
            int5 = 120913952;
            int6 = 120913962;
            int7 = 120913961;
            int8 = 120913959;
            break;
        }
        case 1: {
            int5 = 120913951;
            int6 = 120913971;
            int7 = 120913970;
            int8 = 120913968;
            break;
        }
        case 2: {
            int5 = 120913950;
            int6 = 120913980;
            int7 = 120913979;
            int8 = 120913977;
            break;
        }
        case 3: {
            int5 = 120913949;
            int6 = 120913989;
            int7 = 120913988;
            int8 = 120913986;
            break;
        }
        case 4: {
            int5 = 120913948;
            int6 = 120913998;
            int7 = 120913997;
            int8 = 120913995;
            break;
        }
        case 5: {
            int5 = 120913947;
            int6 = 120914007;
            int7 = 120914006;
            int8 = 120914004;
            break;
        }
        case 6: {
            int5 = 120913946;
            int6 = 120914016;
            int7 = 120914015;
            int8 = 120914013;
            break;
        }
        case 7: {
            int5 = 120913945;
            int6 = 120914025;
            int7 = 120914024;
            int8 = 120914022;
            break;
        }
        case 8: {
            int5 = 120913944;
            int6 = 120914034;
            int7 = 120914033;
            int8 = 120914031;
            break;
        }
        case 9: {
            int5 = 120913943;
            int6 = 120914043;
            int7 = 120914042;
            int8 = 120914040;
            break;
        }
        case 10: {
            int5 = 120913942;
            int6 = 120914052;
            int7 = 120914051;
            int8 = 120914049;
            break;
        }
        default: {
            return;
        }
    };
    CC_DELETEALL(int7);
    CC_CREATE(int7, 5, IF_GETNEXTSUBID(int7));
    CC_SETGRAPHIC(18967);
    CC_SETSIZE((IF_GETHEIGHT(int5) - (2 * 2)), (IF_GETHEIGHT(int5) - (2 * 2)), 0, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5836, 2);
    CC_SETPOSITION(6, 2, 0, 0);
    CC_SENDTOFRONT();
    CC_SETHIDE(int3);
    IF_SETHIDE(int1, int5);
    if ((int1 == 1)) {
        return;
    };
    if ((int2 == 1)) {
        IF_SETTEXT("Claim", int6);
    } else {
        IF_SETTEXT("Purchase", int6);
    };
    IF_SETPOSITION(IF_GETX(int5), (int4 + 2), 0, 0, int5);
    IF_SETHIDE(int3, int8);
    return;
}