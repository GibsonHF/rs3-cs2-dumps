//
function script4478(int0: int, int1: unknown_int): [string, string] {
    var string0 = "";
    switch (int0) {
        case 0: {
            string0 = "Aagi";
            if ((int1 == 1)) {
                string0 = `${string0}<br>This memory still needs recovering (70 Divination).`;
            };
            break;
        }
        case 1: {
            string0 = "Seren";
            if ((int1 == 1)) {
                string0 = `${string0}<br>This memory still needs recovering (80 Divination).`;
            };
            break;
        }
        case 2: {
            string0 = "Juna";
            if ((int1 == 1)) {
                string0 = `${string0}<br>This memory still needs recovering (85 Divination).`;
            };
            break;
        }
        case 3: {
            string0 = "Sword of Edicts";
            if ((int1 == 1)) {
                string0 = `${string0}<br>This memory still needs recovering (90 Divination).`;
            };
            break;
        }
        case 4: {
            string0 = "Cres";
            if ((int1 == 1)) {
                string0 = `${string0}<br>This memory still needs recovering (95 Divination).`;
            };
            break;
        }
    };
    return [enum_getvalue(0, 36, 13915 as cs2enum, (8 + int0)), string0];
}