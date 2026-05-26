//
function script11100(int0: number): void {
    var int1 = comp(-1, 65535);
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 104595476: {
            int1 = comp(1596, 19);
            if ((script2156(63) == 0)) {
                string0 = "You must complete Shield of Arrav to start this quest.";
                int2 = 1;
            } else if ((script2156(373) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Dimension of Disaster: Shield of Arrav<br>(Completed)", comp(1596, 21));
            };
            break;
        }
        case 104595484: {
            int1 = comp(1596, 27);
            if ((script2156(51) == 0)) {
                string0 = "You must complete Demon Slayer to start this quest.";
                int2 = 1;
            } else if ((script2156(374) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Dimension of Disaster: Demon Slayer<br>(Completed)", comp(1596, 29));
            };
            break;
        }
        case 104595492: {
            int1 = comp(1596, 35);
            if ((script2156(56) == 0)) {
                string0 = "You must complete Defender of Varrock to start this quest.";
                int2 = 1;
            } else if ((script2156(375) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Dimension of Disaster: Defender of Varrock<br>(Completed)", comp(1596, 37));
            };
            break;
        }
        case 104595468: {
            int1 = comp(1596, 11);
            if ((((script2156(373) == 0) || (script2156(374) == 0)) || (script2156(375) == 0))) {
                string0 = "You must complete the other 3 quests in New Varrock to start this quest.";
                int2 = 1;
            } else if ((script2156(117) == 0)) {
                string0 = "You must complete Curse of Arrav to start this quest.";
                int2 = 1;
            } else if ((script2156(376) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Dimension of Disaster: Curse of Arrav<br>(Completed)", comp(1596, 13));
            };
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, int1);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int1);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    return;
}