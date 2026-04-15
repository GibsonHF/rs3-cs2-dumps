//
function script14807(int0: int): void {
    IF_SETHIDE(true, comp(685, 15));
    IF_SETHIDE(true, comp(685, 16));
    IF_SETHIDE(true, comp(685, 21));
    IF_SETHIDE(true, comp(685, 22));
    var int1 = 0;
    var int2 = -1;
    var int3 = 1;
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(685, 15));
            int2 = 10513;
            int1 = IF_GETX(comp(685, 6));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(685, 21));
            int2 = 10519;
            int1 = IF_GETX(comp(685, 7));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(685, 16));
            int2 = 10510;
            int1 = IF_GETX(comp(685, 8));
            int3 = 0;
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(685, 22));
            int2 = 10516;
            int1 = IF_GETX(comp(685, 9));
            int3 = 0;
            break;
        }
    };
    stack(int2);
    stack(44892280);
    IF_SETGRAPHIC();
    IF_SETPOSITION(int1, 0, 0, 0, 44892280);
    IF_SETHIDE(int3, 44892271);
    IF_SETHIDE(int3, 44892173);
    return;
}