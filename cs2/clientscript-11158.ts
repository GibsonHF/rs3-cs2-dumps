//
function script11158(): void {
    var int0 = script1625(2);
    var int1 = DB_GETFIELDCOUNT(int0, 143360);
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as graphic;
    unk11013(0, int1, 1, comp(1082, 64));
    CC_DELETEALL(comp(1082, 64));
    while ((++int2 < int1)) {
        [int3, int4] = dbrow_getfield(int0, 143360, int2);
        int5 = script11160(int3);
        if ((int5 != -1 as graphic)) {
            CC_CREATE(comp(1082, 64), 5, int2);
            CC_SETGRAPHIC(int5);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(40, 40, 0, 0);
            if ((varbitplayer_52296 != int3)) {
                CC_SETTRANS(140);
            };
        };
    };
    return;
}