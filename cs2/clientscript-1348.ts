//
function script1348(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    varclient_6407 = 0;
    varbitplayer_40345 = int3;
    varbitplayer_40346 = int4;
    varbitplayer_40347 = int5;
    varbitplayer_40348 = int6;
    varbitplayer_40349 = int7;
    varbitplayer_40350 = int8;
    varbitplayer_40351 = int9;
    varbitplayer_40352 = int10;
    varbitplayer_40354 = int0;
    script1351(30015531);
    varbitplayer_40353 = int1;
    varbitclient_40360 = int2;
    if ((varbitclient_40360 == 0)) {
        IF_SETTRANS(200, comp(458, 23));
    } else {
        IF_SETTRANS(0, comp(458, 23));
    };
    IF_SETTEXT(`${inttostring(varbitclient_40355, 10)}/${inttostring(varbitplayer_40353, 10)}`, comp(458, 10));
    IF_SETTEXT(`${inttostring(varbitclient_40359, 10)}/${inttostring(((varbitplayer_40353 * 2) - 1), 10)}`, comp(458, 12));
    IF_SETGRAPHIC(struct_getparam(enum_getvalue(0, 73, 13282 as cs2enum, varbitplayer_40354), 7137), comp(458, 27));
    IF_SETONTIMER(callback(script1355, 0), comp(458, 27));
    return;
}