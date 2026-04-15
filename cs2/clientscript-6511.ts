//
function script6511(int0: unknown_int, int1: int, int2: unknown_int, int3: int, int4: int): void {
    switch (int0) {
        case 1: {
            stack(435);
            stack(458755);
            IF_SETGRAPHIC();
            IF_SETTEXT("Artisan", 458754);
            break;
        }
        case 2: {
            stack(436);
            stack(458755);
            IF_SETGRAPHIC();
            IF_SETTEXT("Combat", 458754);
            break;
        }
        case 3: {
            stack(437);
            stack(458755);
            IF_SETGRAPHIC();
            IF_SETTEXT("Gathering", 458754);
            break;
        }
        case 4: {
            stack(454);
            stack(458755);
            IF_SETGRAPHIC();
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
    IF_SETONTIMER(callback(script6512), comp(7, 4));
    return;
}