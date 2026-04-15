//[proc,lobby_friends_join]
function script1182(int0: component, int1: int): void {
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script1181, int0, int1), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    var int2 = 0;
    var string0 = "";
    var int3 = 0;
    var string1 = "";
    stack(WORLDLIST_SPECIFIC(int1));
    [int3, string0, int2, string0, int2, int2, string1] = stack();
    if ((int3 == -1)) {
        printmessage("Sorry, you can't join that person.");
    } else {
        if ((((TESTBIT(int3, 30) == 1) && (script16823() == false)) && (STAFFMODLEVEL() < 2))) {
            printmessage("This world is for seasonal players only.");
            return;
        };
        if ((((TESTBIT(int3, 30) == 0) && (script16823() == true)) && (STAFFMODLEVEL() < 2))) {
            printmessage("This world is for non-seasonal players only.");
            return;
        };
        if ((unk11027(int1, string1) == 1)) {
            varclient_547 = 0;
            script3062(comp(906, 81));
        } else {
            if ((script13749() == false)) {
                script3686(`Sorry, we couldn't contact world ${inttostring(int1, 10)}.<br>Please choose a different world.`);
            } else {
                script426(`Sorry, we couldn't contact world ${inttostring(int1, 10)}.<br>Please choose a different world.`, comp(1044, 50), -1, 1);
            };
            printmessage(`Sorry, we couldn't contact world ${inttostring(int1, 10)}. Please choose a different world.`);
        };
    };
    return;
}