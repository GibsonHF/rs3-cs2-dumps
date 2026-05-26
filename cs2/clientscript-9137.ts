//
function script9137(int0: number, int1: number): void {
    var string0 = "Mark this activity as a favourite";
    var int2 = -1 as cs2enum;
    switch (varbitplayer_20794) {
        case 0:
        case 1: {
            int2 = 6452 as cs2enum;
            break;
        }
        case 2: {
            int2 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int2 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int2 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int2 = 8017 as cs2enum;
            break;
        }
    };
    var int3 = enum_getvalue(0, 73, int2, varplayer_3233);
    if ((script9178(struct_getparam(int3, 1268)) == 1)) {
        string0 = "Remove this activity from your favourites";
        IF_SETGRAPHIC(21108 as graphic, comp(1344, 34));
    } else {
        IF_SETGRAPHIC(21107 as graphic, comp(1344, 34));
    };
    script8800(string0, int0, int1);
    return;
}