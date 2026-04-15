//
function script8583(int0: stat, int1: int, int2: quest): [string, unknown_int] {
    var string0 = "null";
    var int3 = 1;
    if ((script2152(int2) == 0)) {
        string0 = `130 combined levels in Attack and Strength is one of the requirements for ${script2103(int2)}.`;
    } else {
        string0 = `You now have all the levels you need for ${script2103(int2)}.`;
    };
    return [string0, int3];
}