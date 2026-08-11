//
function script11738(): void {
    var int0 = 0;
    var int1 = -1 as struct;
    var int2 = 0;
    while ((int0 < ENUM_GETOUTPUTCOUNT(10270 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 10270 as cs2enum, int0);
        int1 = enum_getvalue(0, 73, 10269 as cs2enum, int2);
        if ((int1 == -1 as struct)) {
            int1 = 32063 as struct;
        };
        script10410(108724224, -1, 28556, 0, (int0 * 60), IF_GETWIDTH(comp(1659, 0)), 60, int0, 0, "");  // comscenario_faction_objectives:button
        CC_CREATE(comp(1659, 8), 4, int0);  // comscenario_faction_objectives:title
        CC_SETTEXT(struct_getparam(int1, 5216));
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(script10495(0));
        CC_SETPOSITION(10, ((int0 * 60) + 10), 0, 0);
        CC_SETSIZE(20, 10, 1, 0);
        CC_CREATE(comp(1659, 7), 4, int0);  // comscenario_faction_objectives:description
        CC_SETTEXT(struct_getparam(int1, 5217));
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETPOSITION(10, ((int0 * 60) + 20), 0, 0);
        CC_SETSIZE(20, 30, 1, 0);
        CC_CREATE(comp(1659, 6), 4, int0);  // comscenario_faction_objectives:button_click
        CC_SETPOSITION(10, (int0 * 60), 0, 0);
        CC_SETSIZE(0, 60, 1, 0);
        CC_SETOP(1, "Select");
        int0 = (int0 + 1);
    };
    if (((int0 * 60) > IF_GETHEIGHT(comp(1659, 5)))) {  // comscenario_faction_objectives:scroll_layer
        IF_SETSCROLLSIZE(0, (int0 * 60), comp(1659, 5));  // comscenario_faction_objectives:scroll_layer
        script7791(108724225, 108724229);
    };
    return;
}