//
function script13235(int0: int, int1: unknown_int, int2: unknown_int, int3: boolean, int4: int): void {
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int5 = comp(1845, 32);
            int6 = comp(1845, 42);
            int7 = comp(1845, 41);
            int8 = comp(1845, 39);
            break;
        }
        case 1: {
            int5 = comp(1845, 31);
            int6 = comp(1845, 51);
            int7 = comp(1845, 50);
            int8 = comp(1845, 48);
            break;
        }
        case 2: {
            int5 = comp(1845, 30);
            int6 = comp(1845, 60);
            int7 = comp(1845, 59);
            int8 = comp(1845, 57);
            break;
        }
        case 3: {
            int5 = comp(1845, 29);
            int6 = comp(1845, 69);
            int7 = comp(1845, 68);
            int8 = comp(1845, 66);
            break;
        }
        case 4: {
            int5 = comp(1845, 28);
            int6 = comp(1845, 78);
            int7 = comp(1845, 77);
            int8 = comp(1845, 75);
            break;
        }
        case 5: {
            int5 = comp(1845, 27);
            int6 = comp(1845, 87);
            int7 = comp(1845, 86);
            int8 = comp(1845, 84);
            break;
        }
        case 6: {
            int5 = comp(1845, 26);
            int6 = comp(1845, 96);
            int7 = comp(1845, 95);
            int8 = comp(1845, 93);
            break;
        }
        case 7: {
            int5 = comp(1845, 25);
            int6 = comp(1845, 105);
            int7 = comp(1845, 104);
            int8 = comp(1845, 102);
            break;
        }
        case 8: {
            int5 = comp(1845, 24);
            int6 = comp(1845, 114);
            int7 = comp(1845, 113);
            int8 = comp(1845, 111);
            break;
        }
        case 9: {
            int5 = comp(1845, 23);
            int6 = comp(1845, 123);
            int7 = comp(1845, 122);
            int8 = comp(1845, 120);
            break;
        }
        case 10: {
            int5 = comp(1845, 22);
            int6 = comp(1845, 132);
            int7 = comp(1845, 131);
            int8 = comp(1845, 129);
            break;
        }
        default: {
            return;
        }
    };
    CC_DELETEALL(int7);
    CC_CREATE(int7, 5, IF_GETNEXTSUBID(int7));
    CC_SETGRAPHIC(18967 as graphic);
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