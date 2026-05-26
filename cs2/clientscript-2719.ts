//
function script2719(int0: number): void {
    var int1 = IF_GETGRAPHIC(int0);
    var int2 = -1 as graphic;
    switch (int1) {
        case 20360: {
            int2 = 20363 as graphic;
            break;
        }
        case 20361: {
            int2 = 20364 as graphic;
            break;
        }
        case 20362: {
            int2 = 20365 as graphic;
            break;
        }
    };
    if ((int2 == -1 as graphic)) {
        return;
    };
    IF_SETGRAPHIC(int2, int0);
    return;
}