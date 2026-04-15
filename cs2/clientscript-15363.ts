//
function script15363(int0: unknown_int, int1: category): void {
    var int2 = 0;
    if ((int0 == 1)) {
        int2 = ACHIEVEMENT_FINDGRACED();
        script15364(int2);
    } else {
        int2 = ACHIEVEMENT_FINDCATEGORY(int1);
        script15364(int2);
    };
    return;
}