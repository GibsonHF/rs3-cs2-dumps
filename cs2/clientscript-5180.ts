//
function script5180(int0: number): void {
    var int1 = enum_getvalue(0, 73, 4849 as cs2enum, int0);
    if ((int1 == -1 as struct)) {
        return;
    };
    var string0 = "<col=FF0000>LOCKED</col>";
    var string1 = struct_getparam(int1, 1879);
    var string2 = struct_getparam(int1, 1880);
    if ((int0 != 13)) {
        if ((script5200(int0) == 1)) {
            string0 = "<col=00FF00>COMPLETED</col>";
        } else {
            string0 = "<col=FF0000>INCOMPLETE</col>";
        };
    };
    var string3 = `Goal: ${string1}<br>Status: ${string0}<br>${string2}`;
    var int2 = IF_GETWIDTH(comp(1122, 52));  // hcape_interface:goals_text_layer
    var int3 = PARAHEIGHT(string3, int2, 26 as fontmetrics);
    IF_SETTEXT(string3, comp(1122, 31));  // hcape_interface:goals_text
    var int4 = (int3 * 13);
    if ((int4 < IF_GETHEIGHT(comp(1122, 52)))) {  // hcape_interface:goals_text_layer
        int4 = 0;
        IF_SETSCROLLPOS(0, 0, comp(1122, 52));  // hcape_interface:goals_text_layer
    };
    IF_SETSCROLLSIZE(0, int4, comp(1122, 52));  // hcape_interface:goals_text_layer
    script7791(73531424, 73531423);
    varclient_1596 = int0;
    script5176();
    return;
}