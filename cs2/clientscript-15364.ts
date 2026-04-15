//
function script15364(int0: int): void {
    if ((int0 == 0)) {
        script15365();
        return;
    };
    var int1 = 0;
    var int2 = ACHIEVEMENT_FINDNEXT();
    while ((int2 != -1 as achievement)) {
        if ((ACHIEVEMENT_REQSTATE(int2) == -2)) {
            int1 = (int1 + 1);
        };
        int2 = ACHIEVEMENT_FINDNEXT();
    };
    if ((int0 == int1)) {
        script15366();
    } else {
        script15367();
    };
    return;
}