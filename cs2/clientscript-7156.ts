//
function script7156(int0: int): coordgrid {
    switch (int0) {
        case 0:
        case 1: {
            return pos(0,45,55,12,25);
        }
        case 47: {
            return pos(0,50,50,4,22);
        }
        case 2: {
            return pos(0,54,54,52,60);
        }
        case 9: {
            if ((script13702(enum_getreverseindex(22, 0, 9962 as cs2enum, 54037958, 28)) == 0)) {
                return pos(0,50,52,56,49);
            };
            return pos(0,51,55,8,6);
        }
        case 3: {
            return pos(0,47,54,44,50);
        }
        case 4: {
            return pos(0,50,50,4,22);
        }
        case 45: {
            if ((script13702(enum_getreverseindex(22, 0, 9962 as cs2enum, 52693661, 0)) == 0)) {
                return pos(0,51,49,4,49);
            };
            return pos(0,50,42,0,29);
        }
        case 5: {
            return pos(0,43,49,36,12);
        }
        case 6: {
            return pos(0,41,52,40,21);
        }
        case 7: {
            return pos(1,34,52,0,33);
        }
        case 8: {
            return pos(0,84,36,28,35);
        }
    };
    return -1 as coordgrid;
}