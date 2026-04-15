//
function script4908(int0: int): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = script4950(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = comp(-1, 65535);
    var int12 = -1 as struct;
    var int13 = -1 as graphic;
    var int14 = 1;
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varclient_1794 == 0)) {
            int12 = script5116(varbitclan_6524, varbitclan_6507);
        } else {
            int12 = script5116(varbitclan_6661, varbitclan_6507);
        };
        if ((int12 == -1 as struct)) {
            return;
        };
        if (((int6 == 6) || (int6 == 5))) {
            int5 = script4971(int0);
            int13 = script5171(int5);
        } else {
            int13 = script4973(int0);
        };
        int4 = script4949(int0);
        int7 = script4961(int0, 1);
        int8 = script4953(int7);
        if ((int8 > 0)) {
            int13 = script5171(int5);
        };
        int9 = script4961(int0, 3);
        int10 = script4953(int9);
        if (((((int6 == 6) || (int6 == 6)) || (int6 == 5)) && (((varbitclan_6690 == int5) || (varbitclan_6699 == int5)) || (varbitclan_6708 == int5)))) {
            int13 = script5171(int5);
        };
        if ((int10 > 0)) {
            int13 = script5171(int5);
        };
        if ((int6 == 5)) {
            if ((((varbitclan_6690 == int5) || (varbitclan_6699 == int5)) || (varbitclan_6708 == int5))) {
                stack(7659);
                stack(script5216(int0));
                IF_SETGRAPHIC();
                IF_SETOP(2, "", script4972(int0));
            } else if ((int4 > 0)) {
                stack(7657);
                stack(script5216(int0));
                IF_SETGRAPHIC();
                IF_SETOP(2, "Reset hotspot to its default state", script4972(int0));
            } else {
                stack(7658);
                stack(script5216(int0));
                IF_SETGRAPHIC();
                IF_SETOP(2, "", script4972(int0));
            };
        };
        int11 = script4972(int0);
        if ((int11 == comp(-1, 65535))) {
            return;
        };
        if ((CC_FIND(int11, 0) == 1)) {
            CC_SETGRAPHIC(int13);
        };
    };
    return;
}