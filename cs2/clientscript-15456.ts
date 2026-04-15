//
function script15456(int0: int): unknown_int {
    switch (script6963(int0)) {
        case 1: {
            script15930("This preset slot is only available to members. Subscribe now to access this preset slot.");
            break;
        }
        case 2: {
            script15930("This preset slot is only available on members' worlds.");
            break;
        }
        case 3: {
            script15930("This preset slot is only available after purchase.");
            break;
        }
        default: {
            return 0;
        }
    };
    return 1;
}