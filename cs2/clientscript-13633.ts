//
function script13633(int0: int): string {
    var int1 = enum_getvalue(0, 73, 12533 as cs2enum, int0);
    var string0 = "";
    if ((struct_getparam(int1, 6507) == true)) {
        string0 = "<col=1bb3f9>";
    } else {
        switch (struct_getparam(int1, 6506)) {
            case 2: {
                string0 = "<col=1bb3f9>";
                break;
            }
            case 1: {
                string0 = "<col=12a501>";
                break;
            }
            case 0: {
                string0 = "<col=f91b1b>";
                break;
            }
        };
    };
    return `${string0}${struct_getparam(int1, 6502)}</col><br>${struct_getparam(int1, 6503)}`;
}