//
function script17284(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = ACTIVECHATPHRASE_PREPARE();
    printmessage(`Resolution: ${inttostring(int0, 10)} x ${inttostring(int1, 10)}`);
    printmessage(`Interface scale: ${inttostring(DETAILGET_INTERFACESCALE(), 10)}`);
    if ((DETAILGET_INTERFACESCALE() != 100)) {
        printmessage(`New Resolution: ${inttostring(int0, 10)} x ${inttostring(int1, 10)}`);
    };
    return;
}