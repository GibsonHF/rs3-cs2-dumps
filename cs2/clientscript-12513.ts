//
function script12513(int0: struct): void {
    if ((struct_getparam(int0, 4652) == 1)) {
        if ((varbitplayer_28622 == 1)) {
            CC_SETOP(1, "Quick teleport");
            CC_SETOP(2, "Teleport");
        } else {
            CC_SETOP(1, "Teleport");
            CC_SETOP(2, "Quick Teleport");
        };
    };
    return;
}