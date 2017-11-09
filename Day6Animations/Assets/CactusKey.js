#pragma strict

public var anim : Animator;

function Start () {
	anim = GetComponent.<Animator>();
}

function Update () {
	if (Input.GetKey(KeyCode.RightShift)) {
		anim.SetTrigger("Attack");
	}
}