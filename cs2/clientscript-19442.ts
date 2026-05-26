//
function script19442(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string): void {
    script19444(int5, int6, int7, int8, int9, int10);
    if ((int2 != -1)) {
        var string0 = script18200(int2);
        switch (int2) {
            case 14132: {
                script19447(31415, 31416, int5, int6, int7);
                break;
            }
            case 14426: {
                script19447(31417, 31418, int5, int6, int7);
                break;
            }
            case 14432: {
                script19447(31419, 31420, int5, int6, int7);
                break;
            }
            case 14438: {
                script19447(31421, 31422, int5, int6, int7);
                break;
            }
            case 14444: {
                script19447(31423, 31424, int5, int6, int7);
                break;
            }
            case 14450: {
                script19447(31425, 31426, int5, int6, int7);
                break;
            }
            case 14456: {
                script19447(31427, 31428, int5, int6, int7);
                break;
            }
            case 14462: {
                script19447(31429, 31430, int5, int6, int7);
                break;
            }
        };
    } else if ((int1 != -1)) {
        string0 = struct_getparam(int1, 2533);
        switch (struct_getparam(int1, 2531)) {
            case 4: {
                switch (int1) {
                    case 50630: {
                        script19446(31415, 31416, 50632, 50633, 50634, int5, int6, int7);
                        break;
                    }
                    case 50631: {
                        script19446(31419, 31420, 50635, 50636, 50637, int5, int6, int7);
                        break;
                    }
                };
                break;
            }
            case 3: {
                script19448(8680, 128, 128, int8, int9, int10);
                break;
            }
        };
    } else if ((int0 != -1)) {
        script19448(int0, int3, int4, int8, int9, int10);
    } else {
        script19448(34546, 200, 200, int8, int9, int10);
    };
    IF_SETTEXT(string0, 85327968);
    return;
}