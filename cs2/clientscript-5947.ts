//
function script5947(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    var string0 = "";
    if ((varbitplayer_38842 == 1)) {
        IF_SETHIDE(true, comp(268, 0));
        return;
    };
    if ((((varbitplayer_21686 == 1) && (int0 != 3)) && (varbitplayer_27170 == 0))) {
        IF_SETHIDE(false, comp(268, 0));
    } else {
        script3374(1049);
        IF_SETHIDE(true, comp(268, 0));
        return;
    };
    [int1, int2, string0] = script5941(int0);
    stack(int2);
    stack(17563648);
    IF_SETGRAPHIC();
    string0 = strconcat("Combat Mode: ", string0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 17563648, -1), 17563648);
    return;
}