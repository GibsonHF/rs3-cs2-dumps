//
function script6511(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(435, 458755);
            IF_SETTEXT("Artisan", 458754);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(436, 458755);
            IF_SETTEXT("Combat", 458754);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(437, 458755);
            IF_SETTEXT("Gathering", 458754);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(454, 458755);
            IF_SETTEXT("Support", 458754);
            break;
        }
    };
    var int5 = (MODULO(int3, 1440) / 60);
    varclient_6567 = 0;
    if ((int1 == 0)) {
        var int1 = 24;
    };
    if (((int1 - int5) == 2)) {
        varclient_6567 = 59;
    };
    varclient_6567 = (varclient_6567 + (60 - MODULO(int3, 60)));
    varclient_6568 = int4;
    IF_SETONTIMER(callback(script6512), 458756);
    return;
}