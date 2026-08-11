//
function script5947(int0: number): void {
    var int1 = -1;
    var int2 = -1 as graphic;
    var string0 = "";
    if ((varbitplayer_38842 == 1)) {
        IF_SETHIDE(true, comp(268, 0));  // combat_mode_icon:combat_mode_icon
        return;
    };
    if ((varbitplayer_21686 == 1)) {
        if ((int0 != 3)) {
            if ((varbitplayer_27170 == 0)) {
                IF_SETHIDE(false, comp(268, 0));  // combat_mode_icon:combat_mode_icon
            } else {
                script3374(1049);
                IF_SETHIDE(true, comp(268, 0));  // combat_mode_icon:combat_mode_icon
                return;
            };
        } else {
            script3374(1049);
            IF_SETHIDE(true, comp(268, 0));  // combat_mode_icon:combat_mode_icon
            return;
        };
    } else {
        script3374(1049);
        IF_SETHIDE(true, comp(268, 0));  // combat_mode_icon:combat_mode_icon
        return;
    };
    [int1, int2, string0] = script5941(int0);
    IF_SETGRAPHIC(int2, comp(268, 0));  // combat_mode_icon:combat_mode_icon
    string0 = strconcat("Combat Mode: ", string0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 17563648, -1), comp(268, 0));  // combat_mode_icon:combat_mode_icon
    return;
}