//[clientscript,lobbyscreen_input_keyboard]
function script3022(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    switch (int0) {
        case 84: {
            script3020(int4, string0);
            break;
        }
        case 13: {
            script3017();
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if (((int4 != -1) && (int4 != 6))) {
                varclient_1097 = script1553(int0, varclient_1097, varclient_2478);
                script1875(52953098, 52953099, varclient_2478);
            };
            break;
        }
        default: {
            if (((int4 != -1) && (int4 != 6))) {
                if ((((CHAR_ISPRINTABLE(int1) == 1) || (int0 == 85)) || (int0 == 101))) {
                    [varclient_2478, varclient_1097] = script802(varclient_1097, varclient_2478, int3, int0, int1);
                    IF_SETTEXT(ESCAPE(varclient_2478), int2);
                    script1875(52953098, 52953099, varclient_2478);
                };
            };
            break;
        }
    };
    return;
}