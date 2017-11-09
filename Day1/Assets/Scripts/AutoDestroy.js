#pragma strict

public var lifeTime : float = 10.0f;

function Start () {
	Destroy(gameObject, lifeTime); //Destruye un objeto <gameObject> en <lifeTime> segundos.
}
