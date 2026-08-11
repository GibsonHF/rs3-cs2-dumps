//
function script398(): void {
    IF_CLEAROPS(comp(306, 29));  // easter09_nuts:end
    varclient_767 = 0;
    varclient_761 = -1 as model;
    varclient_762 = -1 as model;
    varclient_763 = -1 as model;
    varclient_764 = -1 as model;
    varclient_765 = 0;
    varclient_766 = 0;
    IF_SETONTIMER(callback(), comp(306, 20));  // easter09_nuts:control1
    IF_SETONTIMER(callback(), comp(306, 21));  // easter09_nuts:control2
    IF_SETONTIMER(callback(), comp(306, 22));  // easter09_nuts:control3
    IF_SETONTIMER(callback(), comp(306, 23));  // easter09_nuts:control4
    IF_SETONTIMER(callback(), comp(306, 11));  // easter09_nuts:bar
    IF_SETONTIMER(callback(), comp(306, 25));  // easter09_nuts:result
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, comp(306, 4));  // easter09_nuts:correct_count
    varclient_761 = enum_getvalue(0, 31, 208 as cs2enum, 1);
    if ((varclient_761 != -1 as model)) {
        IF_SETMODEL(varclient_761, comp(306, 7));  // easter09_nuts:model1
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 7));  // easter09_nuts:model1
    };
    varclient_762 = enum_getvalue(0, 31, 208 as cs2enum, 2);
    if ((varclient_762 != -1 as model)) {
        IF_SETMODEL(varclient_762, comp(306, 8));  // easter09_nuts:model2
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 8));  // easter09_nuts:model2
    };
    varclient_763 = enum_getvalue(0, 31, 208 as cs2enum, 3);
    if ((varclient_763 != -1 as model)) {
        IF_SETMODEL(varclient_763, comp(306, 9));  // easter09_nuts:model3
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 9));  // easter09_nuts:model3
    };
    varclient_764 = enum_getvalue(0, 31, 208 as cs2enum, 4);
    if ((varclient_764 != -1 as model)) {
        IF_SETMODEL(varclient_764, comp(306, 10));  // easter09_nuts:model4
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 10));  // easter09_nuts:model4
    };
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 7))), IF_GETY(comp(306, 7)), 0, 0, comp(306, 7));  // easter09_nuts:model1
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 8))), IF_GETY(comp(306, 8)), 0, 0, comp(306, 8));  // easter09_nuts:model2
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 9))), IF_GETY(comp(306, 9)), 0, 0, comp(306, 9));  // easter09_nuts:model3
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 10))), IF_GETY(comp(306, 10)), 0, 0, comp(306, 10));  // easter09_nuts:model4
    IF_SETPOSITION(IF_GETX(comp(306, 6) /*easter09_nuts:band*/), 200, 0, 0, comp(306, 11) /*easter09_nuts:bar*/);
    IF_SETONTIMER(callback(script399, 20054023), comp(306, 20));  // easter09_nuts:control1
    return;
}