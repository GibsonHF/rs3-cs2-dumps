//
function script11064(int0: number, int1: number, string0: string): void {
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 104333334: {
            int2 = comp(1592, 19);  // boss_practice:reward_mouseover_glow_1
            break;
        }
        case 104333335: {
            int2 = comp(1592, 20);  // boss_practice:reward_mouseover_glow_2
            break;
        }
        case 104333336: {
            int2 = comp(1592, 21);  // boss_practice:reward_mouseover_glow_4
            break;
        }
    };
    if ((int1 == 0)) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    IF_SETTEXT(string0, comp(1592, 16));  // boss_practice:reward_desc
    return;
}