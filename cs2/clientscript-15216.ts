//
function script15216(int0: int, int1: int, int2: int, int3: int): void {
    switch (MAP_LANG()) {
        case 1: {
            var int0 = int1;
            break;
        }
        case 2: {
            int0 = int2;
            break;
        }
        case 3: {
            int0 = int3;
            break;
        }
    };
    OPENURL("news", `newsitems.ws?id=${inttostring(int0, 10)}`, 1);
    return;
}