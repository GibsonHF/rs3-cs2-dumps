//
function script6210(int0: unknown_int): void {
    var string0 = "Join your clan chat channel";
    IF_SETONCLANCHANNELTRANSMIT(callback(script6210, -2147483645), int0);
    if ((unk10993(0) == 1)) {
        stack(6255);
        stack(15335471);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Leave Clan Channel", 15335459);
        string0 = "Temporarily leave your clan chat channel";
    } else {
        stack(6256);
        stack(15335471);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Join Clan Channel", 15335459);
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 15335459);
    return;
}