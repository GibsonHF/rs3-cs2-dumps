//
function script17165(int0: struct, int1: boolean): void {
    SOUND_VORBIS_VOLUME(36960 as vorbis, 1, 0, 240);
    if (((int1 == false) && (IF_GETHIDE(comp(1253, 462)) == false))) {
        script13463("Please finish what you are doing before opening prize preview.");
        return;
    };
    switch (int0) {
        case 45877: {
            script17157(int1);
            break;
        }
        case 6216: {
            script17158(int1);
            break;
        }
        case 22606: {
            script17159(int1);
            break;
        }
        case 3451: {
            script17160(int1);
            break;
        }
        case 39853: {
            script17823(int1);
            break;
        }
        case 47035: {
            script17161(int1);
            break;
        }
        case 6879: {
            script17162(int1);
            break;
        }
        case 47942: {
            script17163(int1);
            break;
        }
        case 49116: {
            script18356(int1);
            break;
        }
    };
    if ((int1 == false)) {
        script6574(0);
    } else {
        script6574(1);
    };
    return;
}