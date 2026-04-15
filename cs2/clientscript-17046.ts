//
function script17046(int0: unknown_int, int1: int, int2: component, int3: int, int4: int, int5: int): void {
    var int6 = -1 as dbrow;
    if ((CC_FIND(int2, int1) == 1)) {
        CC_SETPOSITION((int4 + 12), (SCALE(1, 6, int5) - 8), 0, 0);
        CC_SETSIZE(SCALE(1, 3, int5), SCALE(1, 3, int5), 0, 0);
        if ((enum_hasoutput(0, 13321 as cs2enum, varbitplayer_18994) == 1)) {
            stack(409632);
            stack(enum_getreverseindex(0, 0, 13321 as cs2enum, varbitplayer_18994, 0));
            DB_FIND(0);
            dbrow_findnext();
            if ((stack() != -1)) {
                DB_FIND_REFINE(409648, (int3 + 1), 0);
                dbrow_findnext();
                int6 = stack();
                if (((int6 != -1) && (script17032(int6) > 0))) {
                    CC_SETONVARTRANSMIT(callback(script17041, int6, -1, int0, int2, int1, -1, CC_GETWIDTH(), 9433, 9434, 11334, 3));
                    CC_SETHIDE(0);
                };
            };
        };
    };
    return;
}