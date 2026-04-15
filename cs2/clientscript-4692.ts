//
function script4692(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 36110338: {
            int2 = 1;
            break;
        }
        case 36110346: {
            int2 = 2;
            break;
        }
        case 36110354: {
            int2 = 3;
            break;
        }
        case 36110362: {
            int2 = 4;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = enum_getvalue(0, 36, 3855 as cs2enum, int2);
    string0 = `${string0}<br>${enum_getvalue(0, 36, 14134 as cs2enum, int2)}`;
    string0 = `${string0}<br>Cost: ${inttostring(enum_getvalue(0, 0, 3856 as cs2enum, int2), 10)}`;
    int1 = enum_getvalue(0, 0, 3857 as cs2enum, int2);
    if ((int1 == 50)) {
        string0 = `${string0}<br>Cooldown: 30 sec`;
    } else {
        string0 = `${string0}<br>Cooldown: 1 min`;
    };
    script8800(string0, int0, -1);
    return;
}