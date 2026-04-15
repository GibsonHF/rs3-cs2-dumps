//
function script7965(int0: struct): unknown_int {
    var int1 = -1 as obj;
    if (((int0 != -1 as struct) && ((struct_getparam(int0, 6525) == true) || ((struct_getparam(int0, 3394) == 1) && (((varplayer_623 == -1 as npc_uid) && (varplayer_616 == -1 as player_uid)) || (varbitplayer_22843 == 1)))))) {
        int1 = INV_GETOBJ(94 as inv, 3);
        if ((int1 != -1 as obj)) {
            if ((item_getparam(int1, 4338) != -1 as obj)) {
                int1 = item_getparam(int1, 4338);
            };
            if (((int0 == 28430 as struct) && (item_getparam(int1, 8171) == 1))) {
                return 0;
            };
        };
        switch (struct_getparam(int0, 2880)) {
            case 2:
            case 1:
            case 4: {
                return 0;
            }
        };
        return 1;
    };
    return 0;
}