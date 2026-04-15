//
function script10332(int0: int): void {
    var string0 = "";
    var int1 = -1;
    switch (int0) {
        case 1: {
            stack(25858);
            stack("Receiving group invitations only from friends.");
            [int1, string0] = stack();
            break;
        }
        case 2: {
            stack(25859);
            stack("Receiving group invitations only from friends and clan members.");
            [int1, string0] = stack();
            break;
        }
        case 3: {
            stack(25860);
            stack("Not receiving any group invitations.");
            [int1, string0] = stack();
            break;
        }
        default: {
            stack(25857);
            stack("Receiving group invitations from everyone.");
            [int1, string0] = stack();
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 99549246);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 99614749);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 100139061);
    stack(int1);
    stack(99549212);
    IF_SETGRAPHIC();
    stack(int1);
    stack(99614750);
    IF_SETGRAPHIC();
    stack(int1);
    stack(100139062);
    IF_SETGRAPHIC();
    return;
}