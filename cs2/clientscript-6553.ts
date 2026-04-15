//
function script6553(int0: struct, int1: int, int2: int, int3: unknown_int, int4: struct, int5: component, int6: component, string0: string, string1: string): int {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var string2 = "null";
    var string3 = "";
    var string4 = "null";
    var int11 = 0;
    switch (int3) {
        case 1: {
            int7 = struct_getparam(int0, 5818);
            if ((struct_getparam(int0, 9118) == true)) {
                string2 = script16583(int0, int3);
            } else {
                string2 = struct_getparam(int0, 2795);
            };
            int11 = struct_getparam(int0, 3825);
            break;
        }
        case 2: {
            int8 = struct_getparam(int0, 5818);
            int7 = struct_getparam(int0, 5819);
            if ((struct_getparam(int0, 9118) == true)) {
                string2 = script16583(int0, int3);
            } else {
                string2 = struct_getparam(int0, 5814);
            };
            int11 = struct_getparam(int0, 3826);
            break;
        }
        case 3: {
            int8 = struct_getparam(int0, 5819);
            int7 = struct_getparam(int0, 5820);
            if ((struct_getparam(int0, 9118) == true)) {
                string2 = script16583(int0, int3);
            } else {
                string2 = struct_getparam(int0, 5815);
            };
            int11 = struct_getparam(int0, 3827);
            break;
        }
        case 4: {
            int8 = struct_getparam(int0, 5820);
            int7 = struct_getparam(int0, 5821);
            if ((struct_getparam(int0, 9118) == true)) {
                string2 = script16583(int0, int3);
            } else {
                string2 = struct_getparam(int0, 5816);
            };
            int11 = struct_getparam(int0, 3828);
            break;
        }
        case 5: {
            int8 = struct_getparam(int0, 5821);
            int7 = struct_getparam(int0, 5822);
            if ((struct_getparam(int0, 9118) == true)) {
                string2 = script16583(int0, int3);
            } else {
                string2 = struct_getparam(int0, 5817);
            };
            int11 = struct_getparam(int0, 3829);
            break;
        }
    };
    if ((int11 == 1)) {
        string2 = `${script8240(int0, -1 as obj)}${string2}`;
    };
    if ((int7 > 0)) {
        if ((int7 < int8)) {
            script12478(`Set effect ${inttostring(int7, 10)} is lower then set effect ${inttostring(int8, 10)}`);
        };
        if ((int8 == 0)) {
            var int2 = script13258(1, struct_getparam(int4, 4205), int5, int6, int2);
        };
        if ((int1 >= int7)) {
            string4 = string0;
        } else {
            string4 = string1;
        };
        [int9, int10] = script9279(int0);
        if ((int10 == 1)) {
            int7 = (int7 + 1);
            string3 = struct_getparam(int0, 4798);
            if ((int9 == 0)) {
                string4 = string1;
            };
        };
        int2 = script7235(`Set Bonus (${inttostring(int7, 10)}) ${string3}: ${string2}`, string4, int4, int5, int6, int2);
    };
    return int2;
}