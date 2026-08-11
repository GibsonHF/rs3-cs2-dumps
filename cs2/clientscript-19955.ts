//
function script19955(): void {
    IF_SETRECOL(1, 4923, 5571, comp(1335, 25));  // easter_hub_boating_customisations:boat_skin_1_model
    IF_SETRETEX(1, 21107 as material, 21109 as material, comp(1335, 25));  // easter_hub_boating_customisations:boat_skin_1_model
    IF_SETRECOL(1, 4923, 58487, comp(1335, 43));  // easter_hub_boating_customisations:boat_skin_2_model
    IF_SETRETEX(1, 21107 as material, 21112 as material, comp(1335, 43));  // easter_hub_boating_customisations:boat_skin_2_model
    IF_SETRECOL(1, 4923, 8145, comp(1335, 34));  // easter_hub_boating_customisations:boat_skin_3_model
    IF_SETRETEX(1, 21107 as material, 21110 as material, comp(1335, 34));  // easter_hub_boating_customisations:boat_skin_3_model
    if ((varbitplayer_57862 == 1)) {
        IF_SETHIDE(true, comp(1335, 23));  // easter_hub_boating_customisations:boat_skin_1_disabled_layer
        script3536("Bronze skin", 87490582, -1);
    } else {
        script3536("Bronze skin<br><col=EB2F2F>This can be unlocked by completing a boat race in 2 minutes.", 87490583, -1);
    };
    if ((varbitplayer_57863 == 1)) {
        IF_SETHIDE(true, comp(1335, 41));  // easter_hub_boating_customisations:boat_skin_2_disabled_layer
        script3536("Silver skin", 87490600, -1);
    } else {
        script3536("Silver skin<br><col=EB2F2F>This can be unlocked by completing a boat race in 1 minute 45 seconds.", 87490601, -1);
    };
    if ((varbitplayer_57864 == 1)) {
        IF_SETHIDE(true, comp(1335, 32));  // easter_hub_boating_customisations:boat_skin_3_disabled_layer
        script3536("Gold skin", 87490591, -1);
    } else {
        script3536("Gold skin<br><col=EB2F2F>This can be unlocked by completing a boat race in 1 minute 30 seconds.", 87490592, -1);
    };
    if ((varbitplayer_57865 == 1)) {
        IF_SETHIDE(true, comp(1335, 50));  // easter_hub_boating_customisations:boat_decoration_1_disabled_layer
        script3536("Ornament decoration", 87490609, -1);
    } else {
        script3536("Ornament decoration<br><col=EB2F2F>This can be unlocked from The Grand Eggs-change.", 87490610, -1);
    };
    if ((varbitplayer_57866 == 1)) {
        IF_SETHIDE(true, comp(1335, 77));  // easter_hub_boating_customisations:boat_decoration_2_disabled_layer
        script3536("Bunting decoration", 87490636, -1);
    } else {
        script3536("Bunting decoration<br><col=EB2F2F>This can be unlocked from The Grand Eggs-change.", 87490637, -1);
    };
    if ((varbitplayer_57867 == 1)) {
        IF_SETHIDE(true, comp(1335, 68));  // easter_hub_boating_customisations:boat_decoration_3_disabled_layer
        script3536("Flowers decoration", 87490627, -1);
    } else {
        script3536("Flowers decoration<br><col=EB2F2F>This can be unlocked from The Grand Eggs-change.", 87490628, -1);
    };
    if ((varbitplayer_57868 == 1)) {
        IF_SETHIDE(true, comp(1335, 59));  // easter_hub_boating_customisations:boat_decoration_4_disabled_layer
        script3536("Eggs decoration", 87490618, -1);
    } else {
        script3536("Eggs decoration<br><col=EB2F2F>This can be unlocked from The Grand Eggs-change.", 87490619, -1);
    };
    if ((varbitplayer_57869 == 1)) {
        IF_SETHIDE(false, comp(1335, 21));  // easter_hub_boating_customisations:boat_skin_1_selected_layer
    };
    if ((varbitplayer_57870 == 1)) {
        IF_SETHIDE(false, comp(1335, 39));  // easter_hub_boating_customisations:boat_skin_2_selected_layer
    };
    if ((varbitplayer_57871 == 1)) {
        IF_SETHIDE(false, comp(1335, 30));  // easter_hub_boating_customisations:boat_skin_3_selected_layer
    };
    if ((varbitplayer_57872 == 1)) {
        IF_SETHIDE(false, comp(1335, 48));  // easter_hub_boating_customisations:boat_decoration_1_selected_layer
    };
    if ((varbitplayer_57873 == 1)) {
        IF_SETHIDE(false, comp(1335, 75));  // easter_hub_boating_customisations:boat_decoration_2_selected_layer
    };
    if ((varbitplayer_57874 == 1)) {
        IF_SETHIDE(false, comp(1335, 66));  // easter_hub_boating_customisations:boat_decoration_3_selected_layer
    };
    if ((varbitplayer_57875 == 1)) {
        IF_SETHIDE(false, comp(1335, 57));  // easter_hub_boating_customisations:boat_decoration_4_selected_layer
    };
    return;
}