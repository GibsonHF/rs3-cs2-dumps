//
function script4169(int0: int): void {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            break;
        }
        case 3:
        case 2: {
            varclient_6892 = enum_getvalue(0, 0, 15461 as cs2enum, int0);
            script15724();
            break;
        }
        default: {
            script15238(int0);
            break;
        }
    };
    return;
}