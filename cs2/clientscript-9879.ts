//
function script9879(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETPOSITION(0, 0, 2, 0, comp(1503, 41));  // combatv2_legacy_side:button2
            IF_SETPOSITION(0, 0, 0, 2, comp(1503, 45));  // combatv2_legacy_side:button3
            break;
        }
        case 2:
        case 3:
        case 4: {
            IF_SETPOSITION(0, 0, 2, 0, comp(1503, 45));  // combatv2_legacy_side:button3
            break;
        }
    };
    return;
}