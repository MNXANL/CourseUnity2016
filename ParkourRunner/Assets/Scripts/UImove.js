#pragma strict

//@moveFactor(0.0f, 1.0f)
public var offset : float = 5.0f;
public var moveFactor : float = 0.05f;


private var posX : float;
private var posY : float;

private var movesX : boolean; //is X moving to the right?
private var movesY : boolean; //is Y moving to the right?

function Start () {
	posX = transform.position.x;
	posY = transform.position.y;
}









function Update () {
	Debug.Log("POSITION : "+ transform.position.x + ", " + transform.position.y);
	Debug.Log("BOOLEANS : "+ movesX + ", " + movesY);
	if (Input.GetAxis("Mouse X")<0) {
		if (transform.position.x >= posX - offset) {
			transform.position.x -= moveFactor;
			movesX = false;
		}
	}
	else if (Input.GetAxis("Mouse X")>0) {
		if (transform.position.x <= posX + offset) {
			transform.position.x += moveFactor;
			movesX = true;
		}
	}

	if (Input.GetAxis("Mouse Y")<0) {
		if (transform.position.y >= posY - offset) {
			transform.position.y -= moveFactor;
			movesY = false;
		}
	}
	else if (Input.GetAxis("Mouse Y")>0) {
		if (transform.position.y <= posY + offset) {
			transform.position.y += moveFactor;
			movesY = true;
		}
	}

	else if (Input.GetAxis("Mouse X") == 0 && Input.GetAxis("Mouse Y") == 0) {
		if (transform.position.x > posX && movesX)  transform.position.x -= moveFactor;
		if (transform.position.x < posX && !movesX) transform.position.x += moveFactor;

		if (transform.position.y > posY && movesY)  transform.position.y -= moveFactor;
		if (transform.position.y < posY && !movesY) transform.position.y += moveFactor;

	}
}