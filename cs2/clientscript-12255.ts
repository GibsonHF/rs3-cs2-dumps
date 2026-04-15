//
function script12255(int0: component): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 0)) {
        IF_SETTRANS(MAX(0, (int1 - 3)), int0);
    };
    return;
}