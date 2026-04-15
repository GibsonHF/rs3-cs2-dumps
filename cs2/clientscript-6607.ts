//
function script6607(int0: component): void {
    var int1 = 100;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 150);
    int3 = ENUM_GETOUTPUTCOUNT(6060 as cs2enum);
    int3 = (int3 + int1);
    if ((IF_FIND(comp(1324, 16)) == 1)) {
        int4 = CC_GETX();
        int5 = CC_GETY();
        int6 = CC_GETX();
        int7 = CC_GETY();
        int8 = (CC_GETHEIGHT() + CC_GETY());
    };
    while ((int1 < int3)) {
        if ((CC_FIND(int0, int1) == 1)) {
            if ((enum_getvalue(0, 0, 6060 as cs2enum, int2) == 1)) {
                CC_SETGRAPHIC(12168 as graphic);
                [int9, int10] = [20, 20];
            };
            if ((enum_getvalue(0, 0, 6060 as cs2enum, int2) == 2)) {
                CC_SETGRAPHIC(12166 as graphic);
                [int9, int10] = [40, 20];
            };
            if ((enum_getvalue(0, 0, 6060 as cs2enum, int2) == 3)) {
                CC_SETGRAPHIC(12162 as graphic);
                [int9, int10] = [60, 20];
            };
            if ((enum_getvalue(0, 0, 6060 as cs2enum, int2) == 4)) {
                CC_SETGRAPHIC(12158 as graphic);
                [int9, int10] = [80, 20];
            };
            CC_SETSIZE(int9, int10, 0, 0);
            CC_SET2DANGLE(0);
            CC_SETPOSITION(int4, int5, 0, 0);
            int5 = ((int5 + int10) + 1);
        };
        int1 = (int1 + 1);
        int2 = (int2 + 1);
    };
    return;
}