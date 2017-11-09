#pragma strict

public var factor : float = 0.05f;

private var t : float = 0.0f;
private var goFall : boolean = false;

function Start () {

}

function Update () {
	if (goFall) {
		t += Time.deltaTime;
		transform.position.y -= factor * t;
	}
}

function OnCollisionEnter(col : Collision) {
	Debug.Log("GRAVITY HERE I COME");
	if (col.gameObject.tag == "Player") {
		goFall = true;
	}
}