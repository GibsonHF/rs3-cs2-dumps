//
function script15657(): void {
    var int0 = comp(744, 236);
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(911, 8);
            break;
        }
        case 744: {
            if ((script6431() == 1)) {
                int0 = comp(744, 219);
            };
            break;
        }
    };
    if ((DETAILGET_LOGINVOL() > 0)) {
        IF_SETHIDE(true, int0);
    } else {
        IF_SETHIDE(false, int0);
    };
    return;
}