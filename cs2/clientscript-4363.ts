//[clientscript,clan_noticeboard_event_show]
function script4363(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, long0: BigInt, string0: string): void {
    IF_SETTEXT(string0, 72024130);
    stack(5933);
    stack(int1);
    IF_SETGRAPHIC();
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