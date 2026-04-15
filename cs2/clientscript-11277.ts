//
function script11277(): void {
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum)))) {
        RESUME_COUNTDIALOG(inttostring(varclient_4777, 10));
    } else {
        printmessage("Select a valid skill before confirming.");
        return;
    };
    return;
}