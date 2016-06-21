import { sys, sys2, host } from "./lib";
import $ from "jquery";
import { sk, explore, watch, setState } from "./skills";
import { checkStage } from "./lobby";

export default () => {
	sys("你走到了樓梯間，突然有股神秘力量擋住去路！");
	sys("牆上看起來有些塗鴉，其中幾個字糊掉了。");
	sys("You arrived the stairs, and suddenly there's a unknown force block your way.");
	sys("The wall seems have some paintings, but few words blur.");
    sys("Type 'sk()' to see skills.");
	
	var wall = {
		name: "wall",
        paint1: "E",
		paint2: "X00X"
    };
    var ground = {
		name: "ground",
		paint1: "XERX",
        paint2: "detonation"
    };
    
    /* Make an array include all objects */
	
	var item = [wall, ground];
	
	/* Detect result */
	
	var checkResult = () => {
		if (wall.paint2 === "2008" && ground.paint1 === "ZERO") {
			sys("那個擋住你去路的神祕力量消失了！");
			sys("The unknown force has disappear!");
			// clear all objects in this stage
			item.forEach((element) => { element = null; });
			// go next stage
			localStorage.nowStage = 4;
			checkStage();
		}
	};
    
    var ex = (itemName) => { explore (item, itemName); }
    var wa = (itemName) => { watch (item, itemName); }
    var se = (itemName, key, value) => { setState (item, itemName, key, value); checkResult(); }

    window.e = ex;
    window.w = wa;
    window.s = se;
    window.sk = () => sk(3);
};