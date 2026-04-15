//[clientscript,boardgames_rank_update]
function script1183(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    switch (varclient_808) {
        case 1: {
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(false, int2);
            IF_SETTEXT("Draughts", int0);
            IF_SETTEXT(inttostring(varplayer_1365, 10), int1);
            break;
        }
        case 2: {
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(false, int3);
            IF_SETTEXT("Runelink", int0);
            IF_SETTEXT(inttostring(varplayer_1364, 10), int1);
            break;
        }
        case 3: {
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(false, int4);
            IF_SETTEXT("Runesquares", int0);
            IF_SETTEXT(inttostring(varplayer_1380, 10), int1);
            break;
        }
        case 4: {
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(false, int5);
            IF_SETTEXT("Runeversi", int0);
            IF_SETTEXT(inttostring(varplayer_1370, 10), int1);
            break;
        }
        default: {
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(true, int2);
            IF_SETTEXT("", int0);
            IF_SETTEXT("", int1);
            break;
        }
    };
    return;
}