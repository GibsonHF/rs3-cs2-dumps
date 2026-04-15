//
function script10333(): void {
    var string0 = "";
    var int0 = -1;
    switch (IF_GETGRAPHIC(comp(1519, 57))) {
        case 25852: {
            stack(25853);
            stack("You are marked as ready.");
            [int0, string0] = stack();
            break;
        }
        case 25853: {
            stack(25852);
            stack("You are marked as not ready.");
            [int0, string0] = stack();
            break;
        }
        default: {
            return;
        }
    };
    script10336(int0, string0);
    return;
}