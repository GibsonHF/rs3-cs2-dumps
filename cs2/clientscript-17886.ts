//
function script17886(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): string {
    var int6 = varplayer_11339;
    var string0 = "Extra Reward";
    switch (int4) {
        case 0: {
            if (((int0 != -1 as obj) && (int3 > 0))) {
                if ((int3 == 1)) {
                    string0 = OC_NAME(int0);
                } else {
                    string0 = `${TOSTRING_LOCALISED(int3, 1)} x ${OC_NAME(int0)}`;
                };
            };
            break;
        }
        case 1: {
            if ((int1 == -1)) {
                return string0;
            };
            switch (struct_getparam(int1, 2531)) {
                case 2:
                case 5:
                case 4: {
                    string0 = script17935(int1);
                    break;
                }
                case 3: {
                    string0 = `'${script17935(int1)}' title`;
                    break;
                }
                default: {
                    script12478("Unsupported mtxmgt reward");
                    break;
                }
            };
            break;
        }
        case 3: {
            string0 = `${TOSTRING_LOCALISED(int3, 1)} x ${script4583(int3, script17930(int6), script17929(int6))}`;
            break;
        }
        case 4: {
            if ((int2 == -1)) {
                return string0;
            };
            string0 = `${inttostring(int3, 10)} x ${script17915(int2)} ${script4583(int3, "charge", "charges")}`;
            break;
        }
        case 5: {
            if ((int2 == -1)) {
                return string0;
            };
            string0 = `+${inttostring(int3, 10)}% ${script17915(int2)}`;
            break;
        }
        case 6: {
            string0 = "Progress Booster";
            break;
        }
        default: {
            script12478("No name specified for data.");
            break;
        }
    };
    return string0;
}