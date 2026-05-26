//
function script6210(int0: number): void {
    var string0 = "Join your clan chat channel";
    IF_SETONCLANCHANNELTRANSMIT(callback(script6210, -2147483645), int0);
    if ((unk10993(0) == 1)) {
        IF_SETGRAPHIC(6255 as graphic, comp(234, 47));
        IF_SETOP(1, "Leave Clan Channel", comp(234, 35));
        string0 = "Temporarily leave your clan chat channel";
    } else {
        IF_SETGRAPHIC(6256 as graphic, comp(234, 47));
        IF_SETOP(1, "Join Clan Channel", comp(234, 35));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 15335459);
    return;
}