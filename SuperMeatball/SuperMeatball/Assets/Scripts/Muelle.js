#pragma strict

public var jumpForce : float = 25.0f;

function Update () {
}

function OnCollisionEnter(col : Collision){
	if(col.gameObject.CompareTag("Player"))	{
		var jumpDirection : Vector3 = transform.up;
		col.gameObject.GetComponent.<Rigidbody>().velocity = jumpDirection * jumpForce;
	}
}