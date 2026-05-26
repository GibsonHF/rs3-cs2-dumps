//
function script11159(): void {
    var int0 = script1625(1);
    var int1 = DB_GETFIELDCOUNT(int0, 143360);
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    unk11013(0, int1, 1, 70910029);
    unk11013(0, int1, 1, 70910030);
    unk11013(0, int1, 1, 70910028);
    CC_DELETEALL(70910029);
    CC_DELETEALL(70910030);
    CC_DELETEALL(70910028);
    var int5 = -1;
    while ((++int2 < int1)) {
        [int3, int4] = dbrow_getfield(int0, 143360, int2);
        int5 = script11161(int3);
        if ((int5 != -1)) {
            CC_CREATE(70910029, 5, int2);
            CC_SETGRAPHIC(int5);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(41, 50, 0, 0);
            if ((int2 < (int1 - 1))) {
                CC_CREATE[1](70910030, 5, int2);
                CC_SETGRAPHIC[1](20673);
                CC_SETPOSITION[1](18, 0, 0, 0);
                CC_SETSIZE[1](20, 20, 0, 0);
                if ((varbitplayer_52295 != int3)) {
                    CC_SETTRANS[1](140);
                };
            };
            if ((varbitplayer_52295 != int3)) {
                CC_SETTRANS(140);
            };
            CC_CREATE(70910028, 5, int2);
            CC_SETGRAPHIC(33903);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(41, 50, 0, 0);
        };
    };
    return;
}