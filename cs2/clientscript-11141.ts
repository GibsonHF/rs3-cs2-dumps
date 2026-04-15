//
function script11141(int0: component, int1: int, int2: int, int3: int, int4: int, int5: obj): void {
    var string0 = "No effect";
    if ((int3 < 0)) {
        string0 = `Down ${inttostring(int3, 10)}`;
    } else if ((int3 > 0)) {
        string0 = `Up ${inttostring(int3, 10)}`;
    };
    string0 = `${OC_NAME(int5)}<br>${enum_getvalue(0, 36, 9847 as cs2enum, int4)}: ${string0}`;
    script11140(int0, int1, (int2 + 7), 34, int3, -2, string0);
    return;
}