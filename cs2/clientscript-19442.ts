//
function script19442(int0: graphic, int1: struct, int2: dbrow, int3: int, int4: int, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, string0: string): void {
    script19444(int5, int6, int7, int8, int9, int10);
    if ((int2 != -1 as dbrow)) {
        var string0 = script18200(int2);
        switch (int2) {
            case 14132: {
                script19447(31415 as npc, 31416 as npc, int5, int6, int7);
                break;
            }
            case 14426: {
                script19447(31417 as npc, 31418 as npc, int5, int6, int7);
                break;
            }
            case 14432: {
                script19447(31419 as npc, 31420 as npc, int5, int6, int7);
                break;
            }
            case 14438: {
                script19447(31421 as npc, 31422 as npc, int5, int6, int7);
                break;
            }
            case 14444: {
                script19447(31423 as npc, 31424 as npc, int5, int6, int7);
                break;
            }
            case 14450: {
                script19447(31425 as npc, 31426 as npc, int5, int6, int7);
                break;
            }
            case 14456: {
                script19447(31427 as npc, 31428 as npc, int5, int6, int7);
                break;
            }
            case 14462: {
                script19447(31429 as npc, 31430 as npc, int5, int6, int7);
                break;
            }
        };
    } else if ((int1 != -1 as struct)) {
        string0 = struct_getparam(int1, 2533);
        switch (struct_getparam(int1, 2531)) {
            case 4: {
                switch (int1) {
                    case 50630: {
                        script19446(31415 as npc, 31416 as npc, 50632 as struct, 50633 as struct, 50634 as struct, int5, int6, int7);
                        break;
                    }
                    case 50631: {
                        script19446(31419 as npc, 31420 as npc, 50635 as struct, 50636 as struct, 50637 as struct, int5, int6, int7);
                        break;
                    }
                };
                break;
            }
            case 3: {
                script19448(8680 as graphic, 128, 128, int8, int9, int10);
                break;
            }
        };
    } else if ((int0 != -1 as graphic)) {
        script19448(int0, int3, int4, int8, int9, int10);
    } else {
        script19448(34546 as graphic, 200, 200, int8, int9, int10);
    };
    IF_SETTEXT(string0, comp(1302, 96));
    return;
}