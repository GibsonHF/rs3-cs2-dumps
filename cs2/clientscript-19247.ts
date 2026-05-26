//
function script19247(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(1, 84475923);
    IF_BUTTON_SETTOGGLED(0, 84475925);
    IF_BUTTON_SETTOGGLED(0, 84475927);
    IF_BUTTON_SETTOGGLED(0, 84475929);
    IF_SETTEXT("New rewards", 84475913);
    IF_SETHIDE(1, 84475915);
    IF_SETHIDE(0, 84475917);
    IF_SETHIDE(0, 84475919);
    IF_SETHIDE(0, 84475918);
    IF_SETHIDE(0, 84475916);
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>Wendle, the wicker boy pet`, 84475914);
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    var string0 = `${stack()}${inttostring()}>Other new rewards - the sparkler and reaping scythe - are awarded from the clan ceremonies.`;
    if ((script18522(523) == 0)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int0));
        string0 = `${stack()}${inttostring()}>Complete 'Guys and Dolls' to unlock Wendle then hand in 75 clan confections for its burning skin.`;
    };
    IF_SETTEXT(string0, 84475921);
    return;
}