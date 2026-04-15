//
function script1885(): void {
    var int0 = -1 as struct;
    script13992(comp(950, 17), comp(-1, 65535), 28557 as struct, script9670(varbitplayer_17130, 1));
    script13992(comp(950, 37), comp(-1, 65535), 28557 as struct, script9670(varbitplayer_17130, 2));
    script13992(comp(950, 57), comp(-1, 65535), 28557 as struct, script9670(varbitplayer_17130, 3));
    switch (varbitplayer_17130) {
        case 1: {
            if ((varbitplayer_17129 == 0)) {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17115);
            } else {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17118);
            };
            break;
        }
        case 2: {
            if ((varbitplayer_17129 == 0)) {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17116);
            } else {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17119);
            };
            break;
        }
        case 3: {
            if ((varbitplayer_17129 == 0)) {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17117);
            } else {
                int0 = enum_getvalue(0, 73, 1022 as cs2enum, varbitplayer_17120);
            };
            break;
        }
    };
    script1951(int0);
    return;
}