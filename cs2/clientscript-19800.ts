//
function script19800(): void {
    var int0 = -1 as graphic;
    switch (varbitplayer_57152) {
        case 1: {
            int0 = dbrow_getfield(14845 as dbrow, 1105952, 0);
            break;
        }
        case 2: {
            int0 = dbrow_getfield(14845 as dbrow, 1105968, 0);
            break;
        }
        default: {
            int0 = dbrow_getfield(14845 as dbrow, 1105984, 0);
            break;
        }
    };
    if ((int0 == -1 as graphic)) {
        script12478("No background graphic set when trying to update trh205 background.");
        return;
    };
    stack(int0);
    stack(82116613);
    IF_SETGRAPHIC();
    return;
}