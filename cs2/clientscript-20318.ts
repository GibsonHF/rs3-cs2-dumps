//
function script20318(int0: component, int1: component, int2: component, int3: component, int4: component, int5: dbrow, int6: int, int7: int, int8: int): void {
    var int9 = SCALE(255, 350, int7);
    if ((int7 <= 350)) {
        if ((CC_FINDBYCATEGORY(int0, script20173((3000 + int6))) == 1)) {
            CC_SETTRANS(int9);
        };
        if ((CC_FINDBYCATEGORY(int0, script20173(((3000 * 2) + int6))) == 1)) {
            CC_SETTRANS(int9);
        };
        if ((CC_FINDBYCATEGORY(int0, script20173(((3000 * 3) + int6))) == 1)) {
            CC_SETTRANS(int9);
        };
        if ((CC_FINDBYCATEGORY(int0, script20173(((3000 * 4) + int6))) == 1)) {
            CC_SETTRANS(int9);
        };
        if ((CC_FINDBYCATEGORY(int0, script20173(((3000 * 5) + int6))) == 1)) {
            CC_SETTRANS(int9);
        };
        if ((CC_FIND(int3, int6) == 1)) {
            CC_SETONTIMER(callback(script20318, int0, int1, int2, int3, int4, int5, int6, (int7 + 1), int8));
        };
        return;
    };
    var int10 = 0;
    var int11 = 0;
    if ((CC_FIND(int0, int6) == 1)) {
        CC_GETDYNAMICLAYER();
        if ((CC_FIND[1](int0, int6) == 1)) {
            int10 = ((cc_getparam(9334) - CC_GETHEIGHT[1]()) - 4);
            int11 = (cc_getparam(9336) - 1);
            cc_setparam(9334, int10);
            cc_setparam(9336, int11);
            if ((dbrow_getfield(int5, 1368144, 0) == 0)) {
                cc_setparam(9337, (cc_getparam(9337) - 1));
            };
            if ((script20171(int8, (200 - UI_GETCATEGORY(CC_GETID()))) == 0)) {
                CC_SETSIZE(0, int10, 1, 0);
            };
            if ((IF_FIND(int0) == 1)) {
                cc_setparam(9338, MAX(0, (cc_getparam(9338) - 1)));
                cc_setparam(9339, MAX(0, (cc_getparam(9339) - 1)));
            };
            CC_DELETE[1]();
            if ((CC_FIND[1](int3, int6) == 1)) {
                CC_DELETE[1]();
            };
            if (((int11 <= 0) && (int0 != comp(1479, 19)))) {
                IF_SETONRESIZE(callback(script20285), int4);
                IF_CALLONRESIZE(int4);
            } else if ((script20320(int0, int2) == 0)) {
                script20309(int0, int1, int2);
            };
        };
    };
    return;
}