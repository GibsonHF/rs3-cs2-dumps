//
function script10333(): void {
    var string0 = "";
    var int0 = -1;
    switch (IF_GETGRAPHIC(comp(1519, 57))) {  // group_child:set_status_button
        case 25852: {
            [int0, string0] = [25853, "You are marked as ready."];
            break;
        }
        case 25853: {
            [int0, string0] = [25852, "You are marked as not ready."];
            break;
        }
        default: {
            return;
        }
    };
    script10336(int0, string0);
    return;
}