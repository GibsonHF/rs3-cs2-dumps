//
function script2552(int0: int, int1: int, int2: int, int3: struct, int4: component, int5: component, int6: int, string0: string, string1: string): int {
    var string2 = inttostring(int1, 10);
    if ((int1 > 0)) {
        string2 = `+${string2}`;
    } else if ((int1 < 0)) {
        string2 = `-${string2}`;
    };
    return script7238(`${string0}: ${string1}${inttostring(int0, 10)} (${string2})</col>`, int2, int3, int4, int5, int6);
}