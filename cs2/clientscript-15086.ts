//
function script15086(): void {
    if ((script6431() == 1)) {
        IF_SETSIZE(44, 180, 0, 0, 107610113);
        IF_SETSIZE(44, 180, 0, 0, 107610121);
        IF_SETHIDE(1, 107610118);
        IF_SETONCLICK(callback(script11651), 107610113);
        IF_SETONCLICK(callback(script9197), 107610115);
    } else {
        IF_SETSIZE(44, 294, 0, 0, 107610113);
        IF_SETSIZE(44, 294, 0, 0, 107610121);
        IF_SETHIDE(0, 107610118);
    };
    return;
}