//
function script5656(int0: cs2enum): void {
    var int1 = 0;
    printmessage("-------A fragment of a memory-------");
    while ((int1 < ENUM_GETOUTPUTCOUNT(int0))) {
        printmessage(enum_getvalue(0, 36, int0, int1));
        int1 = (int1 + 1);
    };
    printmessage("-----------------------------------------------");
    return;
}