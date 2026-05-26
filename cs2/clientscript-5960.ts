//
function script5960(int0: number, int1: number): void {
    var string0 = "";
    switch (script5956(int1)) {
        case 0: {
            IF_SETGRAPHIC(9999, int0);
            string0 = "Unlocked";
            break;
        }
        case 1: {
            IF_SETGRAPHIC(9997, int0);
            string0 = "Pending Lock: This skillplot will lock once the resource target has been met.";
            break;
        }
        case 2: {
            IF_SETGRAPHIC(9996, int0);
            string0 = "Pending Unlock: This skillplot will unlock once all resource targets have been met.";
            break;
        }
        case 3: {
            IF_SETGRAPHIC(9996, int0);
            string0 = "Locked: This skillplot has been manually locked.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    IF_SETONMOUSELEAVE(callback(script8805), int0);
    return;
}