//
function script9431(int0: int, int1: component, int2: int): void {
    var string0 = "";
    var int3 = enum_getvalue(0, 73, 8211 as cs2enum, int0);
    string0 = struct_getparam(int3, 3938);
    var int4 = struct_getparam(int3, 3931);
    if ((STAT(1 as stat) < item_getparam(int4, 750))) {
        string0 = strconcat(string0, `<br><br><col=ff0000>You require ${inttostring(item_getparam(int4, 750), 10)} Defence to wear this armour.`);
    };
    script8800(string0, int1, int2);
    return;
}