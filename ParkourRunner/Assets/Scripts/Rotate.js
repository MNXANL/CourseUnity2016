#pragma strict

public var speed : float = 3.0f;

function Start () {
 transform.rotation.x = -90.0f;
}

function Update () {
	if (transform.rotation.x == 1) transform.rotation.x = -1;
	transform.rotation.x += speed*Time.deltaTime;
	//Debug.Log(transform.rotation.x);
}


