//
function script3995(): void {
    if (((varbitplayer_35529 == 0) || (varbitplayer_35680 == 0))) {
        return;
    };
    var int0 = -1 as obj;
    var int1 = -1;
    var int2 = 0;
    var string0 = "";
    var int3 = -1;
    switch (varbitplayer_35680) {
        case 1: {
            int0 = enum_getvalue(0, 33, 3494 as cs2enum, varbitplayer_35529);
            int2 = enum_getvalue(0, 0, 3656 as cs2enum, varbitplayer_35529);
            string0 = enum_getvalue(0, 36, 5482 as cs2enum, varbitplayer_35529);
            break;
        }
        case 2: {
            int0 = enum_getvalue(0, 33, 5487, varbitplayer_35529);
            int2 = enum_getvalue(0, 0, 5488, varbitplayer_35529);
            string0 = enum_getvalue(0, 36, 5489, varbitplayer_35529);
            break;
        }
        case 3: {
            switch (varbitplayer_35551) {
                case 1: {
                    int3 = 5490;
                    break;
                }
                case 2: {
                    int3 = 5491;
                    break;
                }
                case 3: {
                    int3 = 5492;
                    break;
                }
                case 4: {
                    int3 = 5493;
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
        if ((int1 == -1)) {
            return;
        };
        IF_SETTEXT(struct_getparam(int1, 2533), 81199107);
        IF_SETTEXT(struct_getparam(int1, 4858), 81199108);
    } else {
        if ((int0 == -1 as obj)) {
            return;
        };
        IF_SETTEXT(`${inttostring(int2, 10)}x ${OC_NAME(int0)}`, comp(1239, 3));  // mtxfair17_chinchompa:prize_name_and_amount
        IF_SETTEXT(string0, comp(1239, 4));  // mtxfair17_chinchompa:prize_description
    };
    SOUND_VORBIS_VOLUME(40090 as vorbis, 1, 0, 100);
    IF_SETHIDE(false, comp(1239, 18));  // mtxfair17_chinchompa:prize_claim_layer
    return;
}