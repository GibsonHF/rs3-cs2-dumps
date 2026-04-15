//
function script12051(int0: dbrow, int1: int): string {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = dbrow_getfield(int0, 20688, int1);
    switch (int2) {
        case 1: {
            return "Dwarven";
        }
        case 2: {
            return "Goblin";
        }
    };
    return "";
}