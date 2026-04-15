//
function script14328(int0: component, int1: int): void {
    var string0 = `P${inttostring(int1, 10)}: Shared XP is OFF`;
    switch (int1) {
        case 1: {
            if ((varclient_1175 == 0)) {
                string0 = "P1: Shared XP is ON";
            };
            break;
        }
        case 2: {
            if ((varclient_1176 == 0)) {
                string0 = "P2: Shared XP is ON";
            };
            break;
        }
        case 3: {
            if ((varclient_1177 == 0)) {
                string0 = "P3: Shared XP is ON";
            };
            break;
        }
        case 4: {
            if ((varclient_1178 == 0)) {
                string0 = "P4: Shared XP is ON";
            };
            break;
        }
        case 5: {
            if ((varclient_1179 == 0)) {
                string0 = "P5: Shared XP is ON";
            };
            break;
        }
    };
    script8800(string0, int0, -1);
    return;
}