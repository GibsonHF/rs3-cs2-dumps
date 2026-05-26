//
function script2552(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string, string1: string): number {
    var string2 = inttostring(int1, 10);
    if ((int1 > 0)) {
        string2 = `+${string2}`;
    } else if ((int1 < 0)) {
        string2 = `-${string2}`;
    };
    return script7238(`${string0}: ${string1}${inttostring(int0, 10)} (${string2})</col>`, int2, int3, int4, int5, int6);
}