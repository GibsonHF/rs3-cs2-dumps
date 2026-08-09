//
function script20184(): void {
    CC_DELETEALL(comp(1396, 13));
    CC_DELETEALL(comp(1396, 20));
    IF_SETSIZE(500, 456, 0, 4, comp(1396, 6));
    IF_SETHIDE(false, comp(1396, 19));
    IF_SETTRANS(0, comp(1396, 19));
    IF_SETTRANS(255, comp(1396, 18));
    IF_SETTRANS(255, comp(1396, 4));
    IF_SETTRANS(255, comp(1396, 10));
    IF_SETGRAPHIC(35284 as graphic, comp(1396, 18));
    script20187(255);
    IF_SETONTIMER(callback(script20186, CLIENTCLOCK()), comp(1396, 2));
    var int0 = 16777215;
    var string0 = "Leagues: CATALYST";
    var string1 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>${string0}${inttostring(PUSH_CONSTANT_INT[16]("</col> is an alternative game mode for <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">RuneScape</col>, available from <col=", int0))}>${script3381(8601)}${inttostring(PUSH_CONSTANT_INT[16]("</col> to <col=", int0))}>${script3381(8657)}</col>.<br>You can switch between the League and RuneScape at any time by switching worlds.`;
    var int1 = IF_GETWIDTH(comp(1396, 8));
    var int2 = (script15891(string1, int1, IF_GETFONTMETRICS(comp(1396, 10)), 0) + 4);
    IF_SETTEXT(string1, comp(1396, 10));
    IF_SETSIZE(int1, int2, 0, 0, comp(1396, 8));
    if ((PLAYERMEMBER() == true)) {
        IF_SETHIDE(true, comp(1396, 23));
    };
    return;
}