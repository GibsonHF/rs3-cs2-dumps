//
function script10335(int0: unknown_int): void {
    var string0 = "";
    var int1 = -1;
    switch (int0) {
        case 1: {
            stack(25852);
            stack("You are marked as ready.");
            [int1, string0] = stack();
            break;
        }
        case 0: {
            stack(25853);
            stack("You are marked as not ready.");
            [int1, string0] = stack();
            break;
        }
        case 2: {
            stack(25854);
            stack("Your group is waiting for the game to start.");
            [int1, string0] = stack();
            break;
        }
        case 3: {
            stack(25855);
            stack("Your group has been teleported to the starting area.");
            [int1, string0] = stack();
            break;
        }
        default: {
            return;
        }
    };
    script10336(int1, string0);
    return;
}