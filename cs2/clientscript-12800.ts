//
function script12800(): void {
    script14427();
    script12801();
    script9525(comp(1154, 45), 3, -1);
    script9525(comp(1154, 28), 3, -1);
    var int0 = struct_getparam(47942, 5409);
    if ((PLAYERMEMBER() == false)) {
        int0 = struct_getparam(47942, 9194);
    };
    if ((item_getparam(int0, 5405) == -1 as struct)) {
        script16663(7465 as dbrow, int0, 1);
    };
    return;
}