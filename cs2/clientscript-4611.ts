//[clientscript,skillcape_build_preview]
function script4611(): void {
    IF_SETMODEL(121926 as model, comp(20, 266));  // skillcape_customise:cape
    IF_SETMODEL(121926 as model, comp(20, 265));  // skillcape_customise:model1
    IF_SETMODEL(121926 as model, comp(20, 268));  // skillcape_customise:model2
    IF_SETMODEL(121926 as model, comp(20, 269));  // skillcape_customise:model3
    IF_SETMODEL(121926 as model, comp(20, 270));  // skillcape_customise:model4
    IF_SETMODEL(121926 as model, comp(20, 267));  // skillcape_customise:cape_particles
    IF_SETPOSITION(0, 0, 1, 1, comp(20, 265));  // skillcape_customise:model1
    IF_SETPOSITION(0, 0, 1, 1, comp(20, 268));  // skillcape_customise:model2
    IF_SETPOSITION(0, 0, 1, 1, comp(20, 269));  // skillcape_customise:model3
    IF_SETPOSITION(0, 0, 1, 1, comp(20, 270));  // skillcape_customise:model4
    IF_SETMODELANGLE(0, 0, 0, 1024, 0, 440, comp(20, 266));  // skillcape_customise:cape
    IF_SETMODELANGLE(0, 0, 0, 1024, 0, 440, comp(20, 265));  // skillcape_customise:model1
    IF_SETMODELANGLE(0, 0, 0, 1024, 0, 440, comp(20, 268));  // skillcape_customise:model2
    IF_SETMODELANGLE(0, 0, 0, 1024, 0, 440, comp(20, 269));  // skillcape_customise:model3
    IF_SETMODELANGLE(0, 0, 0, 1024, 0, 440, comp(20, 270));  // skillcape_customise:model4
    CC_DELETEALL(comp(20, 258));  // skillcape_customise:particles_colour_buttons
    CC_DELETEALL(comp(20, 257));  // skillcape_customise:particles_colour_buttons_inactive
    switch (varplayer_8573) {
        case 20767:
        case 20768:
        case 32151: {
            IF_SETMODEL(65300 as model, comp(20, 266));  // skillcape_customise:cape
            break;
        }
        case 47885:
        case 20769:
        case 20770:
        case 32152: {
            IF_SETMODEL(65297 as model, comp(20, 266));  // skillcape_customise:cape
            break;
        }
        case 47888:
        case 20771:
        case 20772:
        case 32153: {
            IF_SETMODEL(65295 as model, comp(20, 266));  // skillcape_customise:cape
            break;
        }
        case 53863:
        case 53864:
        case 53865: {
            script11511(49275, 1310978, 1310977);
            IF_SETMODEL(132188 as model, comp(20, 266));  // skillcape_customise:cape
            IF_SETMODEL(enum_getvalue(0, 31, 17270 as cs2enum, varbitplayer_54932), comp(20, 267));  // skillcape_customise:cape_particles
            break;
        }
        case 53857:
        case 53859:
        case 53866:
        case 53867:
        case 53870: {
            script11511(49276, 1310978, 1310977);
            IF_SETMODEL(120960 as model, comp(20, 266));  // skillcape_customise:cape
            IF_SETMODEL(enum_getvalue(0, 31, 17268 as cs2enum, varbitplayer_54930), comp(20, 267));  // skillcape_customise:cape_particles
            break;
        }
        case 53860:
        case 53862:
        case 53868:
        case 53869:
        case 53871: {
            script11511(49276, 1310978, 1310977);
            IF_SETMODEL(120962 as model, comp(20, 266));  // skillcape_customise:cape
            IF_SETMODEL(enum_getvalue(0, 31, 17269 as cs2enum, varbitplayer_54931), comp(20, 267));  // skillcape_customise:cape_particles
            break;
        }
        case 56221:
        case 56335: {
            IF_SETMODEL(131952 as model, comp(20, 265));  // skillcape_customise:model1
            IF_SETPOSITION(0, 50, 1, 1, comp(20, 265));  // skillcape_customise:model1
            IF_SETMODELANGLE(0, 0, 0, 0, 0, 400, comp(20, 265));  // skillcape_customise:model1
            break;
        }
        case 56214:
        case 56336: {
            IF_SETMODEL(131946 as model, comp(20, 265));  // skillcape_customise:model1
            IF_SETPOSITION(0, 100, 1, 1, comp(20, 265));  // skillcape_customise:model1
            IF_SETMODELANGLE(0, 0, 0, 1024, 0, 400, comp(20, 265));  // skillcape_customise:model1
            break;
        }
        case 56229:
        case 56227:
        case 56226:
        case 56228:
        case 56333:
        case 56334:
        case 56332:
        case 56331: {
            IF_SETMODEL(131968 as model, comp(20, 265));  // skillcape_customise:model1
            IF_SETMODEL(131966 as model, comp(20, 268));  // skillcape_customise:model2
            switch (GENDER()) {
                case 1: {
                    IF_SETMODEL(131965 as model, comp(20, 269));  // skillcape_customise:model3
                    IF_SETMODEL(131964 as model, comp(20, 270));  // skillcape_customise:model4
                    break;
                }
                case 0: {
                    IF_SETMODEL(131972 as model, comp(20, 269));  // skillcape_customise:model3
                    IF_SETMODEL(131970 as model, comp(20, 270));  // skillcape_customise:model4
                    break;
                }
            };
            IF_SETMODELANGLE(0, 0, 0, 0, 0, 440, comp(20, 265));  // skillcape_customise:model1
            IF_SETMODELANGLE(0, 0, 0, 0, 0, 440, comp(20, 268));  // skillcape_customise:model2
            IF_SETMODELANGLE(0, 0, 0, 0, 0, 440, comp(20, 269));  // skillcape_customise:model3
            IF_SETMODELANGLE(0, 0, 0, 0, 0, 440, comp(20, 270));  // skillcape_customise:model4
            break;
        }
    };
    IF_SETONVARTRANSMIT(callback(script4612, 8572, 426, 2), comp(20, 266));  // skillcape_customise:cape
    IF_SETONVARTRANSMIT(callback(script4611, 11583, 11583, 2), comp(20, 267));  // skillcape_customise:cape_particles
    script4613(1310986);
    return;
}