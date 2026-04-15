//[clientscript,clan_noticeboard_event_show]
function script4363(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, long0: unknown_long, string0: string): void {
    IF_SETTEXT(string0, comp(1099, 66));
    stack(5933);
    stack(int1);
    IF_SETGRAPHIC();
    if ((varbitplayer_43999 == 0)) {
        if (branch_not_long[14](long0, -1n)) {
            IF_SETONOP(callback(script4330, long0), comp(1099, 52));
            IF_SETOP(1, "Select", 72024116);
            IF_SETHIDE(0, 72024112);
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
            stack(5935);
            stack(72024079);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(5935);
            stack(72024082);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(5935);
            stack(72024085);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            stack(5935);
            stack(72024088);
            IF_SETGRAPHIC();
            break;
        }
        case 5: {
            stack(5935);
            stack(72024091);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            stack(5935);
            stack(72024094);
            IF_SETGRAPHIC();
            break;
        }
        case 7: {
            stack(5935);
            stack(72024097);
            IF_SETGRAPHIC();
            break;
        }
        case 8: {
            stack(5935);
            stack(72024100);
            IF_SETGRAPHIC();
            break;
        }
    };
    script4624(comp(1099, 15), 1);
    script4624(comp(1099, 18), 2);
    script4624(comp(1099, 21), 3);
    script4624(comp(1099, 24), 4);
    script4624(comp(1099, 27), 5);
    script4624(comp(1099, 30), 6);
    script4624(comp(1099, 33), 7);
    script4624(comp(1099, 36), 8);
    return;
}