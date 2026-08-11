//
function script15386(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = comp(-1, 65535);
    while ((int2 < 9)) {
        switch (int1) {
            case 1: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 26);  // tut6_controls:page1_slot1_click
                        int3 = comp(579, 23);  // tut6_controls:page1_slot1_window_background
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 24);  // tut6_controls:page1_slot1_window_content
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 25);  // tut6_controls:page1_slot1_window_border
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 30);  // tut6_controls:page1_slot2_click
                        int3 = comp(579, 27);  // tut6_controls:page1_slot2_window_background
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 28);  // tut6_controls:page1_slot2_window_content
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 29);  // tut6_controls:page1_slot2_window_border
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 34);  // tut6_controls:page1_slot3_click
                        int3 = comp(579, 31);  // tut6_controls:page1_slot3_window_background
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 32);  // tut6_controls:page1_slot3_window_content
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 33);  // tut6_controls:page1_slot3_window_border
                        break;
                    }
                };
                break;
            }
            case 2: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 14);  // tut6_controls:page2_slot1_click
                        int3 = comp(579, 11);  // tut6_controls:page2_slot1_window_background
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 12);  // tut6_controls:page2_slot1_window_content
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 13);  // tut6_controls:page2_slot1_window_border
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 18);  // tut6_controls:page2_slot2_click
                        int3 = comp(579, 15);  // tut6_controls:page2_slot2_window_background
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 16);  // tut6_controls:page2_slot2_window_content
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 17);  // tut6_controls:page2_slot2_window_border
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 22);  // tut6_controls:page2_slot3_click
                        int3 = comp(579, 19);  // tut6_controls:page2_slot3_window_background
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 20);  // tut6_controls:page2_slot3_window_content
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 21);  // tut6_controls:page2_slot3_window_border
                        break;
                    }
                };
                break;
            }
            case 3: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 39);  // tut6_controls:page3_slot1_click
                        int3 = comp(579, 36);  // tut6_controls:page3_slot1_window_background
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 37);  // tut6_controls:page3_slot1_window_content
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 38);  // tut6_controls:page3_slot1_window_border
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 44);  // tut6_controls:page3_slot2_click
                        int3 = comp(579, 41);  // tut6_controls:page3_slot2_window_background
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 42);  // tut6_controls:page3_slot2_window_content
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 43);  // tut6_controls:page3_slot2_window_border
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 49);  // tut6_controls:page3_slot3_click
                        int3 = comp(579, 46);  // tut6_controls:page3_slot3_window_background
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 47);  // tut6_controls:page3_slot3_window_content
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 48);  // tut6_controls:page3_slot3_window_border
                        break;
                    }
                };
                break;
            }
            default: {
                script12478(`Unhandled $page : ${inttostring(int1, 10)}`);
                return;
            }
        };
        int4 = (IF_GETNEXTSUBID(int3) - 1);
        while ((int4 >= 0)) {
            if ((CC_FIND(int3, int4) == 1)) {
                switch (int0) {
                    case 0: {
                        CC_SETTRANS(255);
                        CC_SETONTIMER(callback());
                        if ((int5 != comp(-1, 65535))) {
                            IF_SETHIDE(true, int5);
                        };
                        break;
                    }
                    case 1: {
                        script7360(50, int5);
                        break;
                    }
                    case 2: {
                        script13322(50, int5);
                        break;
                    }
                    default: {
                        script12478(`Unhandled $fade_type : ${inttostring(int0, 10)}`);
                        return;
                    }
                };
            };
            int4 = (int4 - 1);
        };
        int2 = (int2 + 1);
    };
    return;
}