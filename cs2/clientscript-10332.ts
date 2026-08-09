//
function script10332(int0: number): void {
    var string0 = "";
    var int1 = -1 as graphic;
    switch (int0) {
        case 1: {
            [int1, string0] = [25858 as graphic, "Receiving group invitations only from friends."];
            break;
        }
        case 2: {
            [int1, string0] = [25859 as graphic, "Receiving group invitations only from friends and clan members."];
            break;
        }
        case 3: {
            [int1, string0] = [25860 as graphic, "Not receiving any group invitations."];
            break;
        }
        default: {
            [int1, string0] = [25857 as graphic, "Receiving group invitations from everyone."];
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1519, 62));
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1520, 29));
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1528, 53));
    IF_SETGRAPHIC(int1, comp(1519, 28));
    IF_SETGRAPHIC(int1, comp(1520, 30));
    IF_SETGRAPHIC(int1, comp(1528, 54));
    return;
}