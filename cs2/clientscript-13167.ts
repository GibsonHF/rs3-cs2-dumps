//
function script13167(int0: int): [struct, string, string] {
    var int1 = -1;
    var int2 = 26419 as struct;
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 0: {
            int2 = enum_getvalue(0, 73, 12225 as cs2enum, 20);
            string0 = "Full Outfits";
            break;
        }
        case 1: {
            int2 = enum_getvalue(0, 73, 12225 as cs2enum, 19);
            string0 = enum_getvalue(0, 36, 5971 as cs2enum, 19);
            break;
        }
        case 2: {
            int2 = enum_getvalue(0, 73, 12225 as cs2enum, varbitclient_35135);
            string0 = enum_getvalue(0, 36, 5971 as cs2enum, varbitclient_35135);
            string0 = `Filter by slot (${string0})`;
            break;
        }
        case 3: {
            int2 = 35550 as struct;
            string0 = "Advanced Filter";
            break;
        }
        case 4: {
            int2 = 35551 as struct;
            string0 = "Filter by availability or source";
            string1 = "This filter is not available for the Keepsake Box";
            break;
        }
        case 5: {
            int2 = 35552 as struct;
            string0 = "List View";
            break;
        }
        case 6: {
            int2 = 35553 as struct;
            string0 = "Grid View";
            break;
        }
    };
    return [int2, string0, string1];
}