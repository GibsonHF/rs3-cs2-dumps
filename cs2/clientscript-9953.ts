//
function script9953(int0: int, int1: int): unknown_int {
    if (((varbitplayer_27168 == 1) && (int0 == 5))) {
        script8210("Action unavailable in Classic Combat Mode.", -1, -1);
        return 0;
    };
    if ((((varbitplayer_27169 == 1) && (int0 == 21)) && (enum_getreversecount(0, 9011 as cs2enum, int1) > 0))) {
        script8210("Action unavailable in Classic Interface Mode.", -1, -1);
        return 0;
    };
    return 1;
}