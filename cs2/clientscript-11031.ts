//
function script11031(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    switch (int1) {
        case 1: {
            int2 = comp(1631, 22);  // trh55_world_event:saradomin_progress_graphic
            int3 = comp(1631, 32);  // trh55_world_event:saradomin_amount
            int4 = varbitplayer_28189;
            break;
        }
        case 2: {
            int2 = comp(1631, 38);  // trh55_world_event:zamorak_progress_graphic
            int3 = comp(1631, 17);  // trh55_world_event:zamorak_amount
            int4 = varbitplayer_28190;
            break;
        }
        case 3: {
            int2 = comp(1631, 42);  // trh55_world_event:armadyl_progress_graphic
            int3 = comp(1631, 83);  // trh55_world_event:armadyl_amount
            int4 = varbitplayer_28191;
            break;
        }
        case 4: {
            int2 = comp(1631, 75);  // trh55_world_event:godless_progress_graphic
            int3 = comp(1631, 92);  // trh55_world_event:godless_amount
            int4 = varbitplayer_28192;
            break;
        }
        default: {
            return;
        }
    };
    var int5 = (int4 / 10);
    var int6 = (int5 + 133);
    if ((int4 >= 750)) {
        int6 = (int6 + 4);
    };
    IF_SETSIZE(int6, int6, 0, 0, int2);
    IF_SETTEXT(inttostring(int4, 10), int3);
    return;
}