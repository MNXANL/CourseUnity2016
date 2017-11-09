#pragma strict

public var jumpForce : float = 15.0f;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col: Collision) {
	if (col.gameObject.CompareTag("Player")) {
		//var jumpDirection : Vector3 = transform.TransformDirection(Vector3.up);
		var jumpDirection : Vector3 = transform.up;
		col.gameObject.GetComponent.<Rigidbody>().velocity = jumpDirection*jumpForce;
	}
}