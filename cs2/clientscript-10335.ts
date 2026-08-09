//
function script10335(int0: number): void {
    var string0 = "";
    var int1 = -1;
    switch (int0) {
        case 1: {
            [int1, string0] = [25852, "You are marked as ready."];
            break;
        }
        case 0: {
            [int1, string0] = [25853, "You are marked as not ready."];
            break;
        }
        case 2: {
            [int1, string0] = [25854, "Your group is waiting for the game to start."];
            break;
        }
        case 3: {
            [int1, string0] = [25855, "Your group has been teleported to the starting area."];
            break;
        }
        default: {
            return;
        }
    };
    script10336(int1, string0);
    return;
}