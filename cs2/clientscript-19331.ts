//
function script19331(int0: int, int1: int): int {
    if ((TESTBIT(script19411(), int0) == 0)) {
        return 0;
    };
    switch (int1) {
        case 0: {
            switch (int0) {
                case 0: {
                    return varbitclansettings_56526;
                }
                case 1: {
                    return varbitclansettings_56527;
                }
                case 2: {
                    return varbitclansettings_56528;
                }
                case 3: {
                    return varbitclansettings_56529;
                }
                case 4: {
                    return varbitclansettings_56530;
                }
            };
            script12478(`Unrecognised player slot: ${inttostring(int0, 10)} for $var_id ${inttostring(int1, 10)}`);
            break;
        }
        case 1: {
            switch (int0) {
                case 0: {
                    return varbitclansettings_56543;
                }
                case 1: {
                    return varbitclansettings_56544;
                }
                case 2: {
                    return varbitclansettings_56545;
                }
                case 3: {
                    return varbitclansettings_56546;
                }
                case 4: {
                    return varbitclansettings_56547;
                }
            };
            script12478(`Unrecognised player slot: ${inttostring(int0, 10)} for $var_id ${inttostring(int1, 10)}`);
            break;
        }
        default: {
            script12478(`Unrecognised base: ${inttostring(int1, 10)}`);
            break;
        }
    };
    return 0;
}