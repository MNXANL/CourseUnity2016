#pragma strict

public var speed : float = 3.0f;
public var maxX : float = 20.0f;

private var goesRight : boolean = true;

function Start () {

}

function Update () {
	if (goesRight) {
		transform.rotation.x += speed*Time.deltaTime;
	}
	else {
		transform.rotation.x -= speed*Time.deltaTime;
	}

	if (transform.position.x >= maxX) {
		goesRight = false;
	}
	if (transform.position.x <= -maxX) {
		goesRight = true;
	}
}


