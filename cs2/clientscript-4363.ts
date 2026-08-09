//[clientscript,clan_noticeboard_event_show]
function script4363(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string, long0: bigint): void {
    IF_SETTEXT(string0, comp(1099, 66));
    IF_SETGRAPHIC(5933 as graphic, int1);
    if ((varbitplayer_43999 == 0)) {
        if (LONG_BRANCH_NOT(long0, -1n)) {
            IF_SETONOP(callback(script4330, long0), comp(1099, 52));
            IF_SETOP(1, "Select", comp(1099, 52));
            IF_SETHIDE(false, comp(1099, 48));
        } else {
            IF_CLEAROPS(comp(1099, 52));
            IF_SETHIDE(true, comp(1099, 48));
        };
        if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
            if ((script9357(ACTIVECLANSETTINGS_GETAFFINEDRANK(ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())))) == 1)) {
                IF_SETHIDE(false, comp(1099, 57));
            } else {
                IF_SETHIDE(true, comp(1099, 57));
            };
        } else {
            IF_SETHIDE(true, comp(1099, 57));
        };
    };
    varplayer_2047 = int0;
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 15));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 18));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 21));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 24));
            break;
        }
        case 5: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 27));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 30));
            break;
        }
        case 7: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 33));
            break;
        }
        case 8: {
            IF_SETGRAPHIC(5935 as graphic, comp(1099, 36));
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