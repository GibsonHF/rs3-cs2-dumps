//
function script6610(int0: unknown_int): void {
    var int1 = 0;
    var int2 = comp(1324, 7);
    var int3 = (int1 + 100);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 100;
    if ((IF_FIND(comp(1324, 16)) == 1)) {
        int6 = CC_GETX();
        int7 = CC_GETY();
        int8 = CC_GETX();
        int9 = CC_GETY();
    };
    while ((int10 < (ENUM_GETOUTPUTCOUNT(6060 as cs2enum) + 100))) {
        if (((((((CC_FIND(int2, int10) == 1) && (IF_FIND[1](comp(1324, 16)) == 1)) && (CC_GETX() >= CC_GETX[1]())) && (CC_GETX() <= (CC_GETX[1]() + CC_GETWIDTH[1]()))) && (CC_GETY() >= CC_GETY[1]())) && (CC_GETY() <= (CC_GETY[1]() + CC_GETHEIGHT[1]())))) {
            SOUND_VORBIS_VOLUME(5262 as vorbis, 1, 0, 200);
            script6611(int0, int1);
            if ((int0 == 2)) {
                CC_SETPOSITION(int6, int9, 0, 0);
            } else {
                CC_SETPOSITION(int8, int7, 0, 0);
            };
            int4 = CC_GETWIDTH();
            int5 = CC_GETHEIGHT();
        };
        int6 = (int6 + int4);
        int7 = (int7 + int5);
        int10 = (int10 + 1);
        int1 = (int1 + 1);
    };
    if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1324, 15));
        IF_SETHIDE(true, comp(1324, 14));
    } else {
        IF_SETHIDE(true, comp(1324, 15));
        IF_SETHIDE(false, comp(1324, 14));
    };
    return;
}