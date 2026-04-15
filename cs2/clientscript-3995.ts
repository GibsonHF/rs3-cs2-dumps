//
function script3995(): void {
    if (((varbitplayer_35529 == 0) || (varbitplayer_35680 == 0))) {
        return;
    };
    var int0 = -1 as obj;
    var int1 = -1 as struct;
    var int2 = 0;
    var string0 = "";
    var int3 = -1 as cs2enum;
    switch (varbitplayer_35680) {
        case 1: {
            int0 = enum_getvalue(0, 33, 3494 as cs2enum, varbitplayer_35529);
            int2 = enum_getvalue(0, 0, 3656 as cs2enum, varbitplayer_35529);
            string0 = enum_getvalue(0, 36, 5482 as cs2enum, varbitplayer_35529);
            break;
        }
        case 2: {
            int0 = enum_getvalue(0, 33, 5487 as cs2enum, varbitplayer_35529);
            int2 = enum_getvalue(0, 0, 5488 as cs2enum, varbitplayer_35529);
            string0 = enum_getvalue(0, 36, 5489 as cs2enum, varbitplayer_35529);
            break;
        }
        case 3: {
            switch (varbitplayer_35551) {
                case 1: {
                    int3 = 5490 as cs2enum;
                    break;
                }
                case 2: {
                    int3 = 5491 as cs2enum;
                    break;
                }
                case 3: {
                    int3 = 5492 as cs2enum;
                    break;
                }
                case 4: {
                    int3 = 5493 as cs2enum;
                    break;
                }
                default: {
                    return;
                }
            };
            int1 = enum_getvalue(0, 73, int3, varbitplayer_35529);
            int2 = 1;
            break;
        }
        default: {
            return;
        }
    };
    if ((varbitplayer_35680 == 3)) {
        if ((int1 == -1 as struct)) {
            return;
        };
        IF_SETTEXT(struct_getparam(int1, 2533), comp(1239, 3));
        IF_SETTEXT(struct_getparam(int1, 4858), comp(1239, 4));
    } else {
        if ((int0 == -1 as obj)) {
            return;
        };
        IF_SETTEXT(`${inttostring(int2, 10)}x ${OC_NAME(int0)}`, comp(1239, 3));
        IF_SETTEXT(string0, comp(1239, 4));
    };
    SOUND_VORBIS_VOLUME(40090 as vorbis, 1, 0, 100);
    IF_SETHIDE(false, comp(1239, 18));
    return;
}