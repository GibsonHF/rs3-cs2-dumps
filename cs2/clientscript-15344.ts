//
function script15344(int0: component, int1: component): void {
    var int2 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    var int3 = 0;
    var int4 = 2;
    while ((int3 < int2)) {
        if ((script15345(int0, int1, enum_getvalue(0, 41, 16072 as cs2enum, int3), int4) == 1)) {
            int4 = (int4 + (45 + 2));
        };
        int3 = (int3 + 1);
    };
    var int5 = unk11046();
    if (((int5 > 0) && (script15346(int0, int1, int4) == 1))) {
        int4 = (int4 + (45 + 2));
    };
    script15356(int1, 0);
    if ((varplayer_9607 == -1 as achievement)) {
        script9962(int0, int1);
    };
    return;
}