//
function script20304(): void {
    var int0 = script20117(varplayer_12314);
    if ((script20132(int0) == 0)) {
        return;
    };
    if (((varclient_8334 == IF_GETWIDTH(comp(1361, 7))) && (varclient_8335 == IF_GETHEIGHT(comp(1361, 7))))) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1335472, 0);
    var int2 = dbrow_getfield(int1, 1372256, 1);
    var int3 = 0;
    var int4 = script20168(dbrow_getfield(int0, 1335616, 0));
    var int5 = -1;
    var string0 = "";
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    unk11023(int4, 1368160, 1);
    var int11 = dbrow_findnext();
    var int12 = 0;
    var int13 = script20491(2100);
    while ((int11 != -1)) {
        int9 = dbrow_getfield(int11, 1368064, 0);
        int5 = dbrow_getfield(int11, 1368096, 0);
        int6 = dbrow_getfield(int11, 1368144, 0);
        string0 = script20131(int11, int5);
        int3 = (200 + dbrow_getfield(int2, 1376273, int6));
        if (((CC_FINDBYCATEGORY[1](comp(1361, 21), int3, 0) == 1) && (CC_FIND(comp(1361, 21), int9) == 1))) {
            if ((unk11011(script20173(((3000 * 5) + int9)), 89194517) == 1)) {
                int12 = (38 + 32);
            } else {
                int12 = 38;
            };
            int7 = CC_GETHEIGHT();
            int8 = MAX(40, (script15891(string0, (CC_GETWIDTH() - int12), int13, 0) + 4));
            if ((int8 != int7)) {
                CC_SETSIZE(6, int8, 1, 0);
                if ((int8 > int7)) {
                    int10 = (cc_getparam[1](9334) + (int8 - int7));
                } else {
                    int10 = (cc_getparam[1](9334) - (int7 - int8));
                };
                if ((script20171(1, (200 - int3)) == 0)) {
                    CC_SETSIZE[1](0, int10, 1, 0);
                };
                cc_setparam[1](9334, int10);
            };
        };
        int11 = dbrow_findnext();
    };
    script20309(89194517, 89194516, 89194518);
    varclient_8334 = IF_GETWIDTH(comp(1361, 7));
    varclient_8335 = IF_GETHEIGHT(comp(1361, 7));
    script16559(89194520, 100);
    script20316();
    return;
}