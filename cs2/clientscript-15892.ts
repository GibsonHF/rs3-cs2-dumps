//
function script15892(int0: int, int1: struct, int2: int, int3: cs2enum, int4: unknown_int): void {
    if ((varplayer_1295 < 1000)) {
        printmessage("You can't do this while in the tutorial.");
        return;
    };
    if ((varbitplayer_3617 == 1)) {
        printmessage("You cannot change your chat filters while you are in the tutorial as you might miss important messages that will help with your progress.");
        return;
    };
    if ((int1 == -1 as struct)) {
        return;
    };
    script373(int2, int0, int1);
    switch (int1) {
        case 37640: {
            varclient_2834 = (1 - varclient_2834);
            break;
        }
        case 37642: {
            switch (int2) {
                case 1: {
                    CHAT_GETFILTER_PUBLIC();
                    CHAT_GETFILTER_TRADE(stack(), MODULO((CHAT_GETFILTER_PRIVATE() + 1), 3));
                    CHAT_SETFILTER();
                    break;
                }
                case 2: {
                    CHAT_GETFILTER_PUBLIC();
                    CHAT_GETFILTER_TRADE(stack(), 0);
                    CHAT_SETFILTER();
                    break;
                }
                case 3: {
                    CHAT_GETFILTER_PUBLIC();
                    CHAT_GETFILTER_TRADE(stack(), 1);
                    CHAT_SETFILTER();
                    break;
                }
                case 4: {
                    CHAT_GETFILTER_PUBLIC();
                    CHAT_GETFILTER_TRADE(stack(), 2);
                    CHAT_SETFILTER();
                    break;
                }
            };
            break;
        }
        case 37653: {
            varclient_4505 = (1 - varclient_4505);
            script4539(25);
            script1558(25, 0);
            break;
        }
        case 37655: {
            script12429(int0);
            break;
        }
        case 37910: {
            varbitplayer_36975 = (1 - varbitplayer_36975);
            break;
        }
        case 41813: {
            script5741(MODULO((script3873() + 1), ENUM_GETOUTPUTCOUNT(1649 as cs2enum)));
            break;
        }
        case 37911: {
            script7544(int0, 12987 as cs2enum);
            break;
        }
    };
    script8808();
    script84(int0);
    script10492();
    if ((struct_getparam(int1, 6725) == true)) {
        script2256(comp(1477, 787));
    } else if (((int4 == 1) && (int1 != 37911 as struct))) {
        script7544(int0, int3);
    };
    return;
}