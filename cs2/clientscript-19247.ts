//
function script19247(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(1, 84475923);
    IF_BUTTON_SETTOGGLED(0, 84475925);
    IF_BUTTON_SETTOGGLED(0, 84475927);
    IF_BUTTON_SETTOGGLED(0, 84475929);
    IF_SETTEXT("New rewards", comp(1289, 9));
    IF_SETHIDE(true, comp(1289, 11));
    IF_SETHIDE(false, comp(1289, 13));
    IF_SETHIDE(false, comp(1289, 15));
    IF_SETHIDE(false, comp(1289, 14));
    IF_SETHIDE(false, comp(1289, 12));
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>Wendle, the wicker boy pet`, comp(1289, 10));
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    var string0 = `${stack()}${inttostring()}>Other new rewards - the sparkler and reaping scythe - are awarded from the clan ceremonies.`;
    if ((script18522(523 as quest) == false)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int0));
        string0 = `${stack()}${inttostring()}>Complete 'Guys and Dolls' to unlock Wendle then hand in 75 clan confections for its burning skin.`;
    };
    IF_SETTEXT(string0, comp(1289, 17));
    return;
}