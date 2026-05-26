//
function script6122(): void {
    if ((strcmp("", IF_GETTEXT(comp(621, 3))) == 0)) {
        IF_SETTEXT(inttostring(varbitplayer_4816, 10), comp(621, 3));
    } else if ((strcmp(inttostring(varbitplayer_4816, 10), IF_GETTEXT(comp(621, 3))) != 0)) {
        IF_SETTEXT(IF_GETTEXT(comp(621, 3)), comp(621, 2));
        IF_SETPOSITION(58, -4, 0, 0, comp(621, 2));
        IF_SETONTIMER(callback(script6123, -2147483645, 14, 5), 40697858);
        IF_SETPOSITION(58, -22, 0, 0, 40697859);
        IF_SETONTIMER(callback(script6123, -2147483645, -4, 5), 40697859);
        IF_SETTEXT(inttostring(varbitplayer_4816, 10), 40697859);
    };
    if ((strcmp("", IF_GETTEXT(comp(621, 5))) == 0)) {
        IF_SETTEXT(inttostring(varbitplayer_4817, 10), comp(621, 5));
    };
    if ((strcmp(inttostring(varbitplayer_4817, 10), IF_GETTEXT(comp(621, 5))) != 0)) {
        IF_SETTEXT(IF_GETTEXT(comp(621, 5)), comp(621, 4));
        IF_SETPOSITION(394, -4, 0, 0, comp(621, 4));
        IF_SETONTIMER(callback(script6123, -2147483645, 14, 5), 40697860);
        IF_SETPOSITION(394, -22, 0, 0, 40697861);
        IF_SETONTIMER(callback(script6123, -2147483645, -4, 5), 40697861);
        IF_SETTEXT(inttostring(varbitplayer_4817, 10), 40697861);
    };
    var int0 = (varbitplayer_4816 - varbitplayer_4817);
    int0 = MAX(MIN(int0, 4), (0 - 4));
    var int1 = 16;
    var int2 = 10;
    var int3 = (IF_GETWIDTH(comp(621, 16)) - ((int1 + int2) * 2));
    var int4 = (int3 / (4 * 2));
    IF_SETSIZE((int2 + (int4 * (4 + int0))), IF_GETHEIGHT(comp(621, 19)), 0, 0, comp(621, 19));
    IF_SETSIZE((int2 + (int4 * (4 - int0))), IF_GETHEIGHT(comp(621, 20)), 0, 0, comp(621, 20));
    IF_SETPOSITION((((int1 + int2) + (int4 * (4 + int0))) - 16), IF_GETY(comp(621, 25)), 0, 0, comp(621, 25));
    return;
}