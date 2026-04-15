//
function script13945(): void {
    var int0 = 93 as inv;
    var int1 = 94 as inv;
    var int2 = 530 as inv;
    if ((varbitplayer_22179 != 0)) {
        [int0, int1, int2] = script15906(varbitplayer_22179);
    };
    var int3 = int0;
    var int4 = varplayer_7752;
    if ((varbitplayer_22179 == 19)) {
        int3 = int2;
        int4 = varplayer_7753;
        IF_SETSIZE(IF_GETWIDTH(comp(517, 276)), ((8 * 37) + 6), 0, 0, comp(517, 276));
        IF_SETHIDE(true, comp(517, 280));
    } else {
        IF_SETSIZE(IF_GETWIDTH(comp(517, 276)), ((7 * 37) + 6), 0, 0, comp(517, 276));
        IF_SETHIDE(false, comp(517, 280));
    };
    if (((int1 == -1 as inv) || (int3 == -1 as inv))) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = INV_SIZE(int3);
    var int8 = IF_GETWIDTH(comp(517, 279));
    var int9 = 8;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = -1 as graphic;
    CC_DELETEALL(comp(517, 278));
    CC_DELETEALL(comp(517, 279));
    while ((int5 < int7)) {
        if ((TESTBIT(int4, int5) == 1)) {
            int12 = 29661 as graphic;
        } else {
            int12 = 18266 as graphic;
        };
        CC_CREATE(comp(517, 278), 5, int6);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION(int9, int10, 0, 0);
        CC_SETGRAPHIC(int12);
        CC_CREATE(comp(517, 279), 5, int6);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int9 + 4), (int10 + 2), 0, 0);
        if (((++int9 + 37) > int8)) {
            int9 = 8;
            int10 = (int10 + 37);
        };
        int6 = (int6 + 1);
        int5 = (int5 + 1);
    };
    int5 = 0;
    while ((int5 < int7)) {
        int11 = INV_GETOBJ(int3, int5);
        if ((CC_FIND(comp(517, 279), int5) == 1)) {
            CC_SETOBJECT(int11, INV_GETNUM(int3, int5));
            script14395(int3, int11);
        };
        int5 = (int5 + 1);
    };
    return;
}