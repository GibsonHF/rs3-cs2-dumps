//
function script16655(): string {
    var int0 = -1 as obj;
    var int1 = 0;
    [int0, int1] = script16653(varbitplayer_51407);
    if ((item_getparam(int0, 2531) == 2)) {
        if ((varbitplayer_51407 == 4)) {
            return "Cosmetic Overrides: Plague Doctor Boots and Gloves (Green)";
        };
        return `Cosmetic Override:<br>${OC_NAME(int0)}`;
    };
    return `${inttostring(int1, 10)} x ${OC_NAME(int0)}`;
}