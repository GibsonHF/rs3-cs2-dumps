//
function script1179(int0: component): void {
    var int1 = (varplayer_6144 - DATE_MINUTES());
    if (((varbitplayer_22875 == 1) && (varbitplayer_223 == 0))) {
        if ((MAP_LANG() == 1)) {
            stack(2715);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(2731);
            stack(int0);
            IF_SETGRAPHIC();
        };
    } else {
        if ((MAP_LANG() == 1)) {
            stack(5571);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(5569);
            stack(int0);
            IF_SETGRAPHIC();
        };
        if (((varbitplayer_223 == 1) || (int1 > 0))) {
            script8800("Bonus XP is active!", int0, -1);
        };
    };
    return;
}