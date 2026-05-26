//
function script398(): void {
    IF_CLEAROPS(20054045);
    varclient_767 = 0;
    varclient_761 = -1 as model;
    varclient_762 = -1 as model;
    varclient_763 = -1 as model;
    varclient_764 = -1 as model;
    varclient_765 = 0;
    varclient_766 = 0;
    IF_SETONTIMER(callback(), 20054036);
    IF_SETONTIMER(callback(), 20054037);
    IF_SETONTIMER(callback(), 20054038);
    IF_SETONTIMER(callback(), 20054039);
    IF_SETONTIMER(callback(), 20054027);
    IF_SETONTIMER(callback(), 20054041);
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, 20054020);
    varclient_761 = enum_getvalue(0, 31, 208, 1);
    if ((varclient_761 != -1)) {
        IF_SETMODEL(varclient_761, 20054023);
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, 20054023);
    };
    varclient_762 = enum_getvalue(0, 31, 208 as cs2enum, 2);
    if ((varclient_762 != -1 as model)) {
        IF_SETMODEL(varclient_762, 20054024);
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, 20054024);
    };
    varclient_763 = enum_getvalue(0, 31, 208 as cs2enum, 3);
    if ((varclient_763 != -1 as model)) {
        IF_SETMODEL(varclient_763, 20054025);
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, 20054025);
    };
    varclient_764 = enum_getvalue(0, 31, 208 as cs2enum, 4);
    if ((varclient_764 != -1 as model)) {
        IF_SETMODEL(varclient_764, 20054026);
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, 20054026);
    };
    IF_SETPOSITION((0 - IF_GETWIDTH(20054023)), IF_GETY(20054023), 0, 0, 20054023);
    IF_SETPOSITION((0 - IF_GETWIDTH(20054024)), IF_GETY(20054024), 0, 0, 20054024);
    IF_SETPOSITION((0 - IF_GETWIDTH(20054025)), IF_GETY(20054025), 0, 0, 20054025);
    IF_SETPOSITION((0 - IF_GETWIDTH(20054026)), IF_GETY(20054026), 0, 0, 20054026);
    IF_SETPOSITION(IF_GETX(20054022), 200, 0, 0, 20054027);
    IF_SETONTIMER(callback(script399, 20054023), 20054036);
    return;
}