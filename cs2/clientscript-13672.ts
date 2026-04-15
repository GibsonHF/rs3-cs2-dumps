//
function script13672(int0: component): void {
    var int1 = 0;
    switch (varbitplayer_37593) {
        case 1: {
            int1 = 175000;
            break;
        }
        case 2: {
            int1 = 350000;
            break;
        }
        case 3: {
            int1 = 500000;
            break;
        }
    };
    if ((int1 == 0)) {
        script13313(int0, 0, 0);
    } else {
        script13313(int0, 0, script12422(varbitplayer_37590, int1, 65536));
    };
    return;
}