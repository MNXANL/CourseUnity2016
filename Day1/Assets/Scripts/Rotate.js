#pragma strict

public var target : GameObject;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up, 100.0 * Time.deltaTime);
}