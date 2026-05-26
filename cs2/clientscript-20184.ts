//
function script20184(): void {
    CC_DELETEALL(91488269);
    CC_DELETEALL(91488276);
    IF_SETSIZE(500, 456, 0, 4, 91488262);
    IF_SETHIDE(0, 91488275);
    IF_SETTRANS(0, 91488275);
    IF_SETTRANS(255, 91488274);
    IF_SETTRANS(255, 91488260);
    IF_SETTRANS(255, 91488266);
    IF_SETGRAPHIC(35284, 91488274);
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
        IF_SETHIDE(1, 91488279);
    };
    return;
}