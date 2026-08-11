//
function script1345(int0: number): void {
    IF_SETSIZE(36, 170, 1, 0, comp(168, 35));  // reward_chest:inventory_layer
    IF_SETHIDE(false, comp(168, 36));  // reward_chest:scroll_layer
    IF_SETSCROLLSIZE(0, ((int0 * 40) + 10), comp(168, 35));  // reward_chest:inventory_layer
    script7791(11010084, 11010083);
    IF_SETSCROLLPOS(0, 0, comp(168, 36));  // reward_chest:scroll_layer
    return;
}