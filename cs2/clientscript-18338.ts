//
function script18338(int0: number): number {
    var int2 = -1;
    switch (int1) {
        case 8: {
            int2 = script18377();
            break;
        }
        case 2: {
            int2 = script19030();
            break;
        }
        case 6: {
            int2 = script19135();
            break;
        }
        case 3: {
            int2 = script19214();
            break;
        }
        case 4: {
            script20200();
            int2 = [];
            break;
        }
        case 10: {
            script20201();
            int2 = [];
            break;
        }
        case 11: {
            script20202();
            int2 = [];
            break;
        }
        case 1: {
            script20203();
            int2 = [];
            break;
        }
        case 5: {
            script20205();
            int2 = [];
            break;
        }
        case 7: {
            script20206();
            int2 = [];
            break;
        }
        case 9: {
            script20272();
            int2 = [];
            break;
        }
        case 0: {
            int2 = script20352();
            break;
        }
        default: {
            unk11016(`Unexpected locality passed in. Value was ${inttostring(int1, 10)}`);
            break;
        }
    };
    if ((int0 == -1)) {
        return int2;
    };
    if ((int2 == -1)) {
        return int0;
    };
    return unk11018(int0, int2);
}