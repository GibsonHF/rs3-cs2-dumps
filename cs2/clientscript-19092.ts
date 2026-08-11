//
function script19092(int0: number): void {
    IF_SETHIDE(true, comp(1147, 13));  // trh199_overlay:mystery_layout
    IF_SETHIDE(true, comp(1147, 34));  // trh199_overlay:armour_layout
    IF_SETHIDE(true, comp(1147, 43));  // trh199_overlay:weapon_layout
    switch (int0) {
        case 3: {
            IF_SETHIDE(false, comp(1147, 13));  // trh199_overlay:mystery_layout
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1147, 34));  // trh199_overlay:armour_layout
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1147, 43));  // trh199_overlay:weapon_layout
            break;
        }
    };
    script19098();
    return;
}