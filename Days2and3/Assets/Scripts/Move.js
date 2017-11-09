#pragma strict

public var Speed : float =  15.0f;
private var SpeedAir : float;
public var Jump : float = 15.0f;
public var accAir : float = 1.0f;


private var rb : Rigidbody;
private var isColliding : boolean = false;
private var DoubleJump : boolean = false;
private var JumpDirection : Vector3;


function OnCollisionStay (col : Collision) {
	isColliding = true;
	if (col.contacts.length > 0) {
		JumpDirection = col.contacts[0].normal;
		JumpDirection.Normalize();
	}
}

function OnCollisionExit (col : Collision) {
	isColliding = false;
}

function Start () {
	SpeedAir = (3*Speed)/4; 	//SpeedAir = 0.75*Speed
	rb = GetComponent.<Rigidbody>();
	rb.maxAngularVelocity = Speed;
}

function Jumper() {
	rb.velocity += JumpDirection * Jump * 0.5;
	rb.velocity.y += Jump;
}

function Update () {
	if (isColliding) { //Suelo/Pared
		
		if (Input.GetKey(KeyCode.A)) {
			rb.angularVelocity.z = -Speed;
		}
		else if (Input.GetKey(KeyCode.D)) {
			rb.angularVelocity.z = Speed;
		}
		else {
			rb.angularVelocity.z = 0;
		}
		Debug.DrawRay(transform.position, JumpDirection, Color.green);
	}

	else { 			//Aire
		if (Input.GetKey(KeyCode.A) && rb.velocity.x < SpeedAir) {
			rb.velocity.x += accAir;
		}
		else if (Input.GetKey(KeyCode.D) && rb.velocity.x > -SpeedAir) {
			rb.velocity.x -= accAir;
		}
	}

	if (Input.GetKeyDown(KeyCode.Space) && Input.GetKeyDown(KeyCode.A) && isColliding) {rb.velocity.x += Jump;}
	if (Input.GetKeyDown(KeyCode.Space) && Input.GetKeyDown(KeyCode.D) && isColliding) {rb.velocity.x -= Jump;}
	if (Input.GetKeyDown(KeyCode.Space)) {
		if (isColliding) {
			DoubleJump = false;
			Jumper();
		}
		else {
			JumpDirection = Vector3.zero;
			if (!DoubleJump) {
				DoubleJump = true;
				Jumper();
			}
		}
	}
}

