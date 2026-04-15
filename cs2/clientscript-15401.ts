//
function script15401(int0: dbrow, int1: int): void {
    var int2 = -1;
    var int3 = -1 as loc;
    var int4 = -1 as obj;
    var int5 = comp(-1, 65535);
    int5 = enum_getvalue(0, 9, 16105 as cs2enum, int1);
    switch (int1) {
        case 0: {
            int2 = varbitplayer_48597;
            break;
        }
        case 1: {
            int2 = varbitplayer_48598;
            break;
        }
        case 2: {
            int2 = varbitplayer_48599;
            break;
        }
        case 3: {
            int2 = varbitplayer_48600;
            break;
        }
        case 4: {
            int2 = varbitplayer_48601;
            break;
        }
    };
    [int3, int4] = dbrow_getfield(int0, 475216, int2);
    IF_SETTEXT(OC_NAME(int4), int5);
    return;
}