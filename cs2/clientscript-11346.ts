//
function script11346(int0: number): void {
    if (((MAP_MEMBERS() == 1) && (item_getparam(INV_GETOBJ(94, 3), 4329) != 0))) {
        IF_SETHIDE(1, int0);
        return;
    };
    IF_SETHIDE(0, int0);
    script41(98500657);
    return;
}