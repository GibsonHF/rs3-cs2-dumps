//
function script12496(): void {
    switch (script12497()) {
        case 0: {
            IF_SETTEXT("Current: Temporary ports buffs", 115212304);
            break;
        }
        case 1: {
            IF_SETTEXT("Next: Ports Skills", 115212304);
            break;
        }
        case 2: {
            IF_SETTEXT("Next: Dungeoneering & Raids", 115212304);
            break;
        }
        case 3: {
            IF_SETTEXT("Next: Bossing & Slayer", 115212304);
            break;
        }
        case 4: {
            IF_SETTEXT("Next: Minigames", 115212304);
            break;
        }
        case -1: {
            IF_SETTEXT("May Weekends are now over!", 115212304);
            break;
        }
        default: {
            IF_SETTEXT("Lose your mind with weekend madness throughout May.", 115212304);
            break;
        }
    };
    return;
}