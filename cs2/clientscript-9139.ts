//
function script9139(): void {
    var int0 = -1 as cs2enum;
    switch (varbitplayer_20794) {
        case 0:
        case 1: {
            int0 = 6452 as cs2enum;
            break;
        }
        case 2: {
            int0 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int0 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int0 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int0 = 8017 as cs2enum;
            break;
        }
    };
    var int1 = enum_getvalue(0, 73, int0, varplayer_3233);
    if ((script9178(struct_getparam(int1, 1268)) == 1)) {
        IF_SETGRAPHIC(21106 as graphic, comp(1344, 34));  // minigames_main:fav_icon
    } else {
        IF_SETGRAPHIC(21105 as graphic, comp(1344, 34));  // minigames_main:fav_icon
    };
    script8808();
    return;
}