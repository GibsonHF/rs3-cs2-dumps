//
function script2335(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component): void {
    if ((varbitplayer_15172 < 4000)) {
        IF_SETTEXT(inttostring(varbitplayer_15172, 10), int10);
    } else {
        IF_SETTEXT("Max", int10);
    };
    if (((varclient_2763 + varbitplayer_15163) < 4000)) {
        IF_SETTEXT(inttostring((varclient_2763 + varbitplayer_15163), 10), int5);
    } else {
        IF_SETTEXT("Max", int5);
    };
    if (((varclient_2764 + varbitplayer_15165) < 4000)) {
        IF_SETTEXT(inttostring((varclient_2764 + varbitplayer_15165), 10), int6);
    } else {
        IF_SETTEXT("Max", int6);
    };
    if (((varclient_2766 + varbitplayer_15162) < 4000)) {
        IF_SETTEXT(inttostring((varclient_2766 + varbitplayer_15162), 10), int7);
    } else {
        IF_SETTEXT("Max", int7);
    };
    if (((varclient_2765 + varbitplayer_15166) < 4000)) {
        IF_SETTEXT(inttostring((varclient_2765 + varbitplayer_15166), 10), int8);
    } else {
        IF_SETTEXT("Max", int8);
    };
    if ((varbitplayer_15172 <= script2791(40, 5))) {
        IF_SETCOLOUR(16101953, int9);
    } else {
        IF_SETCOLOUR(65280, int9);
    };
    if (((varclient_2763 + varbitplayer_15163) < script2791(40, 1))) {
        IF_SETCOLOUR(16101953, int1);
    } else {
        IF_SETCOLOUR(65280, int1);
    };
    if (((varclient_2764 + varbitplayer_15165) < script2791(40, 2))) {
        IF_SETCOLOUR(16101953, int2);
    } else {
        IF_SETCOLOUR(65280, int2);
    };
    if (((varclient_2766 + varbitplayer_15162) < script2791(40, 4))) {
        IF_SETCOLOUR(16101953, int3);
    } else {
        IF_SETCOLOUR(65280, int3);
    };
    if (((varclient_2765 + varbitplayer_15166) < script2791(40, 3))) {
        IF_SETCOLOUR(16101953, int4);
    } else {
        IF_SETCOLOUR(65280, int4);
    };
    return;
}