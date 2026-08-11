//
function script12259(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(1725, 6);  // nomel_transmog_overlay:ability_slot_1_fade
            break;
        }
        case 2: {
            int2 = comp(1725, 10);  // nomel_transmog_overlay:ability_slot_2_fade
            break;
        }
        case 3: {
            int2 = comp(1725, 20);  // nomel_transmog_overlay:ability_slot_3_fade
            break;
        }
    };
    IF_SETHIDE(false, int2);
    var int3 = (CLIENTCLOCK() + (int1 * 30));
    IF_SETONTIMER(callback(script12260, int2, CLIENTCLOCK(), int3), int2);
    return;
}