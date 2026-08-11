//
function script6709(int0: number, int1: number): void {
    stack(208896);
    stack(int1);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    var string0 = "";
    var int3 = script6061(int1);
    var int4 = DB_GETFIELDCOUNT(int2, 209056);
    var int5 = -1;
    int5 = (int5 + 1);
    while ((int5 < 3)) {
        if ((int5 < int4)) {
            string0 = dbrow_getfield(int2, 209056, int5);
            switch (int5) {
                case 0: {
                    IF_SETTEXT(string0, comp(176, 21));  // dino_base_camp:perk_1_text
                    IF_SETHIDE(false, comp(176, 16));  // dino_base_camp:perk_1
                    if ((int3 >= 1)) {
                        script13990(11534355, -1, 28547);
                    } else {
                        script13991(11534355, -1, 28547, 1);
                    };
                    break;
                }
                case 1: {
                    IF_SETTEXT(string0, comp(176, 49));  // dino_base_camp:perk_2_text
                    IF_SETHIDE(false, comp(176, 17));  // dino_base_camp:perk_2
                    if ((int3 >= 2)) {
                        script13990(11534383, -1, 28547);
                    } else {
                        script13991(11534383, -1, 28547, 1);
                    };
                    break;
                }
                case 2: {
                    IF_SETTEXT(string0, comp(176, 52));  // dino_base_camp:perk_3_text
                    IF_SETHIDE(false, comp(176, 18));  // dino_base_camp:perk_3
                    if ((int3 >= 3)) {
                        script13990(11534386, -1, 28547);
                    } else {
                        script13991(11534386, -1, 28547, 1);
                    };
                    break;
                }
            };
        } else {
            switch (int5) {
                case 0: {
                    IF_SETHIDE(true, comp(176, 16));  // dino_base_camp:perk_1
                    break;
                }
                case 1: {
                    IF_SETHIDE(true, comp(176, 17));  // dino_base_camp:perk_2
                    break;
                }
                case 2: {
                    IF_SETHIDE(true, comp(176, 18));  // dino_base_camp:perk_3
                    break;
                }
            };
        };
    };
    return;
}