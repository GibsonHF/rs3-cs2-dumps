//
function script5960(int0: unknown_int, int1: int): void {
    var string0 = "";
    switch (script5956(int1)) {
        case 0: {
            stack(9999);
            stack(int0);
            IF_SETGRAPHIC();
            string0 = "Unlocked";
            break;
        }
        case 1: {
            stack(9997);
            stack(int0);
            IF_SETGRAPHIC();
            string0 = "Pending Lock: This skillplot will lock once the resource target has been met.";
            break;
        }
        case 2: {
            stack(9996);
            stack(int0);
            IF_SETGRAPHIC();
            string0 = "Pending Unlock: This skillplot will unlock once all resource targets have been met.";
            break;
        }
        case 3: {
            stack(9996);
            stack(int0);
            IF_SETGRAPHIC();
            string0 = "Locked: This skillplot has been manually locked.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    IF_SETONMOUSELEAVE(callback(script8805), int0);
    return;
}