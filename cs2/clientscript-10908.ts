//
function script10908(): void {
    IF_SETHIDE(1, 103481374);
    IF_SETHIDE(1, 103481375);
    IF_SETHIDE(1, 103481376);
    IF_SETHIDE(1, 103481377);
    IF_SETHIDE(1, 103481365);
    IF_SETHIDE(1, 103481384);
    IF_SETHIDE(1, 103481392);
    IF_SETHIDE(1, 103481400);
    IF_SETHIDE(1, 103481408);
    IF_SETOPCURSOR(1, 36, 103481365);
    IF_SETOPCURSOR(1, 36, 103481384);
    IF_SETOPCURSOR(1, 36, 103481392);
    IF_SETOPCURSOR(1, 36, 103481400);
    IF_SETOPCURSOR(1, 36, 103481408);
    IF_SETHIDE(1, 103481363);
    IF_SETHIDE(1, 103481382);
    IF_SETHIDE(1, 103481390);
    IF_SETHIDE(1, 103481398);
    IF_SETHIDE(1, 103481406);
    IF_SETHIDE(1, 103481377);
    if ((varbitplayer_26724 == 1)) {
        IF_SETHIDE(0, 103481365);
        IF_SETHIDE(0, 103481384);
        IF_SETHIDE(0, 103481392);
        IF_SETHIDE(0, 103481400);
        IF_SETHIDE(0, 103481408);
    };
    if ((varplayer_5062 != -1 as struct)) {
        IF_SETSIZE(1, 5, 0, 0, 103481370);
        IF_SETTEXT(struct_getparam(varplayer_5062, 4753), 103481351);
        switch (struct_getparam(varplayer_5062, 4754)) {
            case 2: {
                IF_SETSIZE(500, 120, 0, 0, 103481348);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), 103481367);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), 103481386);
                break;
            }
            case 3: {
                IF_SETSIZE(500, 120, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), 103481367);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), 103481386);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), 103481394);
                IF_SETPOSITION(0, 86, 1, 0, 103481374);
                break;
            }
            case 4: {
                IF_SETSIZE(500, 160, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETHIDE(0, 103481375);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), 103481367);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), 103481386);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), 103481394);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4759), 103481402);
                break;
            }
            case 5: {
                IF_SETSIZE(500, 160, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETHIDE(0, 103481375);
                IF_SETHIDE(0, 103481376);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4756), 103481367);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4757), 103481386);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4758), 103481394);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4759), 103481402);
                IF_SETTEXT(struct_getparam(varplayer_5062, 4760), 103481410);
                break;
            }
        };
        IF_SETONTIMER(callback(script10909, CLIENTCLOCK(), (CLIENTCLOCK() + 775)), 103481356);
    } else if ((varplayer_5063 > 0)) {
        IF_SETSIZE(1, 5, 0, 0, 103481370);
        IF_SETTEXT(varclient_4697, 103481351);
        switch (varplayer_5063) {
            case 2: {
                IF_SETSIZE(500, 120, 0, 0, 103481348);
                IF_SETTEXT(varclient_4698, 103481367);
                IF_SETTEXT(varclient_4699, 103481386);
                break;
            }
            case 3: {
                IF_SETSIZE(500, 120, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETTEXT(varclient_4698, 103481367);
                IF_SETTEXT(varclient_4699, 103481386);
                IF_SETTEXT(varclient_4700, 103481394);
                IF_SETPOSITION(0, 86, 1, 0, 103481374);
                break;
            }
            case 4: {
                IF_SETSIZE(500, 160, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETHIDE(0, 103481375);
                IF_SETTEXT(varclient_4698, 103481367);
                IF_SETTEXT(varclient_4699, 103481386);
                IF_SETTEXT(varclient_4700, 103481394);
                IF_SETTEXT(varclient_4701, 103481402);
                break;
            }
            case 5: {
                IF_SETSIZE(500, 160, 0, 0, 103481348);
                IF_SETHIDE(0, 103481374);
                IF_SETHIDE(0, 103481375);
                IF_SETHIDE(0, 103481376);
                IF_SETTEXT(varclient_4698, 103481367);
                IF_SETTEXT(varclient_4699, 103481386);
                IF_SETTEXT(varclient_4700, 103481394);
                IF_SETTEXT(varclient_4701, 103481402);
                IF_SETTEXT(varclient_4702, 103481410);
                break;
            }
        };
        IF_SETONTIMER(callback(script10909, CLIENTCLOCK(), (CLIENTCLOCK() + 775)), 103481356);
    };
    return;
}