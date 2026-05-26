//
function script15657(): void {
    var int0 = 48759016;
    switch (IF_GETTOP()) {
        case 906: {
            int0 = 59703304;
            break;
        }
        case 744: {
            if ((script6431() == 1)) {
                int0 = 48758999;
            };
            break;
        }
    };
    if ((DETAILGET_LOGINVOL() > 0)) {
        IF_SETHIDE(1, int0);
    } else {
        IF_SETHIDE(0, int0);
    };
    return;
}