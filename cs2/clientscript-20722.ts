//
function script20722(int0: number): void {
    if (((int0 == 1) && (varbitplayer_61203 == 1))) {
        IF_SETTEXT("House Controls", comp(1665, 1));
        IF_SETHIDE(false, comp(1665, 3));
        IF_SETHIDE(true, comp(1665, 5));
        script20723();
        script16272(1, 101, 8, 109117444, 5, 0);
        if ((script20783(varplayer_12920) == 1)) {
            script20778(0);
        } else {
            script20778(1);
        };
    } else {
        IF_SETHIDE(true, comp(1665, 3));
        IF_SETHIDE(false, comp(1665, 5));
        CC_DELETEALL(comp(1665, 4));
        if ((varbitplayer_61203 == 0)) {
            IF_SETHIDE(true, comp(1665, 7));
            IF_SETHIDE(true, comp(1665, 8));
            IF_SETHIDE(true, comp(1665, 2));
            IF_SETHIDE(false, comp(1665, 6));
            script20726();
        } else {
            IF_SETTEXT("House Controls", comp(1665, 1));
            IF_SETHIDE(false, comp(1665, 7));
            IF_SETHIDE(false, comp(1665, 8));
            IF_SETHIDE(false, comp(1665, 2));
            IF_SETHIDE(true, comp(1665, 6));
        };
    };
    return;
}