//
function script20473(int0: number): number {
    switch (int0) {
        case 1: {
            return script20848();
        }
        case 10: {
            if ((script15113() > 9020)) {
                return 0;
            };
            break;
        }
        case 9: {
            if (((PLATFORMTYPE() == 3) || (PLATFORMTYPE() == 2))) {
                return 0;
            };
            if ((script4148() == 1)) {
                return 0;
            };
            if ((MAP_MEMBERS() == 0)) {
                return 0;
            };
            break;
        }
    };
    return 1;
}