//
function script7283(int0: number): void {
    if ((int0 == 1)) {
        if ((varclient_2611 != 0)) {
            printmessage("You cannot currently edit the crew.");
            return;
        };
        IF_SETHIDE(1, 60031083);
        IF_SETHIDE(1, 60031310);
        IF_SETHIDE(0, 60031154);
        IF_SETHIDE(0, 60031122);
        IF_SETHIDE(1, 60031298);
        IF_SETHIDE(0, 60031297);
    } else {
        IF_SETHIDE(0, 60031298);
        IF_SETHIDE(1, 60031154);
        IF_SETHIDE(1, 60031122);
        IF_SETHIDE(1, 60031310);
    };
    return;
}