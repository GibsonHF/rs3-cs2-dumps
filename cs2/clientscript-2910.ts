//
function script2910(int0: component, int1: unknown_int): void {
    if ((varbitplayer_4221 == 0)) {
        IF_SETONTIMER(callback(script2911, 0, 20, (IF_GETHEIGHT(IF_GETLAYER(int0)) - 20), 0, int0), int0);
        IF_SETTEXT("Show", int1);
        IF_SETOP(1, "Show", int1);
    } else {
        IF_SETONTIMER(callback(script2911, 1, 20, (IF_GETHEIGHT(IF_GETLAYER(int0)) - 20), 0, int0), int0);
        IF_SETTEXT("Hide", int1);
        IF_SETOP(1, "Hide", int1);
    };
    return;
}