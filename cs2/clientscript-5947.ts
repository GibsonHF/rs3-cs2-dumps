//
function script5947(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var string0 = "";
    if ((varbitplayer_38842 == 1)) {
        IF_SETHIDE(1, 17563648);
        return;
    };
    if ((((varbitplayer_21686 == 1) && (int0 != 3)) && (varbitplayer_27170 == 0))) {
        IF_SETHIDE(0, 17563648);
    } else {
        script3374(1049);
        IF_SETHIDE(1, 17563648);
        return;
    };
    [int1, int2, string0] = script5941(int0);
    IF_SETGRAPHIC(int2, 17563648);
    string0 = strconcat("Combat Mode: ", string0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 17563648, -1), 17563648);
    return;
}