//[clientscript,clanwars_overlay_status]
function script1787(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component, int12: component, int13: component, int14: component, int15: component, int16: component): void {
    var string0 = "";
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((varclient_271 == true)) {
        IF_SETTEXT(`${CLAN_GETCHATDISPLAYNAME()}:`, int3);
    } else {
        IF_SETTEXT("This clan:", int3);
    };
    IF_SETTEXT(inttostring(varclient_261, 10), int5);
    IF_SETTEXT(inttostring(varclient_262, 10), int11);
    if ((varbitplayer_4095 > 0)) {
        if ((varclient_263 < 65535)) {
            IF_SETTEXT(script46(varclient_263, ","), int7);
        } else {
            IF_SETTEXT("<col=ff0000>You rock!</col>", int7);
        };
        if ((varclient_264 < 65535)) {
            IF_SETTEXT(script46(varclient_264, ","), int13);
        } else {
            IF_SETTEXT("<col=ff0000>They rock!</col>", int13);
        };
        IF_SETHIDE(false, int6);
        IF_SETHIDE(false, int12);
        IF_SETHIDE(false, int7);
        IF_SETHIDE(false, int13);
        int17 = 1;
        if ((varbitplayer_4095 < 15)) {
            string0 = `/ ${script46(enum_getvalue(0, 0, 1605 as cs2enum, varbitplayer_4095), ",")}`;
            IF_SETTEXT(string0, int8);
            IF_SETTEXT(string0, int14);
            IF_SETHIDE(false, int8);
            IF_SETHIDE(false, int14);
            int18 = 1;
        } else {
            IF_SETHIDE(true, int8);
            IF_SETHIDE(true, int14);
        };
    } else {
        IF_SETHIDE(true, int6);
        IF_SETHIDE(true, int12);
        IF_SETHIDE(true, int7);
        IF_SETHIDE(true, int13);
        IF_SETHIDE(true, int8);
        IF_SETHIDE(true, int14);
    };
    if ((varclient_260 == true)) {
        IF_SETONTIMER(callback(), int16);
        if ((varbitplayer_4096 > 0)) {
            IF_SETTEXT("Time remaining:", int15);
            if ((varclient_270 > 60)) {
                script1791(int16);
            } else if ((varclient_270 > 1)) {
                IF_SETTEXT(`${inttostring(varclient_270, 10)} minutes`, int16);
            } else if ((varclient_270 == 1)) {
                IF_SETTEXT("<col=ff0000>1 minute</col>", int16);
            } else {
                IF_SETTEXT("<col=ff0000>Not much!</col>", int16);
            };
            IF_SETHIDE(false, int15);
            IF_SETHIDE(false, int16);
            int19 = 1;
        } else {
            IF_SETHIDE(true, int15);
            IF_SETHIDE(true, int16);
        };
    } else {
        IF_SETTEXT("Countdown to battle:", int15);
        if ((varclient_265 != varclient_270)) {
            varclient_265 = varclient_270;
            script1790(int16);
            IF_SETONTIMER(callback(script1789, int16, CLIENTCLOCK(), varclient_270), int16);
        };
        IF_SETHIDE(false, int15);
        IF_SETHIDE(false, int16);
        int19 = 1;
    };
    var int20 = PARAWIDTH(IF_GETTEXT(int3), 512, 66 as fontmetrics);
    var int21 = PARAWIDTH(IF_GETTEXT(int9), 512, 66 as fontmetrics);
    int20 = MAX(((PARAWIDTH(IF_GETTEXT(int4), 512, 66 as fontmetrics) + 10) + PARAWIDTH(IF_GETTEXT(int5), 512, 66 as fontmetrics)), int20);
    int21 = MAX(((PARAWIDTH(IF_GETTEXT(int10), 512, 66 as fontmetrics) + 10) + PARAWIDTH(IF_GETTEXT(int11), 512, 66 as fontmetrics)), int21);
    var int22 = (IF_GETHEIGHT(int3) + IF_GETHEIGHT(int4));
    if ((int17 == 1)) {
        int20 = MAX(((PARAWIDTH(IF_GETTEXT(int6), 512, 66 as fontmetrics) + 10) + PARAWIDTH(IF_GETTEXT(int7), 512, 66 as fontmetrics)), int20);
        int21 = MAX(((PARAWIDTH(IF_GETTEXT(int12), 512, 66 as fontmetrics) + 10) + PARAWIDTH(IF_GETTEXT(int13), 512, 66 as fontmetrics)), int21);
        int22 = (int22 + IF_GETHEIGHT(int6));
        if ((int18 == 1)) {
            int20 = MAX(PARAWIDTH(IF_GETTEXT(int8), 512, 66 as fontmetrics), int20);
            int21 = MAX(PARAWIDTH(IF_GETTEXT(int14), 512, 66 as fontmetrics), int21);
            int22 = (int22 + IF_GETHEIGHT(int8));
        };
    };
    var int23 = ((int20 + 10) + int21);
    if ((int19 == 0)) {
        IF_SETSIZE((int23 + 8), (int22 + 8), 0, 0, int0);
        IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, int1);
        script1788(int20, int3, int4, int5, int6, int7, int8, int21, int9, int10, int11, int12, int13, int14, int23);
        IF_SETPOSITION(((4 + int20) + 5), 4, 0, 0, int2);
        IF_SETSIZE(0, int22, 0, 0, int2);
        script1086(int0, 0, 0, 0);
        return;
    };
    var int24 = int22;
    int22 = (((int22 + 10) + IF_GETHEIGHT(int15)) + IF_GETHEIGHT(int16));
    int23 = MAX(PARAWIDTH(IF_GETTEXT(int15), 512, 66 as fontmetrics), int23);
    int23 = MAX(PARAWIDTH(IF_GETTEXT(int16), 512, 66 as fontmetrics), int23);
    IF_SETSIZE((int23 + 8), (int22 + 8), 0, 0, int0);
    IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, int1);
    script1788(int20, int3, int4, int5, int6, int7, int8, int21, int9, int10, int11, int12, int13, int14, int23);
    IF_SETPOSITION(((4 + int20) + ((int23 - (int20 + int21)) / 2)), 4, 0, 0, int2);
    IF_SETSIZE(0, int24, 0, 0, int2);
    IF_SETSIZE(int23, IF_GETHEIGHT(int15), 0, 0, int15);
    IF_SETSIZE(int23, IF_GETHEIGHT(int16), 0, 0, int16);
    IF_SETPOSITION(4, ((4 + int24) + 10), 0, 0, int15);
    IF_SETPOSITION(4, (((4 + int24) + 10) + IF_GETHEIGHT(int15)), 0, 0, int16);
    script1086(int0, ((4 + int24) + 5), 0, 0);
    return;
}