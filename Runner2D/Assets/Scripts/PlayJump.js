#pragma strict

public var jumpForce : float = 5.0f;
private var curJumpForce : float;

private var ground : GameObject;
private var rb : Rigidbody2D;

function Start () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {
	if(Input.GetButton("Jump") && isGrounded()) {
		curJumpForce = jumpForce;
	}
	else if (Input.GetButtonUp("Jump")) {
		curJumpForce = 0;
	}
}

function FixedUpdate() {
	curJumpForce -= 1.5f;
	if (curJumpForce > 0) {
		rb.AddForce(Vector2.up * curJumpForce);
	}
}

function isGrounded() : boolean {
	return (ground != null);
}

function OnCollisionEnter2D (col : Collision2D) {
	for (var contact : ContactPoint2D in col.contacts) {
		if (contact.normal.y > 0.8) {
			ground = col.gameObject;
			break;
		}
	}
}

function OnCollisionExit2D (col : Collision2D) {
	if (col.gameObject == ground) ground = null;
}