#pragma strict

import UnityEngine.UI;
//@moveFactor(0.0f, 1.0f)
public var offset : float = 5.0f;
public var angle : float = 1.0f;


private var t : float = 0.0f;
private var kTime : int = 0;

private var posX : float;
private var posY : float;
private var i : int = 0;

public var txt : Text;

private var keyPress : boolean = false;


function Start () {
	posX = transform.position.x;
	posY = transform.position.y;

}









function Update () {
	t += Time.deltaTime;
	if (Input.GetKeyDown(KeyCode.LeftShift)) {
		i = 0;
		keyPress = true;
		if (i < 2) {
			transform.position.x -= offset*angle;
			transform.position.y += offset;
			++i;
		}
	}
	else if (Input.GetKeyUp(KeyCode.LeftShift)) {
		i = 0;
		if (i < 2) {
			transform.position.x += offset*angle;
			transform.position.y -= offset;
			++i;
		}
		keyPress = false;
	}
	if (t >= 1.0f) {
		++kTime;
		txt.text = ""+kTime;
		t = 0;
	}
}