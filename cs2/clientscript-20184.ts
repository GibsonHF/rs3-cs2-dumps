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
    stack(35284);
    stack(91488274);
    IF_SETGRAPHIC();
    script20187(255);
    IF_SETONTIMER(callback(script20186, CLIENTCLOCK()), 91488258);
    var int0 = 16777215;
    var string0 = "Leagues: CATALYST";
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(">");
    stack(string0);
    stack(PUSH_CONSTANT_INT[16]("</col> is an alternative game mode for <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">RuneScape</col>, available from <col=", int0));
    stack(inttostring());
    stack(">");
    stack(script3381(8601));
    stack(PUSH_CONSTANT_INT[16]("</col> to <col=", int0));
    var string1 = `${stack()}${inttostring()}>${script3381(8657)}</col>.<br>You can switch between the League and RuneScape at any time by switching worlds.`;
    var int1 = IF_GETWIDTH(91488264);
    var int2 = (script15891(string1, int1, IF_GETFONTMETRICS(91488266), 0) + 4);
    IF_SETTEXT(string1, 91488266);
    IF_SETSIZE(int1, int2, 0, 0, 91488264);
    if ((PLAYERMEMBER() == 1)) {
        IF_SETHIDE(true, comp(1396, 23));
    };
    return;
}