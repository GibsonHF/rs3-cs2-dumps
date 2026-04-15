//
function script4672(int0: int): void {
    var int1 = -1 as npc;
    switch (int0) {
        case 1: {
            int1 = 7820 as npc;
            break;
        }
        case 2: {
            int1 = 9051 as npc;
            IF_SETMODELANIM(9804 as seq, comp(102, 31));
            IF_SETMODELZOOM(2500, comp(102, 31));
            break;
        }
        case 4:
        case 6: {
            int1 = 4897 as npc;
            break;
        }
        case 3: {
            int1 = 15373 as npc;
            IF_SETMODELANIM(9804 as seq, comp(102, 31));
            break;
        }
    };
    IF_SETNPCHEAD(int1, comp(102, 31));
    return;
}