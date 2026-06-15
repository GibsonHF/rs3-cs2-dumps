//
function script14807(int0: number): void {
    IF_SETHIDE(true, comp(685, 15));
    IF_SETHIDE(true, comp(685, 16));
    IF_SETHIDE(true, comp(685, 21));
    IF_SETHIDE(true, comp(685, 22));
    var int1 = 0;
    var int2 = -1 as graphic;
    var int3 = true;
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(685, 15));
            int2 = 10513 as graphic;
            int1 = IF_GETX(comp(685, 6));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(685, 21));
            int2 = 10519 as graphic;
            int1 = IF_GETX(comp(685, 7));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(685, 16));
            int2 = 10510 as graphic;
            int1 = IF_GETX(comp(685, 8));
            int3 = false;
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(685, 22));
            int2 = 10516 as graphic;
            int1 = IF_GETX(comp(685, 9));
            int3 = false;
            break;
        }
    };
    IF_SETGRAPHIC(int2, comp(685, 122));
    IF_SETPOSITION(int1, 0, 0, 0, comp(685, 122));
    IF_SETHIDE(int3, comp(685, 112));
    IF_SETHIDE(int3, comp(685, 13));
    return;
}