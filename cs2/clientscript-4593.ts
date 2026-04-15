//
function script4593(int0: int, int1: unknown_int): void {
    var string0 = "Unknown";
    var int2 = enum_getvalue(0, 9, 10060 as cs2enum, int0);
    switch (int1) {
        case 1: {
            string0 = `Day ${inttostring(int0, 10)} was won by Saradomin.`;
            break;
        }
        case 2: {
            string0 = `Day ${inttostring(int0, 10)} was won by Zamorak.`;
            break;
        }
        case 3: {
            string0 = `Day ${inttostring(int0, 10)} was won by Armadyl.`;
            break;
        }
        case 4: {
            string0 = `Day ${inttostring(int0, 10)} was won by The Godless.`;
            break;
        }
        case 0: {
            string0 = `Day ${inttostring(int0, 10)} was won by Tuska.`;
            break;
        }
        default: {
            string0 = `The winner of day ${inttostring(int0, 10)} is yet to be determined.`;
            break;
        }
    };
    script4595(int2, string0);
    return;
}