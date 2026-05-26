//
function script7304(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    switch (varclient_2650) {
        case 1: {
            int0 = varbitplayer_17155;
            int1 = varbitplayer_17153;
            int2 = varbitplayer_17152;
            int3 = varbitplayer_17154;
            break;
        }
        case 2: {
            int0 = varbitplayer_17168;
            int1 = varbitplayer_17166;
            int2 = varbitplayer_17165;
            int3 = varbitplayer_17167;
            break;
        }
        case 3: {
            int0 = varbitplayer_17181;
            int1 = varbitplayer_17179;
            int2 = varbitplayer_17178;
            int3 = varbitplayer_17180;
            break;
        }
        case 4: {
            int0 = varbitplayer_17194;
            int1 = varbitplayer_17192;
            int2 = varbitplayer_17191;
            int3 = varbitplayer_17193;
            break;
        }
        case 5: {
            int0 = varbitplayer_17207;
            int1 = varbitplayer_17205;
            int2 = varbitplayer_17204;
            int3 = varbitplayer_17206;
            break;
        }
        case 6: {
            int0 = varbitplayer_17220;
            int1 = varbitplayer_17218;
            int2 = varbitplayer_17217;
            int3 = varbitplayer_17219;
            break;
        }
    };
    var int4 = script2356(int0, int1, int3, int2);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    if ((enum_hasoutput(33, 2173, varclient_2626) == 1)) {
        IF_SETNPCHEAD(int4, 83624075);
        IF_SETMODELANIM(9806, 83624075);
        IF_SETGRAPHIC(-1 as graphic, 83624060);
        IF_SETTEXT(`Level ${inttostring(varclient_2642, 10)}`, 83624045);
        [int5, int6, int7] = script3005(677, varbitplayer_17147);
        string0 = `${inttostring(int6, 10)}/${inttostring(int7, 10)}`;
        script4542(int5, 83624052, 83624057);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 83624046);
        IF_SETHIDE(1, 83624058);
    } else {
        IF_SETMODEL(-1, 83624075);
        IF_SETGRAPHIC(item_getparam(varclient_2626, 3080), 83624060);
        IF_SETTEXT(`Level ${inttostring(varclient_2642, 10)}`, 83624045);
        [int5, int6, int7] = script3005(677, varbitplayer_17147);
        string0 = `${inttostring(int6, 10)}/${inttostring(int7, 10)}`;
        script4542(int5, 83624052, 83624057);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 83624046);
        IF_SETHIDE(1, 83624058);
    };
    IF_SETMODELZOOM(2900, 83624075);
    var string1 = varclient_2627;
    IF_SETTEXT(string1, 83624074);
    IF_SETHIDE(1, 83624078);
    var int8 = script7319(varbitplayer_17147);
    var int9 = (AND(int8, 57344) / 8192);
    var int10 = (AND(int8, 458752) / 65536);
    var int11 = (AND(int8, 3670016) / 524288);
    var int12 = (AND(int8, 29360128) / 4194304);
    var int13 = 10;
    if ((enum_hasoutput(33, 2173, varclient_2626) == 1)) {
        int13 = 20;
    };
    int9 = (int9 * int13);
    int10 = (int10 * int13);
    int11 = (int11 * int13);
    int12 = (int12 * int13);
    var int14 = script7317(677, varbitplayer_17147);
    var int15 = (10 * int14);
    var int16 = item_getparam(varclient_2626, 3081);
    var int17 = SCALE(int15, 100, int16);
    var int18 = (((varclient_2632 - int16) - int17) - int9);
    var string2 = `<col=C5BCAC>Base:</col> ${inttostring(int16, 10)}<br><col=C5BCAC>Level Boost:</col> ${inttostring(int17, 10)}<br><col=C5BCAC>Personal Bonus:</col> ${inttostring(int9, 10)}<br><col=C5BCAC>Traits:</col> ${inttostring(int18, 10)}`;
    IF_SETTEXT(inttostring(varclient_2632, 10), 83624070);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 83624068);
    var int19 = item_getparam(varclient_2626, 3082);
    var int20 = SCALE(int15, 100, int19);
    var int21 = (((varclient_2638 - int19) - int20) - int10);
    var string3 = `<col=C5BCAC>Base:</col> ${inttostring(int19, 10)}<br><col=C5BCAC>Level Boost:</col> ${inttostring(int20, 10)}<br><col=C5BCAC>Personal Bonus:</col> ${inttostring(int10, 10)}<br><col=C5BCAC>Traits:</col> ${inttostring(int21, 10)}`;
    IF_SETTEXT(inttostring(varclient_2638, 10), 83624066);
    IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 83624064);
    var int22 = item_getparam(varclient_2626, 3083);
    var int23 = SCALE(int15, 100, int22);
    var int24 = (((varclient_2634 - int22) - int23) - int11);
    var string4 = `<col=C5BCAC>Base:</col> ${inttostring(int22, 10)}<br><col=C5BCAC>Level Boost:</col> ${inttostring(int23, 10)}<br><col=C5BCAC>Personal Bonus:</col> ${inttostring(int11, 10)}<br><col=C5BCAC>Traits:</col> ${inttostring(int24, 10)}`;
    IF_SETTEXT(inttostring(varclient_2634, 10), 83624065);
    IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), 83624063);
    var int25 = item_getparam(varclient_2626, 3084);
    var int26 = SCALE(int15, 100, int25);
    var int27 = (((varclient_2640 - int25) - int26) - int12);
    var string5 = `<col=C5BCAC>Base:</col> ${inttostring(int25, 10)}<br><col=C5BCAC>Level Boost:</col> ${inttostring(int26, 10)}<br><col=C5BCAC>Personal Bonus:</col> ${inttostring(int12, 10)}<br><col=C5BCAC>Traits:</col> ${inttostring(int27, 10)}`;
    IF_SETTEXT(inttostring(varclient_2640, 10), 83624069);
    IF_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -1), 83624067);
    var string6 = varclient_2629;
    if ((strcmp(string6, "") == 0)) {
        string6 = "No Traits";
    };
    IF_SETTEXT(string6, 83624071);
    if ((strcmp(varclient_2630, "") != 0)) {
        IF_SETONMOUSEREPEAT(callback(script8799, varclient_2630, -2147483645, -1), 83624071);
        IF_SETONMOUSEOVER(callback(script45, -2147483645, 16686339), 83624071);
    } else {
        IF_SETONMOUSEREPEAT(callback(), 83624071);
        IF_SETONMOUSEOVER(callback(), 83624071);
    };
    IF_SETONMOUSELEAVE(callback(script7305), 83624071);
    if ((((enum_hasoutput(33, 2174, varclient_2626) == 1) && (varclient_2626 != 26265 as obj)) && (varclient_2626 != 26266 as obj))) {
        IF_SETTEXT("Useful supplies for a journey.", 83624061);
        IF_SETTEXT("Ship Supplies", 83624045);
        script4542(0, 83624052, 83624057);
        IF_SETHIDE(0, 83624058);
    } else {
        IF_SETTEXT(varclient_2628, 83624061);
    };
    if ((varbitplayer_17147 < INV_SIZE(677))) {
        if ((script7310(varbitplayer_17147) == 1)) {
            IF_SETHIDE(1, 83624078);
        } else {
            IF_SETHIDE(0, 83624078);
        };
        if ((((varclient_2643 > 0) && (varclient_2643 < 5)) && (TESTBIT(varplayer_3404, varbitplayer_17147) == 1))) {
            IF_SETTEXT(inttostring(varclient_2643, 10), 83624076);
        } else {
            IF_SETTEXT("-", 83624076);
        };
    };
    if (((varclient_2626 == -1 as obj) || (strcmp("No crewman", varclient_2627) == 0))) {
        IF_SETHIDE(0, 83624078);
    };
    return;
}