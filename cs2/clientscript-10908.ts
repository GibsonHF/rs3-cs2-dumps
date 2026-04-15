//
function script10908(): void {
    IF_SETHIDE(true, comp(1579, 30));
    IF_SETHIDE(true, comp(1579, 31));
    IF_SETHIDE(true, comp(1579, 32));
    IF_SETHIDE(true, comp(1579, 33));
    IF_SETHIDE(true, comp(1579, 21));
    IF_SETHIDE(true, comp(1579, 40));
    IF_SETHIDE(true, comp(1579, 48));
    IF_SETHIDE(true, comp(1579, 56));
    IF_SETHIDE(true, comp(1579, 64));
    IF_SETOPCURSOR(1, 36 as cursor, comp(1579, 21));
    IF_SETOPCURSOR(1, 36 as cursor, comp(1579, 40));
    IF_SETOPCURSOR(1, 36 as cursor, comp(1579, 48));
    IF_SETOPCURSOR(1, 36 as cursor, comp(1579, 56));
    IF_SETOPCURSOR(1, 36 as cursor, comp(1579, 64));
    IF_SETHIDE(true, comp(1579, 19));
    IF_SETHIDE(true, comp(1579, 38));
    IF_SETHIDE(true, comp(1579, 46));
    IF_SETHIDE(true, comp(1579, 54));
    IF_SETHIDE(true, comp(1579, 62));
    IF_SETHIDE(true, comp(1579, 33));
    if ((varbitplayer_26724 == 1)) {
        IF_SETHIDE(false, comp(1579, 21));
        IF_SETHIDE(false, comp(1579, 40));
        IF_SETHIDE(false, comp(1579, 48));
        IF_SETHIDE(false, comp(1579, 56));
        IF_SETHIDE(false, comp(1579, 64));
    };
    if ((varplayer_5062 != -1 as struct)) {
        IF_SETSIZE(1, 5, 0, 0, comp(1579, 26));
        IF_SETTEXT(struct_getparam(varplayer_5062, 4753), comp(1579, 7));
        switch (struct_getparam(varplayer_5062, 4754)) {
            case 2: {
                IF_SETSIZE(500, 120, 0, 0, comp(1579, 4));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), comp(1579, 23));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), comp(1579, 42));
                break;
            }
            case 3: {
                IF_SETSIZE(500, 120, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), comp(1579, 23));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), comp(1579, 42));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), comp(1579, 50));
                IF_SETPOSITION(0, 86, 1, 0, comp(1579, 30));
                break;
            }
            case 4: {
                IF_SETSIZE(500, 160, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETHIDE(false, comp(1579, 31));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), comp(1579, 23));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), comp(1579, 42));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), comp(1579, 50));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4759), comp(1579, 58));
                break;
            }
            case 5: {
                IF_SETSIZE(500, 160, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETHIDE(false, comp(1579, 31));
                IF_SETHIDE(false, comp(1579, 32));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), comp(1579, 23));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), comp(1579, 42));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), comp(1579, 50));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4759), comp(1579, 58));
                IF_SETTEXT(struct_getparam(varplayer_5062, 4760), comp(1579, 66));
                break;
            }
        };
        IF_SETONTIMER(callback(script10909, CLIENTCLOCK(), (CLIENTCLOCK() + 775)), comp(1579, 12));
    } else if ((varplayer_5063 > 0)) {
        IF_SETSIZE(1, 5, 0, 0, comp(1579, 26));
        IF_SETTEXT(varclient_4697, comp(1579, 7));
        switch (varplayer_5063) {
            case 2: {
                IF_SETSIZE(500, 120, 0, 0, comp(1579, 4));
                IF_SETTEXT(varclient_4698, comp(1579, 23));
                IF_SETTEXT(varclient_4699, comp(1579, 42));
                break;
            }
            case 3: {
                IF_SETSIZE(500, 120, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETTEXT(varclient_4698, comp(1579, 23));
                IF_SETTEXT(varclient_4699, comp(1579, 42));
                IF_SETTEXT(varclient_4700, comp(1579, 50));
                IF_SETPOSITION(0, 86, 1, 0, comp(1579, 30));
                break;
            }
            case 4: {
                IF_SETSIZE(500, 160, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETHIDE(false, comp(1579, 31));
                IF_SETTEXT(varclient_4698, comp(1579, 23));
                IF_SETTEXT(varclient_4699, comp(1579, 42));
                IF_SETTEXT(varclient_4700, comp(1579, 50));
                IF_SETTEXT(varclient_4701, comp(1579, 58));
                break;
            }
            case 5: {
                IF_SETSIZE(500, 160, 0, 0, comp(1579, 4));
                IF_SETHIDE(false, comp(1579, 30));
                IF_SETHIDE(false, comp(1579, 31));
                IF_SETHIDE(false, comp(1579, 32));
                IF_SETTEXT(varclient_4698, comp(1579, 23));
                IF_SETTEXT(varclient_4699, comp(1579, 42));
                IF_SETTEXT(varclient_4700, comp(1579, 50));
                IF_SETTEXT(varclient_4701, comp(1579, 58));
                IF_SETTEXT(varclient_4702, comp(1579, 66));
                break;
            }
        };
        IF_SETONTIMER(callback(script10909, CLIENTCLOCK(), (CLIENTCLOCK() + 775)), comp(1579, 12));
    };
    return;
}