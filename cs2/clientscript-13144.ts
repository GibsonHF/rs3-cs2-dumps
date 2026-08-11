//
function script13144(int0: number): void {
    if ((TESTBIT(varclient_841, int0) == 0)) {
        return;
    };
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1306, 6);  // poh_furniture_create:item1
            break;
        }
        case 2: {
            int1 = comp(1306, 13);  // poh_furniture_create:item2
            break;
        }
        case 3: {
            int1 = comp(1306, 20);  // poh_furniture_create:item3
            break;
        }
        case 4: {
            int1 = comp(1306, 27);  // poh_furniture_create:item4
            break;
        }
        case 5: {
            int1 = comp(1306, 34);  // poh_furniture_create:item5
            break;
        }
        case 6: {
            int1 = comp(1306, 41);  // poh_furniture_create:item6
            break;
        }
        case 7: {
            int1 = comp(1306, 48);  // poh_furniture_create:item7
            break;
        }
        default: {
            return;
        }
    };
    if ((CC_FIND(int1, 4) == 1)) {
        CC_RESUME_PAUSEBUTTON();
    };
    return;
}