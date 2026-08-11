//
function script10669(int0: number, int1: number): void {
    IF_SETONTIMER(callback(), comp(1542, 31));  // hw14_overlay:hw14_points_flash
    if ((int1 == 1)) {
        IF_SETTEXT(`+ ${inttostring(int0, 10)}`, comp(1542, 31));  // hw14_overlay:hw14_points_flash
        IF_SETCOLOUR(65280, comp(1542, 31));  // hw14_overlay:hw14_points_flash
    } else {
        IF_SETTEXT(`- ${inttostring(int0, 10)}`, comp(1542, 31));  // hw14_overlay:hw14_points_flash
        IF_SETCOLOUR(16711680, comp(1542, 31));  // hw14_overlay:hw14_points_flash
    };
    IF_SETTRANS(0, comp(1542, 31));  // hw14_overlay:hw14_points_flash
    IF_SETONTIMER(callback(script10670, 101056543), comp(1542, 31));  // hw14_overlay:hw14_points_flash
    return;
}