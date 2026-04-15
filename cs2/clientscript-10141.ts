//
function script10141(int0: unknown_int): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active");
        return;
    };
    varbitclient_23080 = 0;
    varbitclient_23072 = 0;
    if (((int0 == 1) || (STRING_LENGTH(varclient_4289) < 1))) {
        varclient_4289 = "Broadcast Title";
        varclient_4290 = STRING_LENGTH(varclient_4289);
        IF_SETTEXT(varclient_4289, comp(232, 116));
    };
    varbitclient_23068 = 0;
    varbitclient_23073 = 30;
    if ((varbitclient_23069 < 0)) {
        varbitclient_23069 = 0;
        IF_SETHIDE(true, comp(232, 129));
    };
    script10118();
    script10144();
    IF_SETTEXT(varclient_4289, comp(232, 116));
    script10132();
    script9528(comp(232, 67), 100);
    return;
}