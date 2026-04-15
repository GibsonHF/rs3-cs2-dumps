//
function script5910(): void {
    if ((varbitplayer_28041 == 0)) {
        IF_SETTEXT("You need to select a skybox first", comp(623, 7));
        IF_SETCOLOUR(16711680, comp(623, 7));
    } else {
        IF_SETTEXT(`Skybox base values : ${enum_getvalue(0, 36, 15005 as cs2enum, varbitplayer_28041)}`, comp(623, 7));
        IF_SETCOLOUR(16777215, comp(623, 7));
    };
    var int0 = (IF_GETY(comp(623, 6)) + IF_GETHEIGHT(comp(623, 6)));
    if ((int0 >= IF_GETHEIGHT(comp(623, 13)))) {
        IF_SETSCROLLSIZE(0, int0, comp(623, 13));
        script7791(comp(623, 12), comp(623, 13));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(623, 13));
        IF_SETSCROLLPOS(0, 0, comp(623, 13));
        CC_DELETEALL(comp(623, 13));
    };
    IF_SETTEXT(inttostring(varbitplayer_42898, 10), comp(623, 52));
    IF_SETTEXT(inttostring(varbitplayer_42899, 10), comp(623, 55));
    IF_SETTEXT(inttostring(varbitplayer_42900, 10), comp(623, 58));
    IF_SETTEXT(inttostring(varbitplayer_42901, 10), comp(623, 81));
    IF_SETTEXT(inttostring(varbitplayer_42902, 10), comp(623, 77));
    IF_SETTEXT(inttostring(varbitplayer_42903, 10), comp(623, 73));
    IF_SETTEXT(inttostring(varbitplayer_42907, 10), comp(623, 62));
    IF_SETTEXT(inttostring(varbitplayer_42909, 10), comp(623, 89));
    IF_SETTEXT(inttostring(varbitplayer_42904, 10), comp(623, 102));
    IF_SETTEXT(inttostring(varbitplayer_42905, 10), comp(623, 98));
    IF_SETTEXT(inttostring(varbitplayer_42906, 10), comp(623, 94));
    IF_SETTEXT(inttostring(varbitplayer_42908, 10), comp(623, 110));
    return;
}