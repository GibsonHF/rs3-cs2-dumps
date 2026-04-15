//
function script7186(int0: int): void {
    var int1 = MIN(60, (int0 / 3));
    if ((varclient_2232 > int1)) {
        script7187((IF_GETTRANS(comp(1372, 3)) - (255 / int1)));
    } else {
        script7187((IF_GETTRANS(comp(1372, 3)) + (255 / int1)));
    };
    script7191();
    return;
}