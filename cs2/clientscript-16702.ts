//
function script16702(int0: number, int1: number): void {
    var int2 = comp(998, 25);
    var int3 = comp(998, 9);
    var int4 = 65404955;
    var int5 = 65404944;
    switch (varplayer_10581) {
        case 995: {
            int2 = comp(486, 30);
            int3 = comp(486, 9);
            int4 = 31850528;
            int5 = 31850517;
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
    if (((int0 != varclient_7071) && (int1 == 0))) {
        varclient_7071 = int0;
    } else if ((int1 == 1)) {
        varclient_7071 = comp(-1, 65535);
    };
    return;
}