//
function script19247(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(1, comp(1289, 19));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 21));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 23));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 25));
    IF_SETTEXT("New rewards", comp(1289, 9));
    IF_SETHIDE(true, comp(1289, 11));
    IF_SETHIDE(false, comp(1289, 13));
    IF_SETHIDE(false, comp(1289, 15));
    IF_SETHIDE(false, comp(1289, 14));
    IF_SETHIDE(false, comp(1289, 12));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Wendle, the wicker boy pet`, comp(1289, 10));
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>Other new rewards - the sparkler and reaping scythe - are awarded from the clan ceremonies.`;
    if ((script18522(523) == 0)) {
        string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>Complete 'Guys and Dolls' to unlock Wendle then hand in 75 clan confections for its burning skin.`;
    };
    IF_SETTEXT(string0, comp(1289, 17));
    return;
}