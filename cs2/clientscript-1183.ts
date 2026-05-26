//[clientscript,boardgames_rank_update]
function script1183(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    switch (varclient_808) {
        case 1: {
            IF_SETHIDE(1, int3);
            IF_SETHIDE(1, int4);
            IF_SETHIDE(1, int5);
            IF_SETHIDE(0, int2);
            IF_SETTEXT("Draughts", int0);
            IF_SETTEXT(inttostring(varplayer_1365, 10), int1);
            break;
        }
        case 2: {
            IF_SETHIDE(1, int2);
            IF_SETHIDE(1, int4);
            IF_SETHIDE(1, int5);
            IF_SETHIDE(0, int3);
            IF_SETTEXT("Runelink", int0);
            IF_SETTEXT(inttostring(varplayer_1364, 10), int1);
            break;
        }
        case 3: {
            IF_SETHIDE(1, int2);
            IF_SETHIDE(1, int3);
            IF_SETHIDE(1, int5);
            IF_SETHIDE(0, int4);
            IF_SETTEXT("Runesquares", int0);
            IF_SETTEXT(inttostring(varplayer_1380, 10), int1);
            break;
        }
        case 4: {
            IF_SETHIDE(1, int2);
            IF_SETHIDE(1, int3);
            IF_SETHIDE(1, int4);
            IF_SETHIDE(0, int5);
            IF_SETTEXT("Runeversi", int0);
            IF_SETTEXT(inttostring(varplayer_1370, 10), int1);
            break;
        }
        default: {
            IF_SETHIDE(1, int3);
            IF_SETHIDE(1, int4);
            IF_SETHIDE(1, int5);
            IF_SETHIDE(1, int2);
            IF_SETTEXT("", int0);
            IF_SETTEXT("", int1);
            break;
        }
    };
    return;
}