//
function script20184(): void {
    CC_DELETEALL(comp(1396, 13));
    CC_DELETEALL(comp(1396, 20));
    script20923();
    IF_SETGRAPHIC(91488274 as graphic);
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = IF_GETGRAPHICDIMENSIONS(comp(1396, 18));
    IF_SETSIZE(int0, int1, 0, 4, comp(1396, 6));
    IF_SETHIDE(false, comp(1396, 19));
    IF_SETTRANS(0, comp(1396, 19));
    IF_SETTRANS(255, comp(1396, 18));
    IF_SETTRANS(255, comp(1396, 4));
    IF_SETTRANS(255, comp(1396, 10));
    script20187(255);
    IF_SETONTIMER(callback(script20186, CLIENTCLOCK()), comp(1396, 2));
    var int2 = 16777215;
    var string0 = script20128();
    var string1 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>${string0}${inttostring(PUSH_CONSTANT_INT[16]("</col> is an alternative game mode for <col=", int2))}${inttostring(PUSH_CONSTANT_INT[16](">RuneScape</col>, available from <col=", int2))}>${script3381(8930)}${inttostring(PUSH_CONSTANT_INT[16]("</col> to <col=", int2))}>${script3381(8972)}</col>.<br>You can switch between the League and RuneScape at any time by switching worlds.`;
    var int3 = IF_GETWIDTH(comp(1396, 8));
    var int4 = (script15891(string1, (int3 - 16), IF_GETFONTMETRICS(comp(1396, 10)), 0) + 4);
    IF_SETTEXT(string1, comp(1396, 10));
    IF_SETSIZE(int3, int4, 0, 0, comp(1396, 8));
    if ((PLAYERMEMBER() == 1)) {
        IF_SETHIDE(true, comp(1396, 23));
    };
    return;
}