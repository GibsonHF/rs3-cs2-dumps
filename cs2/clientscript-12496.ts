//
function script12496(): void {
    switch (script12497()) {
        case 0: {
            IF_SETTEXT("Current: Temporary ports buffs", comp(1758, 16));
            break;
        }
        case 1: {
            IF_SETTEXT("Next: Ports Skills", comp(1758, 16));
            break;
        }
        case 2: {
            IF_SETTEXT("Next: Dungeoneering & Raids", comp(1758, 16));
            break;
        }
        case 3: {
            IF_SETTEXT("Next: Bossing & Slayer", comp(1758, 16));
            break;
        }
        case 4: {
            IF_SETTEXT("Next: Minigames", comp(1758, 16));
            break;
        }
        case -1: {
            IF_SETTEXT("May Weekends are now over!", comp(1758, 16));
            break;
        }
        default: {
            IF_SETTEXT("Lose your mind with weekend madness throughout May.", comp(1758, 16));
            break;
        }
    };
    return;
}