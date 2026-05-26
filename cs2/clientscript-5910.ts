//
function script5910(): void {
    if ((varbitplayer_28041 == 0)) {
        IF_SETTEXT("You need to select a skybox first", 40828935);
        IF_SETCOLOUR(16711680, 40828935);
    } else {
        IF_SETTEXT(`Skybox base values : ${enum_getvalue(0, 36, 15005 as cs2enum, varbitplayer_28041)}`, 40828935);
        IF_SETCOLOUR(16777215, 40828935);
    };
    var int0 = (IF_GETY(40828934) + IF_GETHEIGHT(40828934));
    if ((int0 >= IF_GETHEIGHT(40828941))) {
        IF_SETSCROLLSIZE(0, int0, 40828941);
        script7791(40828940, 40828941);
    } else {
        IF_SETSCROLLSIZE(0, 0, 40828941);
        IF_SETSCROLLPOS(0, 0, 40828941);
        CC_DELETEALL(40828941);
    };
    IF_SETTEXT(inttostring(varbitplayer_42898, 10), 40828980);
    IF_SETTEXT(inttostring(varbitplayer_42899, 10), 40828983);
    IF_SETTEXT(inttostring(varbitplayer_42900, 10), 40828986);
    IF_SETTEXT(inttostring(varbitplayer_42901, 10), 40829009);
    IF_SETTEXT(inttostring(varbitplayer_42902, 10), 40829005);
    IF_SETTEXT(inttostring(varbitplayer_42903, 10), 40829001);
    IF_SETTEXT(inttostring(varbitplayer_42907, 10), 40828990);
    IF_SETTEXT(inttostring(varbitplayer_42909, 10), 40829017);
    IF_SETTEXT(inttostring(varbitplayer_42904, 10), 40829030);
    IF_SETTEXT(inttostring(varbitplayer_42905, 10), 40829026);
    IF_SETTEXT(inttostring(varbitplayer_42906, 10), 40829022);
    IF_SETTEXT(inttostring(varbitplayer_42908, 10), 40829038);
    return;
}