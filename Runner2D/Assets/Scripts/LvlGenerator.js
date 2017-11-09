#pragma strict

public var LastPlat : GameObject;

public var offsetX : float = 6.0f;
public var rangeX : float = 4.0f;
public var rangeY : float = 4.0f;

public var minY : float = -4.0f;
public var maxY : float = 3.0f;

//private var q : queue; //Queue of elements generated


function Start () {

}

function Update () {
	if (LastPlat.GetComponent.<Renderer>().isVisible ) {
		SpawnPlat();
	}
	else {
		//Destroy(q.pop());
	}
}

function SpawnPlat() {
	var lastPos : Vector3 = LastPlat.transform.position;
	var newX : float = lastPos.x + offsetX + Random.Range(-1.0f, 1.0f) * rangeX;
	var newY : float = lastPos.y + Random.Range(-1.0f, 1.0f) * rangeY;

	newY = Mathf.Clamp(newY, minY, maxY);

	var newPos : Vector3 = Vector3(newX, newY, lastPos.z);

	LastPlat = Instantiate(LastPlat, newPos, Quaternion());
	//q.push(LastPlat);
}

