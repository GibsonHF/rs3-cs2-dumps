//
function script12581(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = IF_GETWIDTH(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 10;
    var int8 = 0;
    if ((varbitclient_32659 > 0)) {
        if ((CC_FIND(int0, varbitclient_32660) == 1)) {
            int5 = CC_GETX();
        };
        int7 = script12577(int7, varbitclient_32659, int5);
        if ((int7 < 1)) {
            IF_SETHIDE(true, comp(1771, 86));
            IF_SET2DANGLE(0, int2);
            IF_SET2DANGLE(0, int3);
            return;
        };
        varbitclient_32659 = (varbitclient_32659 + 1);
    };
    while (((CC_FIND(int1, int6) == 1) && (CC_FIND[1](int0, int6) == 1))) {
        int6 = (int6 + 1);
        int5 = (CC_GETX() + int7);
        if ((int5 > int4)) {
            int5 = ((-150 + int5) - int4);
            if ((((varbitplayer_32636 != 0) && (varbitclient_32660 == 0)) && (int6 != 1))) {
                CC_SETTEXT[1](inttostring(varbitplayer_32636, 10));
                script12574(varbitplayer_32636);
                varbitclient_32660 = (int6 - 1);
                varbitclient_32659 = 1;
            } else {
                int8 = (5 + RANDOMINC(15));
                CC_SETTEXT[1](inttostring(int8, 10));
                script12574(int8);
            };
        };
        CC_SETPOSITION(int5, CC_GETY(), 0, 4);
        CC_SETPOSITION[1](int5, CC_GETY(), 0, 4);
    };
    script12578(int2, int3);
    SOUND_VORBIS_VOLUME(7715 as vorbis, 1, 0, 30);
    return;
}