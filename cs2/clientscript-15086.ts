//
function script15086(): void {
    if ((script6431() == true)) {
        IF_SETSIZE(44, 180, 0, 0, comp(1642, 1));
        IF_SETSIZE(44, 180, 0, 0, comp(1642, 9));
        IF_SETHIDE(true, comp(1642, 6));
        IF_SETONCLICK(callback(script11651), comp(1642, 1));
        IF_SETONCLICK(callback(script9197), 107610115);
    } else {
        IF_SETSIZE(44, 294, 0, 0, comp(1642, 1));
        IF_SETSIZE(44, 294, 0, 0, comp(1642, 9));
        IF_SETHIDE(false, comp(1642, 6));
    };
    return;
}