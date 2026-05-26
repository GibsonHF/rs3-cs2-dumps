//
function script17358(int0: number): void {
    var int1 = 118096201;
    if ((IF_FIND(int1) == 1)) {
        switch (int0) {
            case 47824: {
                CC_SETHIDE(0);
                CC_SETTEXT("Upgrade Now");
                CC_SETONBUTTONCLICK(callback(script15228, 2521));
                break;
            }
            default: {
                CC_SETHIDE(1);
                CC_SETONBUTTONCLICK(callback());
                break;
            }
        };
    };
    return;
}