//[clientscript,clanwars_ffa_warning_setup]
function script1793(int0: component, int1: component, int2: component, int3: component, int4: unknown_int, int5: component): void {
    script1795(int4, int5);
    if ((varbitplayer_4094 == 1)) {
        IF_SETTEXT("Free-for-all: Dangerous", int0);
        IF_SETTEXT("This is a <col=ff0000>DANGEROUS</col> arena. When players fight each other in here, they drop <col=ff0000>ALL</col> their items on death. Gravestones do not appear.<br><br>A non-combat zone exists at the southern end of the arena. This portal leads into that zone.<br><br>You cannot teleport out of this arena unless you're standing in the non-combat zone.", int1);
        IF_SETONVARTRANSMIT(callback(script1794, int4, int5, 1381, 447, 2), int4);
    } else {
        IF_SETTEXT("Free-for-all: Safe", int0);
        IF_SETTEXT("This is a SAFE arena. Although players may fight each other in here, items are not dropped on death.<br><br>You can teleport out of the arena at any time.<br><br>A non-combat zone exists at the southern end of the arena. This portal leads into that zone.", int1);
        IF_SETONVARTRANSMIT(callback(script1794, int4, int5, 1381, 446, 2), int4);
    };
    var int6 = PARAWIDTH(IF_GETTEXT(int0), IF_GETWIDTH(int0), 69 as fontmetrics);
    int6 = ((IF_GETWIDTH(int0) - int6) / 2);
    int6 = (int6 - (IF_GETWIDTH(int2) + 10));
    IF_SETPOSITION(int6, IF_GETY(int2), 0, 0, int2);
    IF_SETPOSITION(int6, IF_GETY(int3), 2, 0, int3);
    return;
}