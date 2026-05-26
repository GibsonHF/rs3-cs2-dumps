//
function script14807(int0: number): void {
    IF_SETHIDE(1, 44892175);
    IF_SETHIDE(1, 44892176);
    IF_SETHIDE(1, 44892181);
    IF_SETHIDE(1, 44892182);
    var int1 = 0;
    var int2 = -1;
    var int3 = 1;
    switch (int0) {
        case 0: {
            IF_SETHIDE(0, 44892175);
            int2 = 10513;
            int1 = IF_GETX(44892166);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 44892181);
            int2 = 10519;
            int1 = IF_GETX(44892167);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 44892176);
            int2 = 10510;
            int1 = IF_GETX(44892168);
            int3 = 0;
            break;
        }
        case 3: {
            IF_SETHIDE(0, 44892182);
            int2 = 10516;
            int1 = IF_GETX(44892169);
            int3 = 0;
            break;
        }
    };
    IF_SETGRAPHIC(int2, 44892280);
    IF_SETPOSITION(int1, 0, 0, 0, 44892280);
    IF_SETHIDE(int3, 44892271);
    IF_SETHIDE(int3, 44892173);
    return;
}