//
function script4026(): void {
    if ((IF_FIND(comp(1862, 4)) == 1)) {  // mtxfair17_scav:req_1_amount
        CC_SETTEXT(inttostring(varbitplayer_35495, 10));
    };
    if ((IF_FIND(comp(1862, 6)) == 1)) {  // mtxfair17_scav:req_1_model
        CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35489), 1);
    };
    if ((IF_FIND(comp(1862, 7)) == 1)) {  // mtxfair17_scav:req_1_name
        CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35489), -1);
    };
    if ((varbitplayer_35490 != 0)) {
        if ((IF_FIND(comp(1862, 20)) == 1)) {  // mtxfair17_scav:req_2_amount
            CC_SETTEXT(inttostring(varbitplayer_35496, 10));
        };
        if ((IF_FIND(comp(1862, 22)) == 1)) {  // mtxfair17_scav:req_2_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35490), 1);
        };
        if ((IF_FIND(comp(1862, 23)) == 1)) {  // mtxfair17_scav:req_2_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35490), -1);
        };
        if ((IF_FIND(comp(1862, 25)) == 1)) {  // mtxfair17_scav:req_3_amount
            CC_SETTEXT(inttostring(varbitplayer_35497, 10));
        };
        if ((IF_FIND(comp(1862, 27)) == 1)) {  // mtxfair17_scav:req_3_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35491), 1);
        };
        if ((IF_FIND(comp(1862, 28)) == 1)) {  // mtxfair17_scav:req_3_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35491), -1);
        };
        if ((IF_FIND(comp(1862, 30)) == 1)) {  // mtxfair17_scav:req_4_amount
            CC_SETTEXT(inttostring(varbitplayer_35501, 10));
        };
        if ((IF_FIND(comp(1862, 32)) == 1)) {  // mtxfair17_scav:req_4_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35492), 1);
        };
        if ((IF_FIND(comp(1862, 33)) == 1)) {  // mtxfair17_scav:req_4_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35492), -1);
        };
        if ((IF_FIND(comp(1862, 35)) == 1)) {  // mtxfair17_scav:req_5_amount
            CC_SETTEXT(inttostring(varbitplayer_35502, 10));
        };
        if ((IF_FIND(comp(1862, 37)) == 1)) {  // mtxfair17_scav:req_5_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35493), 1);
        };
        if ((IF_FIND(comp(1862, 38)) == 1)) {  // mtxfair17_scav:req_5_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35493), -1);
        };
        if ((IF_FIND(comp(1862, 40)) == 1)) {  // mtxfair17_scav:req_6_amount
            CC_SETTEXT(inttostring(varbitplayer_35503, 10));
        };
        if ((IF_FIND(comp(1862, 42)) == 1)) {  // mtxfair17_scav:req_6_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35494), 1);
        };
        if ((IF_FIND(comp(1862, 43)) == 1)) {  // mtxfair17_scav:req_6_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35494), -1);
        };
        if ((varbitplayer_35505 == 1)) {
            IF_SETHIDE(false, comp(1862, 39));  // mtxfair17_scav:req_5_complete
        };
        if ((varbitplayer_35506 == 1)) {
            IF_SETHIDE(false, comp(1862, 44));  // mtxfair17_scav:req_6_complete
        };
        if ((varbitplayer_35498 == 1)) {
            IF_SETHIDE(false, comp(1862, 8));  // mtxfair17_scav:req_1_complete
        };
        if ((varbitplayer_35499 == 1)) {
            IF_SETHIDE(false, comp(1862, 24));  // mtxfair17_scav:req_2_complete
        };
        if ((varbitplayer_35500 == 1)) {
            IF_SETHIDE(false, comp(1862, 29));  // mtxfair17_scav:req_3_complete
        };
        if ((varbitplayer_35504 == 1)) {
            IF_SETHIDE(false, comp(1862, 34));  // mtxfair17_scav:req_4_complete
        };
    } else {
        if ((IF_FIND(comp(1862, 20)) == 1)) {  // mtxfair17_scav:req_2_amount
            CC_SETTEXT(inttostring(varbitplayer_35497, 10));
        };
        if ((IF_FIND(comp(1862, 22)) == 1)) {  // mtxfair17_scav:req_2_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35491), 1);
        };
        if ((IF_FIND(comp(1862, 23)) == 1)) {  // mtxfair17_scav:req_2_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35491), -1);
        };
        if ((IF_FIND(comp(1862, 25)) == 1)) {  // mtxfair17_scav:req_3_amount
            CC_SETTEXT(inttostring(varbitplayer_35501, 10));
        };
        if ((IF_FIND(comp(1862, 27)) == 1)) {  // mtxfair17_scav:req_3_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35492), 1);
        };
        if ((IF_FIND(comp(1862, 28)) == 1)) {  // mtxfair17_scav:req_3_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35492), -1);
        };
        if ((IF_FIND(comp(1862, 30)) == 1)) {  // mtxfair17_scav:req_4_amount
            CC_SETTEXT(inttostring(varbitplayer_35502, 10));
        };
        if ((IF_FIND(comp(1862, 32)) == 1)) {  // mtxfair17_scav:req_4_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35493), 1);
        };
        if ((IF_FIND(comp(1862, 33)) == 1)) {  // mtxfair17_scav:req_4_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35493), -1);
        };
        if ((IF_FIND(comp(1862, 35)) == 1)) {  // mtxfair17_scav:req_5_amount
            CC_SETTEXT(inttostring(varbitplayer_35503, 10));
        };
        if ((IF_FIND(comp(1862, 37)) == 1)) {  // mtxfair17_scav:req_5_model
            CC_SETOBJECT(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35494), 1);
        };
        if ((IF_FIND(comp(1862, 38)) == 1)) {  // mtxfair17_scav:req_5_name
            CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 12438 as cs2enum, varbitplayer_35494), -1);
        };
        if ((IF_FIND(comp(1862, 40)) == 1)) {  // mtxfair17_scav:req_6_amount
            IF_SETHIDE(true, comp(1862, 40));  // mtxfair17_scav:req_6_amount
        };
        if ((IF_FIND(comp(1862, 42)) == 1)) {  // mtxfair17_scav:req_6_model
            IF_SETHIDE(true, comp(1862, 42));  // mtxfair17_scav:req_6_model
        };
        if ((IF_FIND(comp(1862, 43)) == 1)) {  // mtxfair17_scav:req_6_name
            IF_SETHIDE(true, comp(1862, 43));  // mtxfair17_scav:req_6_name
        };
        if ((IF_FIND(comp(1862, 43)) == 1)) {  // mtxfair17_scav:req_6_name
            IF_SETHIDE(true, comp(1862, 41));  // mtxfair17_scav:req_6_x
        };
        if ((varbitplayer_35506 == 1)) {
            IF_SETHIDE(false, comp(1862, 39));  // mtxfair17_scav:req_5_complete
        };
        if ((varbitplayer_35498 == 1)) {
            IF_SETHIDE(false, comp(1862, 8));  // mtxfair17_scav:req_1_complete
        };
        if ((varbitplayer_35500 == 1)) {
            IF_SETHIDE(false, comp(1862, 24));  // mtxfair17_scav:req_2_complete
        };
        if ((varbitplayer_35504 == 1)) {
            IF_SETHIDE(false, comp(1862, 29));  // mtxfair17_scav:req_3_complete
        };
        if ((varbitplayer_35505 == 1)) {
            IF_SETHIDE(false, comp(1862, 34));  // mtxfair17_scav:req_4_complete
        };
    };
    return;
}