//
function script7840(): void {
    var int0 = 0;
    var string0 = "";
    stack(CREATE_SUGGEST_NAME_REPLY());
    [int0, string0] = stack();
    switch (int0) {
        case -3: {
            return;
        }
        case 2: {
            varclient_2563 = string0;
            IF_SETTEXT(varclient_2563, comp(786, 15));
            script2714(111, 1);
            script7855(0, 1);
            break;
        }
        case -2: {
            script3213("Unexpected error.");
            break;
        }
        case 3: {
            script3213("Unexpected server error.");
            break;
        }
        case 4: {
            script3213("There were no suggestions available.");
            break;
        }
    };
    IF_SETONTIMER(callback(), comp(1420, 6));
    return;
}