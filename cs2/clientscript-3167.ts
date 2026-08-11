//
function script3167(int0: number, int1: number, string0: string): void {
    var int2 = comp(912, 9);  // lobbyscreen_pane_clanchat:clan_active_bg
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(false, int2);
        IF_SETPOSITION(IF_GETX(int2), CC_GETY(), 0, 0, int2);
    };
    return;
}