//
function script12576(int0: component, int1: component, int2: component): void {
    var int3 = IF_GETWIDTH(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 10;
    if ((varbitclient_32658 > 0)) {
        if ((CC_FIND(int0, varbitclient_32657) == 1)) {
            int4 = CC_GETX();
        };
        int6 = script12577(int6, varbitclient_32658, int4);
        if ((int6 < 1)) {
            IF_SETHIDE(true, comp(1771, 69));
            IF_SET2DANGLE(0, int1);
            IF_SET2DANGLE(0, int2);
            return;
        };
        varbitclient_32658 = (varbitclient_32658 + 1);
    };
    while ((CC_FIND(int0, int5++) == 1)) {
        int4 = (CC_GETX() + int6);
        if ((int4 > int3)) {
            int4 = ((-150 + int4) - int3);
            if ((((varplayer_6370 != -1 as obj) && (varbitclient_32657 == 0)) && (int5 != 1))) {
                if ((varplayer_6370 == 11237 as obj)) {
                    CC_SETOBJECT(13222 as obj, -1);
                } else if ((varplayer_6370 == 995 as obj)) {
                    CC_SETOBJECT(1004 as obj, -1);
                } else {
                    CC_SETOBJECT(varplayer_6370, -1);
                };
                CC_SETMODELZOOM(SCALE(CC_GETMODELZOOM(), 100, 125));
                varbitclient_32657 = (int5 - 1);
                varbitclient_32658 = 1;
            } else {
                CC_SETOBJECT(enum_getvalue(0, 33, 8363 as cs2enum, RANDOM(ENUM_GETOUTPUTCOUNT(8363 as cs2enum))), -1);
                CC_SETMODELZOOM(SCALE(CC_GETMODELZOOM(), 100, 125));
            };
        };
        CC_SETPOSITION(int4, CC_GETY(), 0, 4);
    };
    script12578(int1, int2);
    SOUND_VORBIS_VOLUME(7715 as vorbis, 1, 0, 30);
    return;
}