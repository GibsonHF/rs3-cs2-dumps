//
function script9092(int0: int, int1: int, int2: unknown_int, int3: component, string0: string): void {
    var string1 = `${string0} - Unlocked`;
    if ((int0 < int1)) {
        string1 = `${string0} - Kicks required: ${inttostring(int1, 10)}`;
        script7794(int3, 21361 as struct);
    } else {
        script7794(int3, 52670 as struct);
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int2);
    return;
}