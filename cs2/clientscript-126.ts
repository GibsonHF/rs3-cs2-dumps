//[clientscript,friend_op]
function script126(int0: unknown_int, int1: int, string0: string): void {
    if ((varclient_1413 == false)) {
        return;
    };
    var int2 = -1;
    var string1 = REMOVETAGS(string0);
    switch (int0) {
        case 1: {
            if ((varclient_4126 == 0)) {
                script8512(varclient_2231, string1);
            };
            break;
        }
        case 2: {
            script16634(int1, string1, 19);
            break;
        }
        case 4:
        case 5: {
            if (((varclient_4126 == 1) && (int0 == 4))) {
                script8512(varclient_2231, string1);
            };
            printmessage("That player is currently offline.");
            break;
        }
        case 8: {
            varclient_3936 = string1;
            script2018(8);
            break;
        }
    };
    varclient_4126 = 0;
    return;
}