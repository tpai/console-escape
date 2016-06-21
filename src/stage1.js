import { sys, sys2, host } from "./lib";
import $ from "jquery";
import { sk, explore, watch, setState, hint } from "./skills";
import { checkStage } from "./lobby";

export default () => {
	sys("你被困在一間密室裡了，試著逃出去吧！")
	sys("You got trapped in a chamber, try to get outta here!");
	sys("Type 'sk()' to see skills.");
	
	/* Declare objects */
	
	var door = {
		name: "door",
		lock: true
	};
	
	var pc = {
		name: "pc",
		login: (username, password) => {
			$.get(host + "/stage1/loginPC/" + username + "/" + password, function(data) {
				sys(data.msg);
				data.success && $.getScript(host + data.reward.api, function(success) {
					sys("Skill learned:")
					sys2(data.skillText);
					window.s = se;
				})
			});
		} 
	};
	
	var postnote = {
		name: "postnote",
		text: "boss:[worst password]"
	};
	
	/* Make an array include all objects */
	
	var item = [door, pc, postnote];
	
	/* Detect result */
	
	var checkResult = () => {
		if (!door.lock) {
			sys("你成功打開門了！");
			sys("You successfully open the door and walk out!");
			// clear all objects in this stage
			item.forEach((element) => { element = null; });
			// go next stage
			localStorage.nowStage = 2;
			checkStage();
		}
	};
	
	/* Assign method */
	
	var ex = (itemName) => { explore (item, itemName); }
    var wa = (itemName) => { watch (item, itemName); }
    var se = (itemName, key, value) => { setState (item, itemName, key, value); checkResult (); }
	var ht = () => { hint(); }

	window.e = ex;
	window.w = wa;
	window.sk = () => sk(1);
    window.h = ht;
};