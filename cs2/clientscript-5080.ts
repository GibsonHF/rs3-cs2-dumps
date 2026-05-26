//
function script5080(int0: number): void {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(3921);
    var int3 = -1 as cs2enum;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, 3921 as cs2enum, int1);
        if (((int3 != -1 as cs2enum) && (CC_FIND(int0, ((int1 * 10) + 9)) == 1))) {
            CC_SETTEXT(enum_getvalue(0, 36, int3, script5089(int3)));
        };
        int1 = (int1 + 1);
    };
    switch (varbitplayer_7078) {
        case 1: {
            if ((varclient_1095 == true)) {
                IF_SETTEXT("Press 'Confirm' when you've made your choices.", 73007112);
            } else {
                IF_SETTEXT("Waiting for the battle's initiator to choose the rules...", 73007112);
            };
            break;
        }
        case 2: {
            if ((varclient_1095 == true)) {
                IF_SETTEXT("Press 'Confirm' when you've made your choices.", 73007112);
            } else {
                IF_SETTEXT(`Waiting for ${varclient_2537} to choose the rules...`, 73007112);
            };
            break;
        }
        case 3: {
            IF_SETTEXT("Loading elements...", 73007112);
            break;
        }
        case 4: {
            IF_SETTEXT("Building elements...", 73007112);
            break;
        }
        case 5: {
            IF_SETTEXT("Failed to build battlefield.", 73007112);
            break;
        }
        case 6: {
            IF_SETTEXT("Initialising build mode.", 73007112);
            break;
        }
        default: {
            IF_SETTEXT("Loading...", 73007112);
            break;
        }
    };
    script5085(int0);
    return;
}