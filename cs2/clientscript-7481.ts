//
function script7481(int0: number, int1: number, int2: number): number {
    var string0 = "";
    var string1 = "";
    var int3 = -1;
    var string2 = "";
    if ((struct_getparam(int1, 2913) == 1)) {
        switch (int1) {
            case 14767: {
                if ((script7483() == 1)) {
                    string0 = "<col=00ff00>";
                } else {
                    string0 = "<col=ff0000>";
                };
                string1 = `${string0}Staff</col>`;
                int3 = 4170;
                string2 = OC_NAME(int3);
                break;
            }
            case 14880: {
                switch (INV_GETOBJ(94, 3)) {
                    case 22494:
                    case 22496:
                    case 22497:
                    case 36639: {
                        string0 = "<col=00ff00>";
                        break;
                    }
                    default: {
                        string0 = "<col=ff0000>";
                        break;
                    }
                };
                string1 = `${string0}Staff</col>`;
                int3 = 22494;
                string2 = OC_NAME(int3);
                break;
            }
            case 14783:
            case 14775:
            case 14771:
            case 14780: {
                if ((INV_TOTAL(93, 567) < 1)) {
                    string0 = "<col=ff0000>";
                } else {
                    string0 = "<col=00ff00>";
                };
                string1 = `${string0}Orb</col>`;
                int3 = 567;
                string2 = OC_NAME(int3);
                break;
            }
            case 14781: {
                if ((INV_TOTAL(93, 1963) < 1)) {
                    string0 = "<col=ff0000>";
                } else {
                    string0 = "<col=00ff00>";
                };
                string1 = `${string0}Banana</col>`;
                int3 = 1963;
                string2 = OC_NAME(int3);
                break;
            }
            case 14859: {
                string1 = "<col=00ff00>Coins</col>";
                int3 = 1001;
                string2 = "100 Coins";
                break;
            }
            case 32942:
            case 32943: {
                if ((script12052(1) == 0)) {
                    string0 = "<col=ff0000>";
                } else {
                    string0 = "<col=00ff00>";
                };
                string1 = `${string0}Tool</col>`;
                int3 = 36367;
                string2 = OC_NAME(int3);
                break;
            }
            case 14776:
            case 14747: {
                if ((script10242() == 1)) {
                    string0 = "<col=00ff00>";
                } else {
                    string0 = "<col=ff0000>";
                };
                string1 = `${string0}Bones</col>`;
                int3 = 526;
                string2 = "Bones, burnt bones, bat bones, wolf bones, monkey bones or big bones";
                break;
            }
            case 11748: {
                if ((OC_CATEGORY(INV_GETOBJ(94, 2)) != 4700)) {
                    string0 = "<col=ff0000>";
                } else {
                    string0 = "<col=00ff00>";
                };
                string1 = `${string0}Amulet</col>`;
                int3 = 50465;
                string2 = OC_NAME(int3);
                break;
            }
            case 45801:
            case 45802: {
                if (((OC_CATEGORY(INV_GETOBJ(94, 13)) != 5087) || (item_getparam(INV_GETOBJ(94, 13), 8605) < 2))) {
                    string0 = "<col=ff0000>";
                } else {
                    string0 = "<col=00ff00>";
                };
                string1 = `${string0}Quiver</col>`;
                int3 = 33719;
                string2 = "A quiver that can hold multiple types of ammo.";
                break;
            }
        };
        return script7482(string1, -1 as graphic, int3, string2, script7484(int0, int2));
    };
    switch (int1) {
        case 48299: {
            if ((varplayer_11035 >= 1)) {
                string0 = "<col=00ff00>";
            } else {
                string0 = "<col=ff0000>";
            };
            string1 = `${string0}${inttostring(1, 10)}</col>`;
            return script7482(string1, struct_getparam(48334, 2802), -1, `Requires ${struct_getparam(48334, 2794)} stacks.`, script7484(int0, int2));
        }
        case 48301: {
            if ((varplayer_11035 >= 2)) {
                string0 = "<col=00ff00>";
            } else {
                string0 = "<col=ff0000>";
            };
            string1 = `${string0}${inttostring(2, 10)}+</col>`;
            return script7482(string1, struct_getparam(48334, 2802), -1, `Requires ${struct_getparam(48334, 2794)} stacks.`, script7484(int0, int2));
        }
    };
    return int0;
}