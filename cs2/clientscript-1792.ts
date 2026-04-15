//[clientscript,clanwars_overlay_rules]
function script1792(int0: component, int1: component, int2: component, int3: component, int4: component, int5: unknown_int): void {
    if ((varbitplayer_4098 == 0)) {
        IF_SETCOLOUR(16750623, int3);
        IF_SETCOLOUR(16750623, int4);
        stack(444);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTEXT("ITEMS ARE<br>SAFE", int4);
    } else {
        IF_SETCOLOUR(16776960, int3);
        IF_SETCOLOUR(16776960, int4);
        stack(445);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTEXT("ITEMS ARE<br>DROPPED", int4);
    };
    IF_SETTILING(1, int1);
    var int6 = PARAWIDTH(IF_GETTEXT(int3), 512, 66 as fontmetrics);
    int6 = MAX(PARAWIDTH(IF_GETTEXT(int4), 512, 66 as fontmetrics), int6);
    int6 = (int6 + 6);
    var int7 = 5;
    IF_SETPOSITION(0, int7, 0, 0, int3);
    var int8 = PARAHEIGHT(IF_GETTEXT(int3), int6, 66 as fontmetrics);
    int8 = ((int8 * 10) + 3);
    IF_SETSIZE(int6, int8, 0, 0, int3);
    int7 = ((int7 + int8) - 1);
    IF_SETPOSITION(((int6 - IF_GETWIDTH(int2)) / 2), int7, 0, 0, int2);
    int7 = ((int7 + IF_GETHEIGHT(int2)) - 1);
    IF_SETPOSITION(0, int7, 0, 0, int4);
    var int9 = PARAHEIGHT(IF_GETTEXT(int4), int6, 66 as fontmetrics);
    int9 = ((int9 * 10) + 3);
    IF_SETSIZE(int6, int8, 0, 0, int4);
    int7 = ((int7 + int9) + 3);
    IF_SETSIZE(int6, int7, 0, 0, int0);
    IF_SETSIZE(int6, int7, 0, 0, int1);
    script1086(int0, 0, 0, 0);
    return;
}