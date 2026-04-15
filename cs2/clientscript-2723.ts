//
function script2723(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = STAT_BASE(25 as stat);
    var int4 = 0;
    var int5 = 10;
    var string0 = "";
    switch (int0) {
        case 6029324: {
            [int4, int5] = [0, 10];
            break;
        }
        case 6029325: {
            [int4, int5] = [10, 20];
            break;
        }
        case 6029326: {
            [int4, int5] = [20, 30];
            break;
        }
        case 6029327: {
            [int4, int5] = [30, 40];
            break;
        }
        case 6029328: {
            [int4, int5] = [40, 50];
            break;
        }
        case 6029329: {
            [int4, int5] = [50, 60];
            break;
        }
        case 6029330: {
            [int4, int5] = [60, 70];
            break;
        }
        case 6029331: {
            [int4, int5] = [70, 80];
            break;
        }
        case 6029332: {
            [int4, int5] = [80, 85];
            break;
        }
        case 6029333: {
            [int4, int5] = [85, 90];
            break;
        }
        case 6029334: {
            [int4, int5] = [90, 95];
            break;
        }
        case 6029335: {
            [int4, int5] = [95, -1];
            break;
        }
    };
    if ((int3 < int4)) {
        string0 = `This colony requires level ${TOSTRING_LOCALISED(int4, 1)} Divination.`;
    } else if (((int5 > 0) && (int3 >= int5))) {
        string0 = "You can use this colony, but a higher-level colony would be more beneficial.";
    } else {
        string0 = "This is the ideal colony for your Divination level.";
    };
    script8800(string0, int0, -1);
    return;
}