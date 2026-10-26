//
function script21264(): void {
    IF_SETONCLICK(callback(script20610, 1, int1), int0);
    switch (int1) {
        case 1: {
            IF_SETTEXT("Bonus XP Table", int0);
            break;
        }
        case 2: {
            IF_SETTEXT("Learn more", int0);
            break;
        }
        default: {
            IF_SETTEXT("Bonus XP Table", int0);
            break;
        }
    };
    return;
}