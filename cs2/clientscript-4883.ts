//
function script4883(int0: component, int1: unknown_int, string0: string): void {
    var int2 = script4964(int0);
    var int3 = script4971(int2);
    var int4 = IF_GETPARENTLAYER(int0);
    var int5 = IF_GETPARENTLAYER(int4);
    var int6 = script5216(int2);
    if ((int6 == comp(-1, 65535))) {
        int6 = int0;
    };
    var string1 = "";
    var int7 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        switch (int0) {
            case 82444350: {
                var int1 = 1;
                var string0 = "Build a new party room chair customisation.";
                if ((varbitclan_6885 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444355: {
                int1 = 1;
                string0 = "Build a new party room table customisation.";
                if ((varbitclan_6893 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444390: {
                int1 = 1;
                string0 = "Build a new flag customisation.";
                if ((varbitclan_6909 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444345: {
                int1 = 1;
                string0 = "Build a new potted plant customisation.";
                if ((varbitclan_6869 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444380: {
                int1 = 1;
                string0 = "Build a new sundial customisation.";
                if ((varbitclan_6901 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444365: {
                int1 = 1;
                string0 = "Build a new keep flag customisation.";
                if ((varbitclan_6877 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444375: {
                int1 = 1;
                string0 = "Build a new keep tapestry customisation.";
                if ((varbitclan_6925 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444360: {
                int1 = 1;
                string0 = "Build a new keep banner customisation.";
                if ((varbitclan_6933 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444385: {
                int1 = 1;
                string0 = "Build a new keep shield customisation.";
                if ((varbitclan_6941 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444340: {
                int1 = 1;
                string0 = "Build a new keep fireplace customisation.";
                if ((varbitclan_6917 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444395: {
                int1 = 1;
                string0 = "Build a new keep lower window customisation.";
                if ((varbitclan_6949 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444400: {
                int1 = 1;
                string0 = "Build a new keep upper window customisation.";
                if ((varbitclan_6957 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444370: {
                int1 = 1;
                string0 = "Build a new keep door customisation.";
                if ((varbitclan_6965 > 0)) {
                    int7 = 1;
                };
                break;
            }
            case 82444335: {
                int1 = 1;
                string0 = "Build a new keep wall pattern customisation.";
                if ((varbitclan_6973 > 0)) {
                    int7 = 1;
                };
                break;
            }
            default: {
                string0 = `Build over: ${script4914(int3)}`;
                break;
            }
        };
        if ((int7 == 1)) {
            string0 = `Build over ${script4914(int3)}`;
        };
        if ((IF_GETX(int4) < ((IF_GETWIDTH(int5) / 2) - 30))) {
            int1 = 1;
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int6);
    return;
}