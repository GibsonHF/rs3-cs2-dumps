//
function script2600(int0: unknown_int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(37, 5));
        IF_SETPOSITION(0, 69, 0, 0, comp(37, 30));
        script8421(comp(37, 18), comp(37, 41), comp(37, 19), comp(37, 42), "Smithing", 21218 as struct, -1, 1, -1 as graphic, -1 as struct);
    } else {
        IF_SETHIDE(true, comp(37, 5));
        IF_SETPOSITION(0, 39, 0, 0, comp(37, 30));
        script8421(comp(37, 18), comp(37, 41), comp(37, 19), comp(37, 42), "Smelting", 21218 as struct, -1, 1, -1 as graphic, -1 as struct);
    };
    return;
}