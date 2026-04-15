//
function script17358(int0: struct): void {
    var int1 = comp(1802, 329);
    if ((IF_FIND(int1) == 1)) {
        switch (int0) {
            case 47824: {
                CC_SETHIDE(false);
                CC_SETTEXT("Upgrade Now");
                CC_SETONBUTTONCLICK(callback(script15228, 2521));
                break;
            }
            default: {
                CC_SETHIDE(true);
                CC_SETONBUTTONCLICK(callback());
                break;
            }
        };
    };
    return;
}