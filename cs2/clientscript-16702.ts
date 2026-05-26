//
function script16702(int0: number, int1: number): void {
    var int2 = comp(998, 25);
    var int3 = comp(998, 9);
    var int4 = comp(998, 27);
    var int5 = comp(998, 16);
    switch (varplayer_10581) {
        case 995: {
            int2 = comp(486, 30);
            int3 = comp(486, 9);
            int4 = comp(486, 32);
            int5 = comp(486, 21);
            break;
        }
    };
    if ((varclient_7070 == 1)) {
        if ((int0 == int2)) {
            IF_SETHIDE(int1, int4);
        } else if ((int0 == int3)) {
            IF_SETHIDE(int1, int5);
        };
    };
    if (((int0 != varclient_7071) && (int1 == false))) {
        varclient_7071 = int0;
    } else if ((int1 == true)) {
        varclient_7071 = comp(-1, 65535);
    };
    return;
}