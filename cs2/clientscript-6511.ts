//
function script6511(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(435 as graphic, comp(7, 3));  // vos_weekend:active_voice_graphic
            IF_SETTEXT("Artisan", comp(7, 2));  // vos_weekend:active_voice_name
            break;
        }
        case 2: {
            IF_SETGRAPHIC(436 as graphic, comp(7, 3));  // vos_weekend:active_voice_graphic
            IF_SETTEXT("Combat", comp(7, 2));  // vos_weekend:active_voice_name
            break;
        }
        case 3: {
            IF_SETGRAPHIC(437 as graphic, comp(7, 3));  // vos_weekend:active_voice_graphic
            IF_SETTEXT("Gathering", comp(7, 2));  // vos_weekend:active_voice_name
            break;
        }
        case 4: {
            IF_SETGRAPHIC(454 as graphic, comp(7, 3));  // vos_weekend:active_voice_graphic
            IF_SETTEXT("Support", comp(7, 2));  // vos_weekend:active_voice_name
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
    IF_SETONTIMER(callback(script6512), comp(7, 4));  // vos_weekend:active_voice_timer_layer
    return;
}