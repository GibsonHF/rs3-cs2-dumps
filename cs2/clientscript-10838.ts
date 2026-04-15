//
function script10838(int0: component, int1: component, int2: component): void {
    var int3 = ((varbitplayer_10057 * 100) / 127);
    var int4 = (DATE_MINUTES() - varplayer_6987);
    if ((int4 < 0)) {
        int4 = 0;
    };
    IF_SETTEXT(`${inttostring(int3, 10)}%`, int0);
    if ((int3 >= 75)) {
        IF_SETCOLOUR(65280, int0);
    } else if ((int3 <= 25)) {
        IF_SETCOLOUR(16711680, int0);
    } else {
        IF_SETCOLOUR(16743936, int0);
    };
    if ((varplayer_6987 == -1)) {
        IF_SETTEXT("Never", int1);
    } else {
        IF_SETTEXT(`${script13405(script11025(int4))} ago`, int1);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_10059, 1), int2);
    return;
}