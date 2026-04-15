//
function script11346(int0: component): void {
    if (((MAP_MEMBERS() == 1) && (item_getparam(INV_GETOBJ(94 as inv, 3), 4329) != 0))) {
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    script41(comp(1503, 49));
    return;
}