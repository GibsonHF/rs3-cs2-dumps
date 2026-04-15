//
function script3425(int0: component, int1: component): void {
    var int2 = enum_getvalue(9, 33, 3058 as cs2enum, int1);
    var int3 = enum_getvalue(33, 0, 3059 as cs2enum, int2);
    if ((int2 == 4055 as obj)) {
        IF_SETTEXT("Free!", int0);
    } else {
        IF_SETTEXT(inttostring(int3, 10), int0);
    };
    IF_SETOBJECT(int2, -1, int1);
    IF_SETOUTLINE(1, int1);
    IF_SETGRAPHICSHADOW(3355443, int1);
    return;
}