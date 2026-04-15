//
function script17395(): void {
    var int0 = script12750(varplayer_306);
    var string0 = "None!";
    if ((int0 == 0)) {
        stack(2180);
        stack(82903171);
        IF_SETGRAPHIC();
    } else if ((varplayer_306 == 0)) {
        string0 = script17372(script17400(), 3, 1);
        stack(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
        stack(82903171);
        IF_SETGRAPHIC();
    } else {
        string0 = script940(int0);
        stack(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
        stack(82903171);
        IF_SETGRAPHIC();
    };
    var int1 = ((IF_GETWIDTH(comp(1265, 131)) + 2) + PARAWIDTH(string0, IF_GETWIDTH(comp(1265, 129)), IF_GETFONTMETRICS(comp(1265, 132))));
    IF_SETTEXT(string0, comp(1265, 132));
    IF_SETSIZE(int1, 15, 0, 0, comp(1265, 130));
    return;
}