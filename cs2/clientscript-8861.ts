//
function script8861(int0: number, int1: number): void {
    var int2 = script10405(int0);
    var int3 = script10405(int1);
    if (((int2 == -1) || (int3 == -1))) {
        return;
    };
    var string0 = struct_getparam(int3, 3493);
    switch (int1) {
        case 5: {
            string0 = "Ability Book";
            break;
        }
        case 32: {
            if ((varplayer_12314 > 0)) {
                string0 = script20128();
            };
            break;
        }
    };
    stack(int0);
    stack(string0);
    stack(int3);
    script21109();
    script7040();
    script8863(int0, string0, 0);
    return;
}