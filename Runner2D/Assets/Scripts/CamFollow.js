#pragma strict

public var player : GameObject;
public var offset : float;
private var iniY : float;

function Start () {
	iniY = transform.position.y;
}

function Update () {
	var playerX : float = player.transform.position.x;
	var myPos : Vector3 = transform.position;

	transform.position = Vector3(playerX + offset, iniY, myPos.z);

}