//
function script21035(): void {
    var int1 = enum_getvalue(9, 0, 9079 as cs2enum, int0);
    if ((int1 == -1)) {
        unk11016("Unrecognised component in enum league_locality_component_to_id");
        return;
    };
    var string0 = enum_getvalue(0, 36, 9057 as cs2enum, int1);
    stack(string0);
    stack(int0);
    script21036();
    stack(int1);
    stack(int0);
    script21037();
    return;
}