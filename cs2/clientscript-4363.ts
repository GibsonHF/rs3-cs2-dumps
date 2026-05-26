//[clientscript,clan_noticeboard_event_show]
function script4363(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, long0: BigInt, string0: string): void {
    IF_SETTEXT(string0, 72024130);
    IF_SETGRAPHIC(5933, int1);
    if ((varbitplayer_43999 == 0)) {
        if (branch_not_long[14](long0, -1n)) {
            IF_SETONOP(callback(script4330, long0), 72024116);
            IF_SETOP(1, "Select", 72024116);
            IF_SETHIDE(0, 72024112);
        } else {
            IF_CLEAROPS(72024116);
            IF_SETHIDE(1, 72024112);
        };
        if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
            if ((script9357(ACTIVECLANSETTINGS_GETAFFINEDRANK(ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())))) == 1)) {
                IF_SETHIDE(0, 72024121);
            } else {
                IF_SETHIDE(1, 72024121);
            };
        } else {
            IF_SETHIDE(1, 72024121);
        };
    };
    varplayer_2047 = int0;
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(5935, 72024079);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(5935, 72024082);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(5935, 72024085);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(5935, 72024088);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(5935, 72024091);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(5935, 72024094);
            break;
        }
        case 7: {
            IF_SETGRAPHIC(5935, 72024097);
            break;
        }
        case 8: {
            IF_SETGRAPHIC(5935, 72024100);
            break;
        }
    };
    script4624(72024079, 1);
    script4624(72024082, 2);
    script4624(72024085, 3);
    script4624(72024088, 4);
    script4624(72024091, 5);
    script4624(72024094, 6);
    script4624(72024097, 7);
    script4624(72024100, 8);
    return;
}